const path = require('path');

module.exports = {
  webpack: config => {
    config.modules = {
    }

    config.plugins = config.plugins || []

    config.plugins = [
      ...config.plugins
    ]

    config.resolve = {
      modules: ['node_modules', path.resolve(__dirname, './../')],
      extensions: ['.ts', '.tsx', '.js']
    }
    return config
  }
}
