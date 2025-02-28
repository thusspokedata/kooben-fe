/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'res.cloudinary.com' },
      { hostname: 'api.guitarrasargentinas.com' },
    ],
  },
  // Configuration for font optimization
  optimizeFonts: true,
};

export default nextConfig;
