const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname,'../src/index.js'),

    },
    output: {
        path: path.resolve('./dist'),
        filename: '[name].js',
        publicPath: '/',
    },
    devtool: 'inline-source-map',
    devServer: {
        hot: true,
        static: path.resolve('./dist'),
        compress: true,
        port: 8564,
        historyApiFallback: true,  
    },
    performance: {
        maxAssetSize: 1000000,
        maxEntrypointSize: 1000000,
    },
    module: {
        rules: [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env', '@babel/preset-react'],
                },
              },
            },
            {
              test: /\.css$/i,
              use: ['style-loader', 'css-loader'],
            },
            {
              test: /\.(gif|png|jpe?g|svg)$/i,
              use: [
                'file-loader',
                {
                  loader: 'image-webpack-loader',
                  options: {
                    bypassOnDebug: true,
                    disable: true,
                  },
                },
              ],
            },
          ],      
    },
    plugins: [
        new HtmlWebpackPlugin({
          title: 'Bpoint',
          filename: 'index.html', // Corrected property name to 'filename'
          inject: true, // Changed to 'true' for automatic injection
          template: "./dist/index.html",
        }),
    ],
}