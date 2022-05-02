module.exports = {
  extends: [
    'prettier',
    'airbnb',
    'airbnb/hooks',
    'eslint:recommended',
    'plugin:jest/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended'
  ],
  plugins: ['react', 'react-hooks', 'jest', 'eslint-plugin-import-helpers'],
  env: {
    browser: true,
    amd: true,
    node: true,
    jest: true
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'linebreak-style': 'off',
    'prefer-const': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'no-useless-escape': 'off',
    'no-nested-ternary': 'off',
    'no-console': 'off',
    'no-plusplus': 'off',
    'no-restricted-globals': 'off',
    'no-param-reassign': 'off',
    'no-alert': 'off',
    'no-loop-func': 'off',
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'import-helpers/order-imports': [
      'error',
      {
        newlinesBetween: 'always',
        groups: [
          ['/^react/', '/^redux/', '/react/'],
          'module',
          ['/^Services/', '/^Contexts/', '/^Utils/'],
          '/^Routes/',
          ['/^Components/', '/^Pages/', '/^Containers/'],
          ['/^pages/', '/^components/'],
          '/styled-components/',
          '/^Styles/',
          '/^.scss/',
          '/^Assets/',
          ['parent', 'sibling', 'index']
        ],
        alphabetize: { order: 'asc', ignoreCase: true }
      }
    ]
  }
};
