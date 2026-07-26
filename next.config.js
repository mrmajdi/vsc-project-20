module.exports = {
  reactStrictMode: true,
  // Enable SWC minification for faster builds
  swcMinify: true,
  // Optional: configure images domains if needed
  images: {
    domains: [],
  },
  // Optional: customize webpack
  webpack: (config, { isServer }) => {
    // Example: add SVG support via @svgr/webpack
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};