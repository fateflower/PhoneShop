module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
<<<<<<< HEAD
    'linebreak-style': [0, 'error', 'windows'],
    'space-before-function-paren': 0,
=======
	'linebreak-style': [0, 'error', 'windows'],
	'space-before-function-paren': 0,
>>>>>>> a79f8d149f1de22cb4135017db097aba4fcc955f
  }
}
