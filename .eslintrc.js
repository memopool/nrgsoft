module.exports = {
  extends: [
    "eslint:recommended",
    "react-app",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "prettier/react",
  ],
  plugins: [
    "better-styled-components",
    "simple-import-sort",
  ],
  rules: {
    "prettier/prettier": "error",
    "react/prop-types": 1,
    "better-styled-components/sort-declarations-alphabetically": 2,
    "simple-import-sort/sort": "error",
  }
}