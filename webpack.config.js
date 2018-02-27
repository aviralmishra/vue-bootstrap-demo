var path = require('path');

module.exports = {
  entry: [
    'babel-polyfill', './src/main.js'
  ],
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: 'dist/',
    filename: 'app.js'
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            'scss': 'vue-style-loader!css-loader!sass-loader'
          }
        }
      }, {
        test: /\.js$/,
        loader: 'babel-loader!eslint-loader',
        exclude: /node_modules/
      }, {
        test: /\.scss$/,
        use: ['css-loader', 'sass-loader']
      }, {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}
