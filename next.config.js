/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.imgflip.com",
        port: "",
      },
      {
        protocol: "http",
        hostname: "**.imgflip.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
