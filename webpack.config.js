const { contentType } = require('mime-types');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js', // Ваш основной файл
  output: {
    filename: 'bundle.js', // Имя выходного файла
    path: path.resolve(__dirname, 'dist'), // Путь к папке для выходных файлов
    clean: true, // Очистка папки dist перед каждой сборкой
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
    open: true, // Автоматически открывать браузер
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Указываем путь к шаблону
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/, // Применяется к файлам с расширением .js
        exclude: /node_modules/, // Исключаем папку node_modules
        use: {
          loader: 'babel-loader', // Используем Babel для транспиляции
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  mode: 'development' // Режим разработки
};
