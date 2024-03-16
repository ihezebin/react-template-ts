module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended', // 使用 TypeScript 推荐规则
    // https://www.5axxw.com/wiki/content/c3wa5h
    'plugin:import/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  parser: '@typescript-eslint/parser', // 使用 TypeScript 解析器
  plugins: ['react', '@typescript-eslint', 'import'], // 启用 TypeScript 插件
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-explicit-any': 'off',
    'import/no-unresolved': 'off',
    'import/named': 'error',
    'import/order': ['error', { 'newlines-between': 'always' }],
  },
}
