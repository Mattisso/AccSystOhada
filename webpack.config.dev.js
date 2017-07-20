<<<<<<< HEAD
import webpack from 'webpack';
=======
//import webpack from 'webpack'; 
>>>>>>> daf0c9288b6445f15fe886aaa1b149afa3a724e6
import path from 'path';

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
  plugins: [],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader']},
<<<<<<< HEAD
      {test: /\.css$/, loaders: ['style','css']}
=======
      {test: /\.css$/, loaders: ['style-loader','css-loader']}
>>>>>>> daf0c9288b6445f15fe886aaa1b149afa3a724e6
    ]
  }
}
