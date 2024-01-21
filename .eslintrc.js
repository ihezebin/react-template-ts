module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended', // 使用 TypeScript 推荐规则
  ],
  parser: '@typescript-eslint/parser', // 使用 TypeScript 解析器
  plugins: ['react', '@typescript-eslint'], // 启用 TypeScript 插件
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-explicit-any': 'off',
  },
}
