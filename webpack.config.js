const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: {
    main: './src/js/index.js',
  },
  output: {
    filename: './assets/js/app.js',
    publicPath: '',
  },
  module: {
    rules: [
      /*
       * VUE
       */
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'vue-loader',
      },
      /*
       * JavaScript / JSX / VUE
       */
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
      /*
       * SCSS / CSS
       */
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: false,
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [require('autoprefixer')],
              sourceMap: true,
            },
          },
          {
            loader: 'group-css-media-queries-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              outputStyle: 'expanded',
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  devtool: 'source-map',
  performance: {
    hints: false,
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: 'assets/css/app.css',
      publicPath: '/',
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
