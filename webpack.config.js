const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './src/js/index.js',
    // bootstrap: bootstrap,
  },
  output: {
    filename: './assets/js/app.js',
    publicPath: '',
  },
  module: {
    rules: [
      // vue
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'vue-loader',
      },
      // js
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        resolve: {
          extensions: ['.js', '.jsx', 'vue'],
        },
        use: {
          loader: 'babel-loader',
        },
      },
      // scss
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: false,
            },
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              outputStyle: 'expanded',
            },
          },
        ],
      },
    ],
  },
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  devtool: 'inline-source-map',
  performance: {
    hints: false,
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: 'assets/css/app.css',
      publicPath: '/',
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
    }),
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: { map: { inline: false } },
      }),
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    overlay: {
      warning: true,
      errors: true,
    },
    compress: true,
    stats: 'minimal',
  },
};
