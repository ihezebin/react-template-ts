module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    // https://www.5axxw.com/wiki/content/c3wa5h
  ],
  parser: '@typescript-eslint/parser', // 使用 TypeScript 解析器
  plugins: ['react', '@typescript-eslint', 'import', 'unused-imports'], // 启用 TypeScript 插件
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-explicit-any': 'off',
    'import/no-unresolved': 'error',
    'import/named': 'error',
    'import/order': [
      'error',
      {
        // groups: [['builtin', 'external', 'internal']],
        'newlines-between': 'always',
      },
    ],
    'unused-imports/no-unused-imports': 'error',
  },
}
