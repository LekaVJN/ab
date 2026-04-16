/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/ab',
  assetPrefix: '/ab/',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
