/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  trailingComma: "es5",
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  importOrder: ["<THIRD_PARTY_MODULES>", "[./]"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: [require.resolve("@trivago/prettier-plugin-sort-imports")],
  overrides: [
    {
      files: "*.yaml",
      options: {
        tabWidth: 2,
        singleQuote: false,
      },
    },
  ],
};

module.exports = config;
