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
  //   // return config
  // },
})
require('dotenv').config({ path: './.env' }) //プロジェクト直下においた環境変数ファイルを読み込む

module.exports = {
  env: {
    X_API_KEY: process.env.X_API_KEY,
  },
}
