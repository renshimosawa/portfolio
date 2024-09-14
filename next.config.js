import pwa from 'next-pwa'

const withPWA = pwa({
  dest: 'public',
  register: true,
  skipWaiting: true,
})
const withSass = require('@zeit/next-sass')

module.exports = withSass({
  cssModules: true,
  // webpack(config) {
  //   // config.module.rules.Push({
  //   //   test: /\.svg$/,
  //   //   issuer: {
  //   //     test: /\.(js|ts)x?$/,
  //   //   },
  //   //   use: ['@svgr/webpack'],
  //   // })
  // return config
  // },
})

module.exports = {
  async redirects() {
    return [
      {
        source: '/test-lab/',
        destination: '/map/hachinohe/',
        permanent: true,
      },
      {
        source: '/test-lab-kyoto/',
        destination: '/map/kyoto/',
        permanent: true,
      },
    ]
  },
  env: {
    X_API_KEY: process.env.X_API_KEY,
  },
  trailingSlash: true,
  swcMinify: true,
}
