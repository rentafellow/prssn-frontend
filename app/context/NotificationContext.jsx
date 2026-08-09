"use client";
import React, { createContext, useState, useContext } from 'react';
import Notification from '../components/common/Alert';

const NotificationContext = createContext();

export const useNotification = () => useContext(NotificationContext);

export const NotificationProvider = ({ children }) => {
    const [notification, setNotification] = useState(null);

    /**
     * Show a notification
     * @param {'success' | 'error' | 'confirm' | 'prompt'} type 
     * @param {string} message 
     * @param {string} title 
     * @param {function} onConfirm (optional)
     */
    const showNotification = (type, message, title, onConfirm) => {
        setNotification({ 
            type, 
            message, 
            title: title || (type === 'error' ? 'Error' : 'Success'),
            onConfirm: onConfirm ? (val) => { onConfirm(val); setNotification(null); } : undefined
        });
    };

    const hideNotification = () => {
        setNotification(null);
    };

    return (
        <NotificationContext.Provider value={{ showNotification }}>
            {children}
            {notification && (
                <Notification
                    {...notification}
                    onClose={hideNotification}
                />
            )}
        </NotificationContext.Provider>
    );
};
