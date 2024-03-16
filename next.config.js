/** @type {import('next').NextConfig} */
const isDev = (process.env.NODE_ENV = "production");

const nextConfig = {
  basePath: !isDev ? "" : "/next_travel",
  output: "export",
  distDir: "dist",
};

module.exports = nextConfig;
