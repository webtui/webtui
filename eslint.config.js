import eslintPluginAstro from "eslint-plugin-astro";
import tseslint from "typescript-eslint";
import globals from "globals";

export default [
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    files: ["**/*.{ts}"],
    languageOptions: {
      globals,
      parser: tseslint.parser,
      parserOptions: {
        project: "./tsconfig.json",
      }
    }
  }
];
