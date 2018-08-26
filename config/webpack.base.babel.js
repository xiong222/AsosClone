/**
 * COMMON WEBPACK CONFIGURATION
 */

const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devMode = process.env.NODE_ENV !== 'production';

process.noDeprecation = true;

module.exports = (options) => ({
  mode: options.mode,
  entry: options.entry,
  output: Object.assign({ // Compile into js/build.js
    path: path.resolve(process.cwd(), 'build'),
    publicPath: '/',
  }, options.output), // Merge with env dependent settings
  module: {
    rules: [
      {
        test: /\.js$/, // Transform all .js files required somewhere with Babel
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: options.babelQuery,
        },
      },
      {
        // Preprocess our own .scss files
        test: /\.(scss)$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }, /*
      {
        test: /\.css$/,
        include: /app\/template\/styles/,
        use: ['babel-loader', 'postcss-variables-loader']
      },
      {
        test: /\.json/,
        include: /i18n/,
        loader: 'json-loader'
      }, */
      {
        // Preprocess our own .scss files
        test: /\.(css)$/,
        exclude: [
          /node_modules/,
          /app\/container/
        ],
        loaders: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader?modules&localIdentName=[hash:base64:5]'/* ,
          'postcss-loader' */
        ]
      },
      {
        test: /\.svg$/,
        include: /app\/template\/styles\/icons/,
        loader: 'raw-loader'
      },
      {
        // Preprocess 3rd party .css files located in node_modules
        test: /\.css$/,
        include: /node_modules/,
        use: [devMode ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        // Preprocess 3rd party .css files located in node_modules
        test: /\.css$/,
        include: /app\/container/,
        use: ['raw-loader'],
      },
      { test: /\.eot(\?v=\d+.\d+.\d+)?$/, loader: 'file-loader?name=assets/fonts/[name].[ext]' },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader?mimetype=application/font-woff&name=assets/fonts/[name].[ext]' },
      { test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/, loader: 'file-loader?mimetype=application/octet-stream&name=assets/fonts/[name].[ext]' },
      { test: /\.svg(\?v=\d+.\d+.\d+)?$/,include: /assets/, loader: 'file-loader?mimetype=image/svg+xml&name=assets/fonts/[name].[ext]' },
      {
        test: /\.(jpg|png|gif)$/,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              query: {
                gifsicle: {
                  interlaced: true
                },
                mozjpeg: {
                  progressive: true
                },
                optipng: {
                  optimizationLevel: 7
                },
                pngquant: {
                  quality: '65-90',
                  speed: 4
                }
              }
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        type: 'javascript/auto',
        test: /\.json$/,
        use: 'json-loader'
      },
      {
        test: /\.(mp4|webm)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000
          },
        },
      },
    ],
  },
  plugins: options.plugins.concat([
    new webpack.ProvidePlugin({
      // make fetch available
      fetch: 'exports-loader?self.fetch!whatwg-fetch'
    }),

    // Always expose NODE_ENV to webpack, in order to use `process.env.NODE_ENV`
    // inside your code for any environment checks; UglifyJS will automatically
    // drop any unreachable code.
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      },
    })
  ]),
  resolve: {
    modules: ['app', 'node_modules'],
    extensions: [
      '.js',
      '.jsx',
      '.scss',
      '.react.js'
    ],
    mainFields: [
      'browser',
      'jsnext:main',
      'main'
    ]
  },
  devtool: options.devtool,
  target: 'web', // Make web variables accessible to webpack, e.g. window
  performance: options.performance || {},
  optimization: {
    namedModules: true,
    splitChunks: {
      name: 'vendor',
      minChunks: 2
    }
  }
});
