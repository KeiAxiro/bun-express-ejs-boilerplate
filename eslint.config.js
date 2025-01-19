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
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  rules: {
    "no-console": "off",
    "no-undef": "off",
    "no-unused-vars": "off",
    "no-constant-condition": "off",
    "no-unsafe-optional-chaining": "off",
    "no-unsafe-negation": "off",
    "no-unsafe-assignment": "off",
    "no-unsafe-member-access": "off",
    "no-unsafe-call": "off",
    "no-unsafe-return": "off",
    "no-unsafe-regex": "off",
    "no-unsafe-argument": "off",
    "no-unsafe-indexing": "off",
  },
};