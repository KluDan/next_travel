/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
  distDir: "dist",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3.amazonaws.com",
        port: "",
        pathname: "/next_travel/**",
      },
    ],
  },
};

module.exports = nextConfig;
