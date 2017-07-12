const Babili = require('babili-webpack-plugin')
const {ENV} = require('./paths')

module.exports = {
  plugins: [
    new Babili({
      removeConsole: false,
      removeDebugger: true
    }, {
      sourceMap: ENV === 'production' ? 'hidden-source-map' : 'inline-source-map'
    })
  ]
}
