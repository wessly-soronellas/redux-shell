// Step 1: Create Directory
	mkdir directoryName && cd directoryName;

// Step 2: Initialize NPM Package for project dependencies
	npm init -y;

// Step 3: Initialize git for versioning and portfolio
	git init;

// Step 4: Create two dirrectories (public & src) to hold files
	mkdir public;
	mkdir src;

// Step 5: Create index.html in public
	cd public;
	cat >> index.html;
		html content:
			<!DOCTYPE html>
			<html> 
				<head> 
					<meta charset="UTF-8" />
					<meta name="viewport" content="width=device-width, intial-scale=1, shrink-to-fit=no />
					<title>React EcoSystem</title>
				</head>
				<body> 
					<div id="root></div>
					<noscript> 
						Please enable JavaScript to view this site.
					</noscript>
					<script src="../dist/bundle.js"></script>
				</body>
			</html>
	
// Step 6: Add support for ES6 and JSX
	npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/preset-react;

// Step 7: Create Babelrc file
	{ 
		"presets": ["@babel/preset-env", "@babel/preset-react"]
	}
	
// Step 8: Create React files: "App.js", "App.css", "index.js" inside of src
	cd src;
	cat >> App.js; (see App.js content below)
	cat >> App.css; (see App.css content below)
	cat >> index.js; (see index.js content below)

	/*App.js content: ************************/

	import React from 'react';
	import './App.css';

	const App = () => ( 
		<div className="App"> 
			<h1>Hello, World!</h1>
		</div>
 	);

	export default App;
	
	/* App.css content: ***********************/
 
	.App{ 
		margin: 1rem;
		font-family: Arial, Helvetica, sans-serif;
		color: #222222;
	}

	/*index.js content: ***********************/

	import React from 'react';
	import ReactDOM from 'react-dom';
	import App from './App.js';

	ReactDOM.render(<App />, document.getElementById('root'));

// Step 9: Add react and react-dom to dependencies
	npm install react react-dom;

// Step 10: Install packages needed for webpack
	npm install --save-dev webpack webpack-cli webpack-dev-server style-loader css-loader babel-loader;

// Step 11: Create webpack.config.js for webpack handling
	
	/*webpack.config.js content:*/
	
	const path = require('path');
	const webpack = require('webpack');

	module.exports={ 
		enty: './src/index.js',
		mode: 'development',
		module: { 
			rules: [ 
				{ 
					test: /\.(js|jsx)$/,
					exclude: /(node_modules)/,
					loader: 'babel-loader',
					options: { presets: ["@babel/env"] }
				 },
				 { 
					test: /\.css$/,
					use: ["style-loader", "css-loader"]
				 }
			 ]
		 },
		 resolve: { extensions: ['*', '.js', '.jsx'] },
		 output: { 
				path: path.resolve(__dirname, 'dist/'),
				publicPath: '/dist/',
				filename: 'bundle.js'
			 },
			 devServer: { 
					contentBase: path.join(__dirname, 'public/'),
					port: 3000,
					publicPath: 'http://localhost:3000/dist/',
					hotOnly: true
				 },
			  plugins: [new webpack.HotModuleReplacementPlugin()]
	 };

// Step 12: Deploy webpack for testing 
	npx webpack-dev-server --mode development;

// Step 13: Install React-hot-loader & use in App.js
	npm install --save-dev react-hot-loader;
	import { hot } from 'react-hot-loader';
	export default hot(module)(App);

// Step 14: Define new scripts in package -> scripts -> {}
	"dev": "npx webpack-dev-server --mode development",
	"build": "npx webpack --mode development" 
	
// Step 15: Start coding application!
