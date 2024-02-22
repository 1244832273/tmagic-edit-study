
module.exports = {
  plugins: ['prettier'],
  rules: {
    'wrap-iife': 'off',
    'template-curly-spacing': 'off',
    'space-infix-ops': 'off',
    'space-in-parens': 'off',
    'space-before-blocks': 'off',
    'quote-props': 'off',
    'padded-blocks': 'off',
    'operator-linebreak': 'off',
    'object-curly-spacing': 'off',
    'nonblock-statement-body-position': 'off',
    'no-whitespace-before-property': 'off',
    'no-trailing-spaces': 'off',
    'no-multiple-empty-lines': 'off',
    'no-mixed-operators': 'off',
    'no-confusing-arrow': 'off',
    'newline-per-chained-call': 'off',
    'max-len': 'off',
    'linebreak-style': 'off',
    'key-spacing': 'off',
    'implicit-arrow-linebreak': 'off',
    'generator-star-spacing': 'off',
    'function-paren-newline': 'off',
    'eol-last': 'off',
    'computed-property-spacing': 'off',
    'comma-style': 'off',
    'comma-dangle': 'off',
    'block-spacing': 'off',
    'arrow-spacing': 'off',
    'arrow-parens': 'off',
    'array-bracket-spacing': 'off',

    '@typescript-eslint/type-annotation-spacing': 'off',
    '@typescript-eslint/space-before-function-paren': 'off',
    '@typescript-eslint/semi': 'off',
    '@typescript-eslint/quotes': 'off',
    '@typescript-eslint/keyword-spacing': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/func-call-spacing': 'off',
    '@typescript-eslint/comma-spacing': 'off',
    '@typescript-eslint/brace-style': 'off',
    /**
     * prettier 格式错误
     */
    'prettier/prettier': [
      'warn',
      {
        printWidth: 120,
        tabWidth: 2,
        useTabs: false,
        semi: true,
        singleQuote: true,
        quoteProps: 'as-needed',
        jsxSingleQuote: false,
        trailingComma: 'all',
        bracketSpacing: true,
        jsxBracketSameLine: false,
        arrowParens: 'always',
        rangeStart: 0,
        rangeEnd: null,
        requirePragma: false,
        insertPragma: false,
        proseWrap: 'preserve',
        htmlWhitespaceSensitivity: 'css',
        vueIndentScriptAndStyle: false,
        endOfLine: 'lf',
        embeddedLanguageFormatting: 'auto',
      },
      {
        usePrettierrc: false,
      },
    ],
  },
};
