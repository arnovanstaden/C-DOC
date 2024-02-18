/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    deviceSizes: [350, 600, 768, 991, 1200, 1920],
  },
  sassOptions: {
    prependData: '@import "@styles/variables.scss";',
  },
}

module.exports = nextConfig;
