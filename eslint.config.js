import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

/** @type {import('eslint').Linter.Config} */
export default {
  files: ["**/*.{js,mjs,cjs,ts}"],
  parser: tsParser,
  plugins: ["@typescript-eslint"],
  languageOptions: {
    globals: { ...globals.browser, ...globals.node },
  },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  rules: {
    "no-console": "warn",
    "no-undef": "warn",
    "no-unused-vars": "warn",
    "no-constant-condition": "warn",
    "no-unsafe-optional-chaining": "warn",
    "no-unsafe-negation": "warn",
    "no-unsafe-assignment": "warn",
    "no-unsafe-member-access": "warn",
    "no-unsafe-call": "warn",
    "no-unsafe-return": "warn",
    "no-unsafe-regex": "warn",
    "no-unsafe-argument": "warn",
    "no-unsafe-indexing": "warn",
    "no-implicit-any": "warn",
  },
};
