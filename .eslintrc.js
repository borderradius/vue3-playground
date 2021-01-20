module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  plugins: ['vue', 'prettier'],
  extends: [
    'plugin:vue/vue3-essential',
    'plugin:prettier/recommended',
    'eslint:recommended',
    '@vue/prettier'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    "component-name-in-template-casing": "off",
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "any"
        }
      }
    ],
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'avoid',
        singleQuote: true,
        semi: false,
        endOfLine: 'auto',
        bracketSpacing: true,
        trailingComma: 'none'
      }
    ],

    "import/prefer-default-export": "off",

    'no-alert': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "no-shadow": ["error", { allow: ["state"] }],
    "no-param-reassign": 0,
    'no-undef': 'off',
    // // "no-unused-vars": ["error", { args: "none" }]
    'no-unused-vars': 'off'
  }
}
