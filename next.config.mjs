/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '5000',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: '*.render.com',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: process.env.NEXT_PUBLIC_API_URL?.replace(/^https?:\/\//, '').replace(/:\d+/, '') || '',
        pathname: '/uploads/**',
      }
    ],
    formats: ['image/avif', 'image/webp'], // Use modern image formats
    deviceSizes: [640, 750, 828, 1080, 1200], // Optimize for common device sizes
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // Optimize for common image sizes
  },
  devIndicators: {
    buildActivity: false,
  },
};

export default nextConfig;
