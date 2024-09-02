const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'https://weather-app-new-nu-eight.vercel.app/'
      }
    }
  }
})
