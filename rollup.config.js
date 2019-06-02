export default {
  input: "./src/index.js",
  output: [
    { file: "dist/rollup-iife-thunk.cjs.js", format: "cjs" },
    { file: "dist/rollup-iife-thunk.es.js", format: "es" }
  ]
};
