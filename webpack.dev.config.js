var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry     : [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/dev-server',
      "./src/js/"
    ],
    output    : {
      path: __dirname, filename : 'bundle.js'
    },
    module    : {
      loaders: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      },
      { test: /\.scss$/, loader: 'style!css!sass'},
      { test: /\.css$/, loader: 'style!css' }]
    },
    devServer : { hot: true },
    devtool   : 'cheap-module-eval-source-map',
    plugins   : [ new webpack.HotModuleReplacementPlugin() ],
    inline    : true,
    progress  : true,
    colors    : true
};
