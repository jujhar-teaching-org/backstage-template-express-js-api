module.exports = {
  extends: "eslint:recommended",
  env: {
    browser: false,
    es2021: true,
    node: true,
    commonjs: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    quotes: [2, "double", { avoidEscape: true }],
    semi: ["error", "always"],
  },
};
