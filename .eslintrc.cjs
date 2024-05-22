module.exports = {
  "env": {
    browser: true, es2020: true, jest: true, node: true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },

    "ecmaVersion": 2020,
    "sourceType": "module"
  },
  "plugins": [
    "react", "jest"
  ],
  "rules": {
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "never"
    ],
    "eqeqeq": "error",
    "no-trailing-spaces": "error",
    "object-curly-spacing": [
      "error", "always"
    ],
    "arrow-spacing": [
      "error", { "before": true, "after": true }
    ],
    "no-console": "warn",
    "react/prop-types": 0
  }
}
