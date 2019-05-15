const  { smart } = require('webpack-merge')
const baseConfig = require('./webpack.base')

module.exports = smart(baseConfig, {
  mode: 'development'
})