const {CheckerPlugin} = require('awesome-typescript-loader')

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: 'awesome-typescript-loader'
    }]
  },
  plugins: [
    new CheckerPlugin()
  ]
}
