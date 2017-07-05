const path = require('path')
const ServiceWorkerPlugin = require('serviceworker-webpack-plugin')

module.exports = {
  plugins: [
    new ServiceWorkerPlugin({
      entry: path.join(__dirname, '../src/sw.js')
    })
  ]
}