import typescriptEslint from "@typescript-eslint/eslint-plugin";
import effector from "eslint-plugin-effector";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
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

export default [...compat.extends(
    "plugin:@typescript-eslint/recommended",
    "plugin:effector/recommended",
    "prettier",
), {
    plugins: {
        "@typescript-eslint": typescriptEslint,
        effector,
    },

    languageOptions: {
        globals: {
            ...globals.browser,
        },

        parser: tsParser,
        ecmaVersion: 12,
        sourceType: "module",

        parserOptions: {
            ecmaFeatures: {
                jsx: true,
            },

            project: "tsconfig.json",
            tsconfigRootDir: "./",
        },
    },

    settings: {
        react: {
            version: "detect",
        },
    },

    rules: {
        "@typescript-eslint/no-empty-interface": "warn",
        "@typescript-eslint/no-unused-vars": "warn",
        "@typescript-eslint/no-explicit-any": "warn",
        "react/display-name": "warn",
        "react-hooks/rules-of-hooks": "error",
        "prefer-const": "error",

        "no-console": ["error", {
            allow: ["warn", "error"],
        }],

        "no-restricted-syntax": ["error", {
            selector: "CallExpression[callee.object.name='console'][callee.property.name='log']",
            message: "Using console.log is not allowed.",
        }],

        "padding-line-between-statements": ["warn", {
            blankLine: "always",
            prev: "*",
            next: "return",
        }],

        "import/order": ["warn", {
            groups: [["builtin", "external", "internal"], ["parent", "sibling", "index"]],

            pathGroups: [{
                pattern: "*.css",

                patternOptions: {
                    matchBase: true,
                },

                group: "sibling",
                position: "after",
            }, {
                pattern: "@/**",

                patternOptions: {
                    matchBase: true,
                },

                group: "internal",
                position: "after",
            }],

            "newlines-between": "always",
        }],
    },
}, {
    files: ["**/*.stories.tsx"],

    rules: {
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-unused-vars": "off",
    },
}];