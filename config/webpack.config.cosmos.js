const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const config = require('./webpack.config.dev')

// Disable linting in webpack config since we don't need it while running cosmos
const index = config.plugins.findIndex(plugin => plugin instanceof ForkTsCheckerWebpackPlugin)
config.plugins.splice(index, 1)

module.exports = config
