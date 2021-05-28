const withSass = require('@zeit/next-sass')
module.exports = withSass({
  cssModules: true,
  webpack(config) {
    config.module.rules.Push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ['@svgr/webpack'],
    })

    return config
  },
})
