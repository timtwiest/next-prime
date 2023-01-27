/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: { appDir: true },
  compiler: {
    reactRemoveProperties: { properties: ['^data-testid$'] },
  },
};

module.exports = nextConfig;
