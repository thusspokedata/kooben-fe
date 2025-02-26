/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'res.cloudinary.com' },
      { hostname: 'backend-alb-kooben-dev-frankfurt-707089180.eu-central-1.elb.amazonaws.com' },
      { hostname: 'koobenapi.guitarrasargentinas.com' },
    ],
  },
};

export default nextConfig;
