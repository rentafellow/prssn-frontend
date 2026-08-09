
# prsnn. Frontend

This directory contains the Next.js frontend application for prsnn. It consumes the REST API provided by the backend and offers a responsive, interactive user interface.

## Tech Stack

-   **Framework**: Next.js 14 (App Router)
-   **Styling**: TailwindCSS (Custom configuration for Neo-Brutalism theme)
-   **State Management**: React Context (`AuthContext`, `NotificationContext`)
-   **HTTP Client**: Axios
-   **Real-time Communication**: Socket.io-client
-   **Payments**: Razorpay Checkout

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Create a `.env.local` file in the root of the `frontend` directory and add the following variables:

```env
# API Configuration
NEXT_PUBLIC_API_URL=https://prssn-backend.onrender.com/api
NEXT_PUBLIC_SOCKET_URL=https://prssn-backend.onrender.com

# Razorpay Configuration
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_test_your_razorpay_key_id
```

### 3. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

-   `app/`: Contains the application routes and layouts (Next.js App Router).
-   `components/`: Reusable UI components (Buttons, Cards, Modals, etc.).
-   `context/`: Context providers for managing global state like authentication and notifications.
-   `public/`: Static assets such as images and icons.
-   `utils/`: Helper functions and constants.

## Styling

This project uses a custom Neo-Brutalism design system. Key styling tokens (colors, shadows, borders) are defined in `globals.css` and `tailwind.config.js`. Avoid hardcoding hex values; use the defined utility classes.
