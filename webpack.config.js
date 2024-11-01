const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    entry: {
      main: './src/js/index.js',
      scripts: './src/js/scripts.js', // Подключение второго JS-файла
    },
    output: {
      filename: isProduction ? '[name].[contenthash].js' : '[name].js',
      path: path.resolve(__dirname, 'dist'),
      clean: true, // Очищает выходную директорию перед каждой сборкой
      publicPath: '/assets/', // Настройка для доступа к статическим ресурсам
    },
    devtool: isProduction ? 'source-map' : 'eval-source-map',
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      compress: true,
      port: 9000,
      open: true,
      hot: true,
    },
    plugins: [
      // Генерация HTML-файлов на основе шаблонов
      ...['index', 'contact', 'gallery', 'models', 'news'].map((page) => new HtmlWebpackPlugin({
        template: `./src/html/${page}.html`,
        filename: `${page}.html`,
      })),
      new MiniCssExtractPlugin({
        filename: isProduction ? '[name].[contenthash].css' : '[name].css',
      }),
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader'], // Используем MiniCssExtractPlugin для извлечения CSS
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource', // Обработка изображений
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource', // Обработка шрифтов
        },
      ],
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
      runtimeChunk: 'single',
      minimizer: [
        new ImageMinimizerPlugin({
          test: /\.(jpe?g|png|gif|svg)$/i,
          minimizer: {
            implementation: ImageMinimizerPlugin.imageminGenerate,
            options: {
              plugins: [
                ['imagemin-mozjpeg', { quality: 75 }],
                ['imagemin-pngquant', { quality: [0.65, 0.90] }],
                ['imagemin-svgo'],
              ],
            },
          },
        }),
      ],
    },
    mode: isProduction ? 'production' : 'development',
  };
};
