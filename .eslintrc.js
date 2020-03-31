// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module',
    parser: 'babel-eslint'
  },
  extends: ["plugin:vue/base"],
  env: {
    browser: true,
  },
  'rules': {
    // allow debugger during development
    "camelcase": "off",
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  },
  'globals': {
    '$api': true,
    '$router': true
  }
}
