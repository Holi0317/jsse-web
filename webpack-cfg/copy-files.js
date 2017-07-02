const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  plugins: [
    new CopyWebpackPlugin([
      {from: 'manifest.json', to: 'manifest.json'}
    ])
  ]
}
