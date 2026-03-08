
"use client";
import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import { useAuth } from '../context/AuthContext';

const Chat = ({ bookingId }) => {
    const { userData, token } = useAuth();
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [socket, setSocket] = useState(null);
    const messagesEndRef = useRef(null);
    const [connectionStatus, setConnectionStatus] = useState('Connecting...');

    useEffect(() => {
        if (!token || !bookingId) return;

        // Initialize socket
        const socketUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
        const newSocket = io(socketUrl, {
            auth: { token },
            reconnection: true,
            reconnectionAttempts: 5,
        });

        setSocket(newSocket);

        newSocket.on('connect', () => {
            setConnectionStatus('Online');
            newSocket.emit('join_room', { bookingId });
        });

        newSocket.on('connect_error', (err) => {
            console.error("Connection Error:", err.message);
            setConnectionStatus('Connection Error');
        });

        newSocket.on('previous_messages', (prevMessages) => {
            setMessages(prevMessages);
            scrollToBottom();
        });

        newSocket.on('receive_message', (message) => {
            setMessages((prev) => [...prev, message]);
            scrollToBottom();
        });

        newSocket.on('error', (error) => {
            console.error('Socket logic error:', error);
            alert(typeof error === 'string' ? error : 'An error occurred');
        });

        return () => {
            newSocket.disconnect();
        };
    }, [bookingId, token]);

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (newMessage.trim() && socket) {
            socket.emit('send_message', { bookingId, message: newMessage });
            setNewMessage('');
        }
    };

    if (!userData) return null;

    return (
        <div className="flex flex-col h-[600px] w-full max-w-3xl mx-auto bg-white shadow-xl rounded-3xl overflow-hidden font-sans border border-gray-100">
            {/* Header */}
            <div className="bg-white/80 backdrop-blur-md p-4 flex justify-between items-center border-b border-gray-100">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-lg">💬</div>
                    <div>
                        <h2 className="font-bold text-gray-900 text-lg">Session Chat</h2>
                        <p className="text-xs text-gray-500 font-medium">Private & Secure</p>
                    </div>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">
                    <div className={`w-2 h-2 rounded-full ${connectionStatus === 'Online' ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></div>
                    <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">{connectionStatus}</span>
                </div>
            </div>
            
            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gray-50/50">
                 
                {messages.length === 0 ? (
                    <div className="text-center text-gray-400 mt-20 flex flex-col items-center">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4 text-2xl grayscale opacity-50">👋</div>
                        <p className="text-sm font-medium">No messages yet</p>
                        <p className="text-xs">Start the conversation!</p>
                    </div>
                ) : (
                    messages.map((msg, index) => {
                        const currentUserId = userData._id || userData.id || userData.userId;
                        const senderId = typeof msg.senderId === 'object' ? msg.senderId._id : msg.senderId;
                        const isMe = String(senderId) === String(currentUserId);

                        return (
                            <div key={index} className={`flex ${isMe ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2 duration-300`}>
                                <div className={`max-w-[80%] md:max-w-[70%] p-4 relative shadow-sm
                                    ${isMe ? 'bg-green-600 text-white rounded-2xl rounded-tr-sm' : 'bg-white text-gray-800 border border-gray-100 rounded-2xl rounded-tl-sm'}`}>
                                    
                                    {!isMe && <p className="text-[10px] font-bold text-gray-400 mb-1 uppercase tracking-wider">Companion</p>}
                                    <p className={`text-sm md:text-base font-medium whitespace-pre-wrap leading-relaxed ${isMe ? 'text-white' : 'text-gray-800'}`}>{msg.content}</p>
                                    <p className={`text-[10px] font-bold mt-2 text-right uppercase tracking-wider ${isMe ? 'text-green-200' : 'text-gray-300'}`}>
                                        {new Date(msg.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                                    </p>
                                </div>
                            </div>
                        );
                    })
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleSendMessage} className="p-4 bg-white border-t border-gray-100 flex gap-3 items-center">
                <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 px-4 py-3 bg-gray-50 border border-transparent focus:bg-white focus:border-gray-200 rounded-xl outline-none transition-all font-medium text-gray-700 placeholder:text-gray-400"
                />
                <button 
                    type="submit"
                    disabled={!newMessage.trim() || connectionStatus !== 'Online'}
                    className="p-3 bg-black text-white rounded-xl hover:bg-gray-800 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:hover:scale-100 transition-all shadow-lg shadow-gray-200"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
                    </svg>
                </button>
            </form>
        </div>
    );
};

export default Chat;
