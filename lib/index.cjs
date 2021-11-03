console.warn('[warning] You are using CommonJS version of `@nuxt/kit` that is an ESM-only package. CJS support will be dropped in stable release.')

module.exports = require('jiti')(__dirname)('./index.mjs')
