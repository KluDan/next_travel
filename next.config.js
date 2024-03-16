/** @type {import('next').NextConfig} */
const isDev = (process.env.NODE_ENV = "development");

const nextConfig = {
  basePath: isDev ? "" : "/next_travel",
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
