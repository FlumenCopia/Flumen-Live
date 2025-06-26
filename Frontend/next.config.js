/** @type {import('next').NextConfig} */
const TerserPlugin = require('terser-webpack-plugin');

const nextConfig = {
  swcMinify: false, // Disable SWC minification

  webpack(config, { dev }) {
    if (!dev) {
      config.optimization.minimizer = [
        new TerserPlugin({
          terserOptions: {
            format: {
              ascii_only: true,
            },
          },
        }),
      ];
    }
    return config;
  },

  images: {
    disableStaticImages: false, // Allow Next.js to handle static images
    unoptimized: true, // Disable Next.js image optimization
  },

  // other configurations...
};

module.exports = nextConfig;
