const withSass = require('@zeit/next-sass')
module.exports = withSass({
  cssModules: true,
})

module.exports = {
  env: {
    X_API_KEY: process.env.X_API_KEY,
  },
}
