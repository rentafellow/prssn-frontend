"use client";
import React, { useState, useEffect, useMemo, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import axios from "axios";
import Alert from "../components/common/Alert";
import { generateStrongPassword } from "../utils/password";
import AuthShell, { AuthField, AuthSubmit, EyeToggle, IconMail, IconLock } from "../components/auth/AuthShell";

// Same rules as sign-up, so a reset can't produce a password sign-up would reject.
const validatePassword = (pwd) => {
    if (pwd.length < 8) return "Password must be at least 8 characters long";
    if (!/[A-Z]/.test(pwd)) return "Add at least one uppercase letter";
    if (!/[a-z]/.test(pwd)) return "Add at least one lowercase letter";
    if (!/[0-9]/.test(pwd)) return "Add at least one number";
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(pwd)) return "Add at least one symbol (!@#$%^&*…)";
    return null;
};

const strengthOf = (pwd) => {
    if (!pwd) return { label: "", color: "bg-line", width: "0%" };
    let score = 0;
    if (pwd.length >= 8) score += 1;
    if (pwd.length >= 12) score += 1;
    if (/[A-Z]/.test(pwd) && /[a-z]/.test(pwd)) score += 1;
    if (/[0-9]/.test(pwd)) score += 1;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(pwd)) score += 1;
    if (score <= 2) return { label: "Weak", color: "bg-clay", width: "33%" };
    if (score <= 3) return { label: "Good", color: "bg-amber-500", width: "66%" };
    return { label: "Strong", color: "bg-moss", width: "100%" };
};

const ResetPasswordContent = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null);

    const strength = useMemo(() => strengthOf(newPassword), [newPassword]);

    useEffect(() => {
        const emailParam = searchParams.get("email");
        if (emailParam) setEmail(emailParam);
    }, [searchParams]);

    const suggestPassword = async () => {
        const suggested = generateStrongPassword();
        setNewPassword(suggested);
        setConfirmPassword(suggested);
        setShowPassword(true);
        let copied = false;
        try {
            await navigator.clipboard.writeText(suggested);
            copied = true;
        } catch {
            // clipboard unavailable — the password is visible on screen anyway
        }
        setMessage({
            type: "success",
            title: "Strong password ready",
            message: copied
                ? "Copied to your clipboard. Save it in a password manager before you continue."
                : "Save it in a password manager before you continue.",
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage(null);

        if (otp.length !== 6) {
            setMessage({ type: "error", title: "Check the code", message: "The reset code is 6 digits." });
            return;
        }
        const problem = validatePassword(newPassword);
        if (problem) {
            setMessage({ type: "error", title: "Password too weak", message: problem });
            return;
        }
        if (newPassword !== confirmPassword) {
            setMessage({ type: "error", title: "Passwords don't match", message: "Both password fields must be the same." });
            return;
        }

        setLoading(true);
        try {
            await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/reset-password`, {
                email,
                otp,
                newPassword,
            });
            setMessage({ type: "success", title: "Password updated", message: "Redirecting to sign in…" });
            setTimeout(() => router.push("/login"), 1500);
        } catch (error) {
            setMessage({
                type: "error",
                title: "Couldn't reset the password",
                message: error.response?.data?.message || "Check the code and try again.",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <AuthShell
            eyebrow="Account recovery"
            title="Set a new password"
            subtitle={
                email
                    ? <>Enter the 6-digit code we sent to <span className="text-ink font-semibold break-all">{email}</span> and choose a new password.</>
                    : "Enter your email, the 6-digit code we sent, and a new password."
            }
            footer={
                <>
                    Need a new code?{" "}
                    <Link href="/forgot-password" className="font-semibold text-moss hover:text-ink transition-colors">
                        Request one
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
                />

                <AuthField
                    id="otp"
                    label="6-digit code"
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
                    placeholder="••••••"
                    required
                    inputMode="numeric"
                    autoComplete="one-time-code"
                    maxLength={6}
                    autoFocus={!!email}
                    className="!pl-5 text-center font-display text-2xl font-semibold tracking-[0.45em] placeholder:tracking-[0.45em] placeholder:text-ink/20"
                />

                <AuthField
                    id="newPassword"
                    label="New password"
                    type={showPassword ? "text" : "password"}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="••••••••"
                    icon={IconLock}
                    required
                    autoComplete="new-password"
                    rightSlot={<EyeToggle shown={showPassword} onToggle={() => setShowPassword((v) => !v)} />}
                />

                <div className="space-y-2 -mt-1" aria-live="polite">
                    {newPassword.length > 0 && (
                        <div className="h-1.5 rounded-full bg-mist-deep overflow-hidden">
                            <div
                                className={`h-full rounded-full transition-all duration-500 ease-out ${strength.color}`}
                                style={{ width: strength.width }}
                            />
                        </div>
                    )}
                    <div className="flex items-center justify-between gap-3">
                        <p className="text-xs font-semibold text-ink/50">
                            {newPassword.length > 0 ? (
                                <>Password strength: <span className="text-ink">{strength.label}</span></>
                            ) : (
                                <>At least 8 characters with a capital, a number and a symbol</>
                            )}
                        </p>
                        <button
                            type="button"
                            onClick={suggestPassword}
                            className="shrink-0 text-xs font-semibold text-moss hover:text-ink underline underline-offset-4 decoration-moss/40 hover:decoration-ink transition-colors"
                        >
                            Suggest a strong password
                        </button>
                    </div>
                </div>

                <AuthField
                    id="confirmPassword"
                    label="Confirm new password"
                    type={showPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="••••••••"
                    icon={IconLock}
                    required
                    autoComplete="new-password"
                />

                <AuthSubmit loading={loading} loadingText="Updating…">
                    Update password
                </AuthSubmit>
            </form>
        </AuthShell>
    );
};

const ResetPassword = () => (
    <Suspense fallback={<div className="min-h-screen bg-mist" />}>
        <ResetPasswordContent />
    </Suspense>
);

export default ResetPassword;
