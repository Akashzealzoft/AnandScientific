/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["*"],
    // Replace the empty string with the actual hostname of your hosting server
    remotePatterns: [
      {
        protocol: "https",
        hostname: "your-hostname.com", // Replace with your actual hostname
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
