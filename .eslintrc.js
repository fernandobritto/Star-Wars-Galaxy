module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ['standard', 'eslint:recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['prettier'],
  rules: {
    'no-console': 'warn',
    'import/first': 'off',
    'prettier/prettier': 'error',
  },
}
