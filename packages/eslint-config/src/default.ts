import { type Linter } from "eslint";
import noRelativeImportPaths from "eslint-plugin-no-relative-import-paths";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export const noRelativeImports: Linter.Config<Linter.RulesRecord> = {
  plugins: {
    "no-relative-import-paths": noRelativeImportPaths,
  },
  rules: {
    "no-relative-import-paths/no-relative-import-paths": "error",
  },
};

export const filesConfig: Linter.Config<Linter.RulesRecord> = {
  ignores: [".next/**", ".turbo/**", "dist/**", "node_modules/**"],
};

export default tseslint.config(eslint.configs.recommended, tseslint.configs.recommended, noRelativeImports, filesConfig);
