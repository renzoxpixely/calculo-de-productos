module.exports = {
  'env': {
    'browser': true,
    'commonjs': true,
    'es2021': true,
  },
  'extends': [
    'google',
  ],
  'parserOptions': {
    'ecmaVersion': 12,
  },
  'rules': {
    'require-jsdoc': 0,
    'max-len': ["error", { "code": 150 }],
    'camelcase': 0,
    'no-unused-vars': 0,
  },
};
