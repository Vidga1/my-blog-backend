module.exports = {
  extends: ['eslint:recommended', 'plugin:express/recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'arrow-parens': ['error', 'avoid']
  },
  plugins: ['prettier'],
  languageOptions: {
    globals: {
      node: true
    }
  },
  ignorePatterns: ['node_modules/', 'build/', 'dist/', '*.min.js']
};
