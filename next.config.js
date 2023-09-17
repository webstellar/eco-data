/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn. sanity.io",
        port: "",
      },
    ],
    domains: ["cdn.sanity.io", "flowbite.s3.amazonaws.com"],
  },
};

module.exports = nextConfig;
