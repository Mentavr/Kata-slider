// eslint.config.js

export default [
  {
    // Файлы, к которым применяются правила
    files: ['**/*.js'], // Все файлы с расширением .js
    languageOptions: {
      ecmaVersion: 2021, // Использование стандартов ECMAScript 2021 (ES12)
      sourceType: 'module', // Поддержка ES-модулей
      globals: {
        // Глобальные переменные для окружения браузера
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        module: 'readonly',
      },
    },
    rules: {
      'no-unused-vars': 'warn', // Предупреждение для неиспользуемых переменных
      'no-console': 'off', // Разрешить использование console.log и т.п.
      'eqeqeq': 'error', // Требовать строгое сравнение (=== вместо ==)
      'curly': 'error', // Требовать использования фигурных скобок для блоков
      'semi': ['error', 'always'], // Требовать точку с запятой в конце выражений
      'quotes': ['error', 'single'], // Требовать одинарные кавычки
      'indent': ['error', 2], // Отступ в 2 пробела
      'comma-dangle': ['error', 'always-multiline'], // Требовать запятую в многострочных объектах и массивах
    },
  },
];
