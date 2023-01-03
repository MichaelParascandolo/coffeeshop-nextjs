/** @type {import('next').NextConfig} */

//https://randomuser.me/api/portraits/thumb/women/50.jpg
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["randomuser.me"],
  },
};

module.exports = nextConfig;
