import alias from "rollup-plugin-alias";
import babel from "rollup-plugin-babel";
import { uglify } from "rollup-plugin-uglify";

const base = {
  plugins: [
    babel({    
      runtimeHelpers: true,
      exclude: "node_modules/**"
    }),
    alias({
      "@aws": "./src/aws",
      "@commands": "./src/commands",
      "@prompts": "./src/prompts",
      "@transformers": "./src/transformers",
      "@utils": "./src/utils",
      "@validations": "./src/validations"
    }),
    uglify()
  ]
};

export default [
  Object.assign(
    {},
    base,
    {
      input: "src/index.js",
      output: {
        format: "cjs",
        file: "dist/index.min.js"
      }
    }
  )
];
