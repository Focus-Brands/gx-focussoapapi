module.exports = {
  env: {
    es2021: true,
    node: true,
    "jest/globals": true,
  },
  globals: {
    fail: "readonly",
  },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "prettier", "jest"],
  ignorePatterns: ["*.js", "*.d.ts"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-use-before-define": "error",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_.+|^.+([Ss]ervice|[Mm]odel|[Rr]epository)",
      },
    ],
    "no-undef": "error",
    "no-empty": "error",
    "no-constant-condition": "error",
    "max-len": [
      "error",
      { code: 90, ignoreStrings: true, ignoreComments: true },
    ],
    complexity: ["error", 10],
    "no-var": "error",
    "no-eval": "error",
    "grouped-accessor-pairs": ["error", "getBeforeSet"],
    "no-constant-binary-expression": "error",
    "no-debugger": "error",
    "no-dupe-args": "error",
    "no-dupe-else-if": "error",
    "no-dupe-keys": "error",
    "no-duplicate-imports": "error",
    "no-ex-assign": "error",
    "no-unexpected-multiline": "error",
    "no-unreachable": "error",
    "no-unused-private-class-members": "error",
    "use-isnan": "error",
    "accessor-pairs": "error",
    "no-constructor-return": "error",
    camelcase: ["error", { properties: "never", ignoreDestructuring: true }],
    "prefer-template": "error",
  },
};
