import importPlugin from '@trivago/prettier-plugin-sort-imports';

/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  trailingComma: 'es5',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  importOrder: ['<THIRD_PARTY_MODULES>', '[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: [importPlugin],
  overrides: [
    {
      files: '*.yaml',
      options: {
        tabWidth: 2,
        singleQuote: false,
      },
    },
  ],
};

export default config;
