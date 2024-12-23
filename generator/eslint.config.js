import globals from 'globals';
import pluginJs from '@eslint/js';
import stylisticJs from '@stylistic/eslint-plugin-js';

export default [
  {
    languageOptions: {
      globals: {
        ...globals.node,
        DEBUG: 'readonly',
      },
    },
  },
  pluginJs.configs.recommended,
  {
    plugins: {
      '@stylistic/js': stylisticJs,
    },
    rules: {
      '@stylistic/js/array-bracket-spacing': 'error',
      '@stylistic/js/brace-style': ['error', '1tbs', { allowSingleLine: true }],
      '@stylistic/js/comma-dangle': ['error', 'always-multiline'],
      '@stylistic/js/comma-spacing': 'error',
      '@stylistic/js/comma-style': 'error',
      '@stylistic/js/computed-property-spacing': 'error',
      '@stylistic/js/dot-location': ['error', 'property'],
      '@stylistic/js/eol-last': ['error', 'always'],
      '@stylistic/js/function-call-argument-newline': ['error', 'consistent'],
      '@stylistic/js/function-call-spacing': 'error',
      '@stylistic/js/generator-star-spacing': ['error', 'before'],
      '@stylistic/js/implicit-arrow-linebreak': 'error',
      '@stylistic/js/indent': ['error', 2, {
        SwitchCase: 1,
      }],
      '@stylistic/js/jsx-quotes': 'error',
      '@stylistic/js/key-spacing': 'error',
      '@stylistic/js/keyword-spacing': 'error',
      '@stylistic/js/line-comment-position': 'error',
      '@stylistic/js/linebreak-style': 'error',
      '@stylistic/js/lines-around-comment': 'error',
      '@stylistic/js/lines-between-class-members': ['error', {
        enforce: [
          { blankLine: 'always', prev: '*', next: '*' },
        ],
      }, { exceptAfterSingleLine: true }],
      '@stylistic/js/max-len': ['error', {
        code: 100,
        comments: 80,
        tabWidth: 2,
        ignorePattern: '^(\\s+)?test\\(.*\\s=>\\s\\{$',
      }],
      '@stylistic/js/max-statements-per-line': ['error', { max: 2 }],
      '@stylistic/js/multiline-comment-style': ['error', 'separate-lines'],
      '@stylistic/js/new-parens': ['error', 'always'],
      '@stylistic/js/no-confusing-arrow': 'error',
      '@stylistic/js/no-extra-parens': 'off',
      '@stylistic/js/no-extra-semi': 'error',
      '@stylistic/js/no-floating-decimal': 'error',
      '@stylistic/js/no-mixed-operators': ['error', {
        groups: [
          ['&&', '||'],
          ['in', 'instanceof'],
        ],
        allowSamePrecedence: true,
      }],
      '@stylistic/js/no-multi-spaces': 'error',
      '@stylistic/js/no-multiple-empty-lines': ['error', { max: 1 }],
      '@stylistic/js/no-trailing-spaces': 'error',
      '@stylistic/js/no-whitespace-before-property': 'error',
      '@stylistic/js/nonblock-statement-body-position': 'error',
      '@stylistic/js/object-curly-newline': 'error',
      '@stylistic/js/object-curly-spacing': ['error', 'always'],
      '@stylistic/js/object-property-newline': ['error', {
        allowAllPropertiesOnSameLine: true,
      }],
      '@stylistic/js/operator-linebreak': ['error', 'before'],
      '@stylistic/js/padded-blocks': ['error', 'never'],
      '@stylistic/js/quote-props': ['error', 'as-needed'],
      '@stylistic/js/quotes': ['error', 'single'],
      '@stylistic/js/rest-spread-spacing': ['error', 'never'],
      '@stylistic/js/semi': ['error', 'always'],
      '@stylistic/js/semi-spacing': 'error',
      '@stylistic/js/semi-style': 'error',
      '@stylistic/js/space-before-blocks': 'error',
      '@stylistic/js/space-before-function-paren': ['error', {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always',
      }],
      '@stylistic/js/space-in-parens': 'error',
      '@stylistic/js/space-infix-ops': ['error', { int32Hint: false }],
      '@stylistic/js/space-unary-ops': ['error', { words: true, nonwords: false }],
      '@stylistic/js/spaced-comment': 'error',
      '@stylistic/js/switch-colon-spacing': 'error',
      '@stylistic/js/template-curly-spacing': 'error',
      '@stylistic/js/template-tag-spacing': 'error',
      '@stylistic/js/wrap-iife': ['error', 'any'],
      '@stylistic/js/yield-star-spacing': 'error',
    },
  },
];
