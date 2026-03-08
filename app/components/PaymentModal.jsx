
import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

// Make sure to add NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY to your .env.local
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const CheckoutForm = ({ clientSecret, bookingId, onSuccess, onError }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const { token } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        setIsLoading(true);

        const result = await stripe.confirmPayment({
            elements,
            redirect: 'if_required', // Avoid redirect if possible
        });

        if (result.error) {
            setErrorMessage(result.error.message);
            setIsLoading(false);
            if (onError) onError(result.error);
        } else if (result.paymentIntent && result.paymentIntent.status === 'succeeded') {
            // Payment succeeded, now verify with backend
            try {
                await axios.post(
                    `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/payments/verify-payment`,
                    { 
                        paymentIntentId: result.paymentIntent.id,
                        bookingId: bookingId
                    },
                    { headers: { Authorization: `Bearer ${token}` } }
                );
                onSuccess(result.paymentIntent);
            } catch (err) {
                console.error("Verification failed", err);
                setErrorMessage("Payment succeeded but verification failed. Please contact support.");
            }
            setIsLoading(false);
        } else {
             setErrorMessage("Payment status: " + result.paymentIntent.status);
             setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="w-full">
            <PaymentElement />
            {errorMessage && <div className="text-red-500 text-sm mt-4">{errorMessage}</div>}
            <button 
                disabled={!stripe || isLoading} 
                className="w-full mt-6 bg-green-600 text-white font-bold py-3 rounded-xl hover:bg-green-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {isLoading ? 'Processing...' : 'Pay Now'}
            </button>
        </form>
    );
};

const PaymentModal = ({ booking, onClose, onSuccess }) => {
    const [clientSecret, setClientSecret] = useState('');
    const { token } = useAuth();
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchClientSecret = async () => {
            try {
                const res = await axios.post(
                    `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/payments/create-intent`,
                    { bookingId: booking._id },
                    { headers: { Authorization: `Bearer ${token}` } }
                );
                setClientSecret(res.data.clientSecret);
            } catch (err) {
                console.error("Failed to fetch payment intent", err);
                const serverError = err.response?.data?.error;
                const message = err.response?.data?.message || err.message || "Failed to initialize payment.";
                setError(serverError ? `${message}: ${serverError}` : message);
            }
        };

        if (booking) {
            fetchClientSecret();
        }
    }, [booking, token]);

    return (
        <div className="fixed inset-0 bg-black/50 overflow-y-auto h-full w-full z-50 flex items-center justify-center p-4">
            <div className="relative bg-white rounded-3xl shadow-xl max-w-md w-full p-8 overflow-hidden">
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                >
                    ✕
                </button>
                
                <div className="mb-6 text-center">
                    <h3 className="text-2xl font-bold text-gray-900">Complete Payment</h3>
                    <p className="text-gray-500 mt-2">
                        Complete your payment to enter the session with <span className="font-bold text-black">{booking.companionId?.fullName || "your Companion"}</span>
                    </p>
                     <div className="mt-4 bg-gray-50 py-3 rounded-xl border border-gray-100">
                        <p className="text-sm text-gray-400 uppercase tracking-widest font-bold mb-1">Total Amount</p>
                        <p className="text-3xl font-bold text-green-600">
                           ₹{(booking.pricePerHour * (booking.duration === '30' ? 0.5 : booking.duration === '90' ? 1.5 : 1)).toFixed(2)}
                        </p>
                    </div>
                </div>

                {error ? (
                    <div className="text-red-500 text-center">{error}</div>
                ) : clientSecret ? (
                    <Elements stripe={stripePromise} options={{ clientSecret }}>
                        <CheckoutForm 
                            clientSecret={clientSecret} 
                            bookingId={booking._id} 
                            onSuccess={onSuccess}
                        />
                    </Elements>
                ) : (
                    <div className="flex justify-center py-8">
                        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-gray-900"></div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PaymentModal;
