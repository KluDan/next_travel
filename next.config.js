/** @type {import('next').NextConfig} */
const isProd = (process.env.NODE_ENV = "production");

const nextConfig = {
  basePath: isProd ? "/next_travel" : "",
  output: "export",
  distDir: "dist",
  images: {
    path: "/next_travel/**",
  },
};

module.exports = nextConfig;
