const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const {ENV} = require('./paths')

module.exports = {
  plugins: [
    new UglifyJSPlugin({
      sourceMap: ENV === 'production' ? 'hidden-source-map' : 'inline-source-map'
    })
  ]
}
