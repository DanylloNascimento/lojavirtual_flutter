module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "google",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["tsconfig.json", "tsconfig.dev.json"],
    sourceType: "module",
  },
  ignorePatterns: [
    "/lib/**/*", // Ignore built files.
  ],
  plugins: [
    "@typescript-eslint",
    "import",
  ],
  rules: {
    "indent": "off",
    "comma-dangle": "off",
    "@typescript-eslint/comma-dangle": "off",
    "space-before-function-paren": "off",
    "comma-spacing": "off",
    "object-curly-spacing": [2, "always"],
    "quotes": ["error", "double"],
    "import/no-unresolved": 0,
    "require-jsdoc": 0,
  },
};