const path = require('path')
const TerserJSPlugin = require('terser-webpack-plugin')

module.exports = {
	entry: path.resolve(__dirname, 'src/assets/scripts/main.js'),
	output: {
		path: path.resolve(__dirname, 'dist/assets'),
	},
	// entry: {
	//   main: path.resolve(__dirname, 'src/assets/scripts/main.js'),
	//   typerText: path.resolve(__dirname, 'src/assets/scripts/typer-text.js')
	// },
	// output: {
	//   path: path.resolve(__dirname, 'dist/assets/[name]'),
	// },
	optimization: {
		minimizer: [new TerserJSPlugin({})],
	},
	plugins: [],
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
		],
	},
}
