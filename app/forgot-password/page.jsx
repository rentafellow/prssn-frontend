"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";
import Alert from "../components/common/Alert";
import AuthShell, { AuthField, AuthSubmit, IconMail } from "../components/auth/AuthShell";

const ForgotPassword = () => {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage(null);

        try {
            await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/forgot-password`, { email });
            setMessage({ type: "success", title: "Code sent", message: `Check ${email} for your reset code.` });
            setTimeout(() => {
                router.push(`/reset-password?email=${encodeURIComponent(email)}`);
            }, 1500);
        } catch (error) {
            setMessage({
                type: "error",
                title: "Couldn't send a code",
                message: error.response?.data?.message || "Please try again in a moment.",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <AuthShell
            eyebrow="Account recovery"
            title="Forgot your password?"
            subtitle="Enter the email you signed up with and we'll send a 6-digit reset code."
            footer={
                <>
                    Remembered it?{" "}
                    <Link href="/login" className="font-semibold text-moss hover:text-ink transition-colors">
                        Back to sign in
                    </Link>
                </>
            }
        >
            {message && (
                <Alert
                    type={message.type}
                    title={message.title}
                    message={message.message}
                    onClose={() => setMessage(null)}
                />
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
                <AuthField
                    id="email"
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    icon={IconMail}
                    required
                    autoComplete="email"
                    autoFocus
                />

                <AuthSubmit loading={loading} loadingText="Sending…">
                    Send reset code
                </AuthSubmit>
            </form>
        </AuthShell>
    );
};

export default ForgotPassword;
