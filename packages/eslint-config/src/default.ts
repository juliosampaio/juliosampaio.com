import { type Linter } from 'eslint'
import noRelativeImportPaths from 'eslint-plugin-no-relative-import-paths'
import tseslint from 'typescript-eslint'

import eslint from '@eslint/js'
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended'

export const noRelativeImports: Linter.Config<Linter.RulesRecord> = {
  plugins: {
    'no-relative-import-paths': noRelativeImportPaths,
  },
  rules: {
    'no-relative-import-paths/no-relative-import-paths': 'error',
  },
}

export const filesConfig: Linter.Config<Linter.RulesRecord> = {
  ignores: ['.next/**', '.turbo/**', 'dist/**', 'node_modules/**'],
}

const eslintPluginPrettierConfig: Linter.Config<Linter.RulesRecord> = {
  ...eslintPluginPrettier,
}

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  noRelativeImports,
  filesConfig,
  eslintPluginPrettierConfig
)
