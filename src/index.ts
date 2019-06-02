import { OutputOptions, PluginImpl, OutputBundle } from 'rollup'

const iifeThunk: PluginImpl = () => {
  return {
    name: 'rollup-plugin-iife-thunk',
    generateBundle(
      outputOptions: OutputOptions,
      outputBundle: OutputBundle,
    ): void {
      console.log(outputOptions, outputBundle)
      if (outputOptions.format === 'iife') {
        for (const bundle of Object.keys(outputBundle)) {
          const start = /^(const|var)\s(\w+\s=)\s/
          const end = /\);\n$/
          outputBundle[bundle].code = outputBundle[bundle].code
            .replace(start, start + '$1 $2 function () { return ')
            .replace(end, ')};\n')
        }
      }
    },
  }
}

export default iifeThunk
