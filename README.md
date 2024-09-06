# Создание проекта на Webpack и Babel

![js_webpack_babel](img/js_webpack_babel.png)

### Описание
Установка необходимых пакетов для работы с Webpack и Babel

### Используемые команды
- `npm install --save-dev webpack webpack-cli` - установка Webpack и Webpack CLI
- `npm install --save-dev babel-loader @babel/core @babel/preset-env` - установка Babel и необходимых плагинов
- `npm install --save-dev webpack-dev-server` - установка Webpack Dev Server
- `npm install --save-dev html-webpack-plugin` - установка HTML Webpack Plugin

**Примечание:** В команде `npm install` используется флаг `--save-dev`, чтобы сохранить пакеты в файле `package.json` в разделе `devDependencies`.

**Создание необходимых папок и файлов:**
```
mkdir my-webpack-project
cd my-webpack-project
npm init -y

mkdir src
touch src/index.js
mkdir dist

npm run build <= запуск сборки проекта
npm run dev <= запуск develop проекта
```

### Полезные ссылки
```
[Webpack] https://webpack.js.org/
[Babel] https://babeljs.io/
```

**Автор:** Дуплей Максим Игоревич

**Дата:** 06.09.2024

**Версия:** 1.0.0
