 import path from 'path';
  import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
 // debug: true,
  devtool: 'inline-source-map',
  watch: false,
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    // Create HTML file that includes reference to bundled JS.
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: true
    })
   ],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader']},
      {test:/\.(png|ttf|svg|woff|eot)$/, exclude: /node_modules/,
      loader:'file-loader'},
      {test: /\.css$/, loaders: ['style-loader','css-loader']}
    ]
  }
}
