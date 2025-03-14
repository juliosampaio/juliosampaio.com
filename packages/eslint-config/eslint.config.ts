import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
// eslint-disable-next-line no-relative-import-paths/no-relative-import-paths
import defaultConfig from "./src/default";

export default tseslint.config(eslint.configs.recommended, tseslint.configs.recommended, defaultConfig);
