const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

const config = {
  images: {
    domains: ['images.unsplash.com'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
};

module.exports = withPWA(config);
