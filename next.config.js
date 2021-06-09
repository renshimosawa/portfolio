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
  env: {
    X_API_KEY: process.env.X_API_KEY,
  },
}
module.exports = {
  images: {
    loader: 'imgix',
  },
}
