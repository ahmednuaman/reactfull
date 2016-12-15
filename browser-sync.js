'use strict'

const CWD = process.cwd()

const path = require('path')
const webpack = require('webpack')
const webpackConfig = require('./webpack.config')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

const bundler = webpack(webpackConfig)
const serverPath = path.resolve(CWD, 'build')

require('browser-sync')
  .create()
  .init({
    files: path.resolve(CWD, 'build/**/*'),
    server: serverPath,
    port: process.env.PORT,
    open: 'local',
    middleware: [
      webpackDevMiddleware(bundler, {
        publicPath: webpackConfig.output.publicPath,
        stats: false
      }),
      webpackHotMiddleware(bundler)
    ]
  }, () => console.log('Browsersync is running...'))
