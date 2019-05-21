const baseConfig = require('./config/webpack.base')
const localConfig = require('./config/webpack.local')
const buildConfig = require('./config/webpack.build')
const merge = require('webpack-merge')


module.exports = () => {
  if (process.env.NODE_ENV === 'local') {
    return merge(baseConfig, localConfig)
  } 
  return merge(baseConfig, buildConfig)
}