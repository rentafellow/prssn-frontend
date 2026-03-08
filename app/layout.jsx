import { Outfit } from "next/font/google";
import "./globals.css";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import { AuthProvider } from "./context/AuthContext";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata = {
  title: "prsnn.",
  description: "prsnn. is a peer-to-peer platform to hire skilled people for tasks, guidance, and companionship. Book trusted companions easily with secure payments and flexible pricing.",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

import VerificationGuard from "./components/common/VerificationGuard";
import GlobalClickGuard from "./components/auth/GlobalClickGuard";
import { NotificationProvider } from "./context/NotificationContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.variable} antialiased`}
      >
        <AuthProvider>
          <NotificationProvider>
            <GlobalClickGuard />
            <VerificationGuard />
            <NavBar />
            {children}
            <Footer />
          </NotificationProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
