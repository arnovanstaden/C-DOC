/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    deviceSizes: [350, 600, 768, 991, 1200, 1920],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'c-doc.pockethost.io',
      },
    ],
  },
  sassOptions: {
    prependData: '@import "@styles/variables.scss";',
  },
  rewrites: async () => [{
    source: '/admin',
    destination: '/admin/products',
  }]
};

module.exports = nextConfig;
