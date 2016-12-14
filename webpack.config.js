var webpack = require('webpack');

module.exports = {
	entry: {
		index: './src/index',
	},
	output: {
		publicPath: '../build/',
		path: './build',
		filename: '[name].js'
	},
	resolve: {
         extensions: ['', '.js', '.vue'],
    },
	module: {
		loaders: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.js$/,
				loader: 'babel?presets=es2015',
				exclude: /node_modules/
			}
		]
	},
	babel: {
        presets: ['es2015']
    }
};