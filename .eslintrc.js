module.exports = {
  env: {
    browser: true,
    amd: true,
    node: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'next',
    'next/core-web-vitals',
    'prettier',
  ],
  plugins: ['prettier'],
  rules: {
    semi: ['error', 'always'],
    'prettier/prettier': ['error', { singleQuote: true, parser: 'flow' }],
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
  },
};
