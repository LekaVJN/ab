const isGithubPages = process.env.GITHUB_PAGES === 'true';
const repoBasePath = '/ab';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  ...(isGithubPages
    ? {
        output: 'export',
        basePath: repoBasePath,
        assetPrefix: `${repoBasePath}/`,
        trailingSlash: true,
      }
    : {}),
};

module.exports = nextConfig;
