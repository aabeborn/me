import react from "eslint-plugin-react";
import hooks from "eslint-plugin-react-hooks";
import compiler from "eslint-plugin-react-compiler";
import { config as base } from "./base.js";

/** @type {import("eslint").Linter.Config} */
export const config = [
  react.configs.flat.recommended,
  {
    plugins: {
      "react-hooks": hooks,
    },
    settings: { react: { version: "detect" } },
    rules: {
      ...hooks.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",
    },
  },
  {
    plugins: {
      "react-compiler": compiler,
    },
    rules: { "react-compiler/react-compiler": "error" },
  },
  ...base,
];
