const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
      scriptLoading: 'blocking',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          context: './src',
          from: '**/*.html',
          globOptions: {
            ignore: ['**/src/index.html'],
          },
          noErrorOnMissing: true,
        },
      ],
    }),
  ],
};
