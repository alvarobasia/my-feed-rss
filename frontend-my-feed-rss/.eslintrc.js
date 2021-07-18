module.exports = {
    env: {
      browser: true,
      es6: true,
      node: true,
      jest: true,
    },
    extends: ["standard",
    "plugin:react/recommended",
  ],
    globals: {
      Atomics: "readonly",
      SharedArrayBuffer: "readonly",
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
      project: "./tsconfig.json",
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 2018,
      sourceType: "module",
    },
    plugins: ["react", "@typescript-eslint", "prettier"],
    rules: {
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "space-before-function-paren": "off",
      "prettier/prettier": "error",
      "@typescript-eslint/strict-boolean-expressions": "off",
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/dot-notation": "off",
      "@typescript-eslint/keyword-spacing": "off",
      "@typescript-eslint/lines-between-class-members": "off",
      "multiline-ternary": "off",
      "no-use-before-define": "off",
      "react/display-name": "off",
      "generator-star-spacing": "off",
      "class-methods-use-this": "off",
      "no-labels": ["error", { allowLoop: false, allowSwitch: false }],
      "no-continue": "off",
      "no-plusplus": "off",
      "indent": "off",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  };
  