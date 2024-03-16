/** @type {import('next').NextConfig} */
const isDev = (process.env.NODE_ENV = "development");

const nextConfig = {
  basePath: isDev ? "" : "/next_travel",
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
