var path = require("path");
var webpack = require("webpack");


module.exports = {
	cache: true,

	entry: [
	  'webpack-dev-server/client?http://0.0.0.0:3000',
	  'webpack/hot/only-dev-server',
	  './web_modules/filespacemap/app'
	],
	output: {
		path: path.join(__dirname, "dist"),
		publicPath: "/static/",
		filename: "bundle.js"
	},
	module: {
		loaders: [
			// required to write "require('./style.css')"
			{ test: /\.css$/,    loader: "style-loader!css-loader" },

			// required for bootstrap icons
			{ test: /\.woff$/,   loader: "url-loader?prefix=font/&limit=5000&mimetype=application/font-woff" },
			{ test: /\.ttf$/,    loader: "file-loader?prefix=font/" },
			{ test: /\.eot$/,    loader: "file-loader?prefix=font/" },
			{ test: /\.svg$/,    loader: "file-loader?prefix=font/" },

			// required for react jsx
			{ test: /\.js$/,    loader: "jsx-loader" },
			{ test: /\.jsx$/, exclude: /node_modules/, loaders: ["react-hot", "babel"] }
		]
	},
	resolve: {
		root: [
			path.resolve('./web_modules')
		],
		extensions: [ "", ".js", ".jsx" ]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.ProvidePlugin({
			// Automtically detect jQuery and $ as free var in modules
			// and inject the jquery library
			// This is required by many jquery plugins
			jQuery: "jquery",
			$: "jquery"
		})
	]
};
