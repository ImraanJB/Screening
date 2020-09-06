const HtmlWebPackPlugin = require( 'html-webpack-plugin' );
const path = require( 'path' );
module.exports = {
   context: __dirname,
   entry: './src/index.jsx',
   output: {
      path: path.resolve( __dirname, 'dist' ),
      filename: 'main.js',
      publicPath: '/',
   },
   resolve: {
    extensions: ['.js', '.jsx']
  },
   devServer: {
      historyApiFallback: true
   },
   module: {
      rules: [
         {
            test: /\.jsx$/,
            use: 'babel-loader',
         },
         {
            test: /\.less$/,
            use: ['style-loader', 'css-loader', 'less-loader'],
         },
         {
            test: /\.(png|j?g|svg|gif)?$/,
            use: 'file-loader'
         }
]
   },
   plugins: [
      new HtmlWebPackPlugin({
         template: path.resolve( __dirname, 'public/index.html' ),
         filename: 'index.html'
      })
   ]
};