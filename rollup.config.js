import typescript from 'rollup-plugin-typescript2'

export default {
  input: './src/index.ts',
  output: [
    { file: 'dist/rollup-plugin-iife-thunk.cjs.js', format: 'cjs' },
    { file: 'dist/rollup-plugin-iife-thunk.es.js', format: 'es' },
  ],
  plugins: [typescript()],
}
