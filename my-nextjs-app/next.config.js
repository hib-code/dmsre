/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuration pour Vercel
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;

module.exports = nextConfig;
