/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  // When deploying to GitHub Pages under https://ChainsQueenEth.github.io/web3dashboard
  // we need to serve the app from the "/web3dashboard" base path.
  // This ensures assets and routes resolve correctly.
  basePath: isProd ? '/web3dashboard' : '',
  assetPrefix: isProd ? '/web3dashboard/' : '',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Add any other Next.js config options here
};

module.exports = nextConfig;
