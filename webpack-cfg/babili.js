const Babili = require('babili-webpack-plugin')

module.exports = {
  plugins: [
    new Babili({
      removeConsole: false,
      removeDebugger: true
    })
  ]
}
