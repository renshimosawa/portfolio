const withSass = require('@zeit/next-sass')
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        button: '#535353',
      },
    },
    screen: {
      pc: '600px',
      sp: { max: '600px' },
    },
  },
  plugins: [],
  env: {
    X_API_KEY: process.env.X_API_KEY,
  },
}
module.exports = withSass({
  cssModules: true,
})
