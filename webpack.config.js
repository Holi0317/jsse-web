const merge = require('webpack-merge')
const path = require('path')
const webpack = require('webpack')
const env = require('./webpack-cfg/env')
const babel = require('./webpack-cfg/babel')
const ts = require('./webpack-cfg/typescript')
const htmlLoader = require('./webpack-cfg/html-loader')
const postCssLoader = require('./webpack-cfg/postcss')
const fontsImagesLoader = require('./webpack-cfg/fonts-images-loader')
const genIndex = require('./webpack-cfg/gen-index')
const copyFiles = require('./webpack-cfg/copy-files')
const uglify = require('./webpack-cfg/uglify')
const analyzer = require('./webpack-cfg/analyzer')
const alias = require('./webpack-cfg/alias')
const scopeHoisting = require('./webpack-cfg/scope-hoisting')
const sw = require('./webpack-cfg/service-worker')

const {ENV} = require('./webpack-cfg/paths')

module.exports = merge.smart(
  {
    entry: './src/index',
    output: {
      path: path.resolve(__dirname, 'dist')
    },
    plugins: [
      new webpack.DefinePlugin({
        VERSION: JSON.stringify(require('./package.json').version)
      })
    ]
  },

  env,
  alias,

  babel,
  ts,
  htmlLoader,
  postCssLoader,
  fontsImagesLoader,
  sw,

  ...(ENV === 'production' || ENV === 'development' ? [
    genIndex,
    copyFiles
  ] : [
    /* ENV === 'test' */
  ]),

  ...(ENV === 'production' ? [
    analyzer,
    scopeHoisting,
    uglify
  ] : [

  ])

)
