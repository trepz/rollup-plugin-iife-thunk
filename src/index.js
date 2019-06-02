export default function iifeThunk() {
  return {
    generateBundle(o, x) {
      if (o.format === 'iife') {
        for (const bundle of Object.keys(x)) {
          const start = `var ${o.name} = `
          const end = /\);\n$/
          x[bundle].code = x[bundle].code
            .replace(start, start + 'function () { return ')
            .replace(end, ')};\n')
        }
      }
    },
  }
}
