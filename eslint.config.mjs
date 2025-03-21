import { defineConfig } from "eslint/config";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default defineConfig([{
    extends: compat.extends("eslint:recommended"),

    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.greasemonkey,
        },

        ecmaVersion: 12,
        sourceType: "script",

        parserOptions: {
            ecmaFeatures: {
                jsx: false,
                experimentalObjectRestSpread: true,
            },
        },
    },

    files: ["*.js"],

    rules: {
        indent: ["error", 2],
    },
}]);
