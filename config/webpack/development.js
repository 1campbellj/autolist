process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const environment = require('./environment')

environment.loaders.append('stylus', {
  test: /\.styl$/,
  use: ['style-loader', 'css-loader', 'stylus-loader']
})

module.exports = environment.toWebpackConfig()
