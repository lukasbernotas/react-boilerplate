const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common.js')

module.exports = (args) => {
    const { mode } = args
    return merge(commonConfig, require(`./webpack.${mode}.js`))
}
