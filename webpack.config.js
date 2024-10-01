import path from 'path'; // Импортируем модуль "path" для работы с путями файлов
import HtmlWebpackPlugin from 'html-webpack-plugin'; // Импортируем плагин для работы с HTML
import CopyWebpackPlugin from 'copy-webpack-plugin';

export default {
  entry: './src/index.js', // Исправлено: точка входа для сборки проекта

  output: {
    filename: 'bundle.js', // Имя выходного файла сборки
    path: path.resolve('dist'), // Путь для выходного файла сборки
    publicPath: '/',
  },

  module: {
    rules: [
      {
        test: /\.css$/, // Регулярное выражение для обработки файлов с расширением .css
        use: ['style-loader', 'css-loader'], // Загрузчики, используемые для обработки CSS-файлов
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i, // Объединено: обрабатываем все изображения
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][hash][ext]', // Путь для изображений
        },
      },
      {
        test: /\.html$/,
        use: ['html-loader'], // Загрузчик для обработки HTML-файлов
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Шаблон HTML
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: './src/index.js', to: './index.js' },
      ],
    }),
  ],

  devServer: {
    static: {
      directory: path.resolve('dist'), // Исправлено: каталог для статики
    },
    open: true, // Автоматически открывать браузер
  },

  mode: 'development', // Режим сборки
};
