module.exports = {
  env: {
    // browser: true,
    node: true,
    es2021: true,
  },
  extends: "eslint:recommended",
  plugins: ["import"],
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
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "no-unused-vars": 1,
    "import/no-commonjs": "error",
  },
  ignorePatterns: [
    "node_modules",
    "dist",
    "build",
    "webpack.config.ts",
    "jest.config.ts",
    ".eslintrc.js",
    "ecosystem.config.js",
  ],
};
