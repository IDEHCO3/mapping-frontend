const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
	entry: [
		'babel-polyfill',
		'./src/main.js'
	],
	output: {
		path: path.resolve(__dirname, "dist"),
		publicPath: '/',
		filename: 'index-[hash].js'
	},
	devServer: {
		historyApiFallback: true,
		inline: true,
		port: 9000
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				include: [
					path.resolve(__dirname, 'src')
				],
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react', 'stage-0'],
					plugins: ['transform-runtime']
				}
			},
            {
                test: [/\.jsx$/],
                loaders: ["jsx-loader?insertPragma=React.DOM&harmony"],
            },
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				loader: "file-loader?name=[name]-[hash].[ext]"
			}
		]
	},
	plugins: [
		//new webpack.DefinePlugin({
		//	'process.env': {
		//		NODE_ENV: JSON.stringify('production')
		//	}
		//}),
		//new webpack.optimize.UglifyJsPlugin(),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './src/index.html',
			inject: 'body',
			minify: {
				collapseWhitespace: true
			}
		}),
		new ExtractTextPlugin('styles-[hash].css')
	]
};

module.exports = config;

