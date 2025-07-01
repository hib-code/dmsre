/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuration pour Docker
  output: 'standalone',
  
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
