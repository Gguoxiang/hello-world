'use strict'
const utils = require('./utils')
const config = require('../config')
const isProduction = process.env.NODE_ENV === 'production'
const sourceMapEnabled = isProduction
  ? config.build.productionSourceMap
  : config.dev.cssSourceMap
  var path = require('path')
module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: sourceMapEnabled,
    extract: isProduction,
    less: ['vue-style-loader', 'css-loader', 'less-loader', {
      loader: 'sass-resources-loader',
      options: {resources: [
        path.resolve(__dirname, './src/common_style/yunwen_themes.less'),
        path.resolve(__dirname, './src/common_style/yunwen_style.less'),
      ]}
    }]
  }),
  cssSourceMap: sourceMapEnabled,
  cacheBusting: config.dev.cacheBusting,
  transformToRequire: {
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
}
