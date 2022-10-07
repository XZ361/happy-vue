// path不需要安装，他是node内置的模块
const path = require('path');
const{VueLoaderPlugin}=require('vue-loader');
module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.vue$/, use: 'vue-loader' },
      { test: /\.s[ca]ss$/, use: ['style-loader', 'css-loader', 'scss.loader'] },
      {
        test:/\.m?js$/,
        use:{
          loader:'babel-loader',
          options:{
            presets:['@babel/preset-env']
          }
        }
      },
      // 老语法解析图片
      // {test:/\.(png|jpe?g|git|svg|webp)$/,use:{loader:'file-loader',options:{esMoudle:false}}}
      {test:/\.(png|jpe?g|git|svg|webp)$/,type:'asset/resource'}
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
  ]
}