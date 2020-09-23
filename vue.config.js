
const path = require('path')

module.exports = {
  publicPath: './',
  outputDir: './dist',
  lintOnSave: true,
  devServer: {
    open: true,
    host: '0.0.0.0',
    port: 8088,
    https: false,
    overlay: {
      warnings: true,
      errors: true
    },
    proxy: {
      '/api': {
        target: `/`,
        changeOrigin: false
      }
    }
  },
  chainWebpack: (config) => {
    config.resolve.symlinks(true)
  },
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      config.mode = 'production'
    } else {
      config.mode = 'development'
    }
    Object.assign(config, {
      resolve: {
        alias: {
          '@': path.resolve(__dirname, './src'),
          '@c': path.resolve(__dirname, './src/components'),
          '@v': path.resolve(__dirname, './src/views')
        }
      }
    })
  },
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false
}

console.log(`当前环境为：${process.env.NODE_ENV}`)
