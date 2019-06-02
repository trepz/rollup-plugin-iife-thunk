export default {
  input: './src/index.js',
  output: [
    { file: 'dist/rollup-plugin-iife-thunk.cjs.js', format: 'cjs' },
    { file: 'dist/rollup-plugin-iife-thunk.es.js', format: 'es' },
  ],
}
