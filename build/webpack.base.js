const path = require('path')
// 引入vue-loader
const VueLoaderPlugin = require('vue-loader/lib/plugin')
// 引入html-webpack-plugin
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 引入clean-webpack-plugin
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  // 打包入口文件
  entry: './src/main.js',
  // 打包出口
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist')
  },
  // 打包规则
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.vue$/,
      loader: 'vue-loader'
    }, {
      test: /\.(jpg|jpeg|png|svg)$/,
      loader: 'url-loader',
      options: {
        name: '[name].[ext]',
        limit: 20480
      }
    }, {
      test: /\.css$/,
      // 顺序为从右到左从下到上
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.styl(us)?$/,
      use: ['vue-style-loader',
        'css-loader',
        'postcss-loader',
        'stylus-loader']
    }]
  },
  // 插件
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new CleanWebpackPlugin(),
  ],
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.js',
      '@': path.resolve(__dirname, '../src'),
      'styles': path.resolve(__dirname, '../src/assets/styles'),
      'images': path.resolve(__dirname, '../src/assets/images')
    }
  }
}
