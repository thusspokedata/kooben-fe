/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'res.cloudinary.com' },
      { hostname: 'kooben-elb-1725802152.eu-central-1.elb.amazonaws.com' },
      { hostname: 'koobenapi.guitarrasargentinas.com' },
    ],
  },
};

export default nextConfig;
