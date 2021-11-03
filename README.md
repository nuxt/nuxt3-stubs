# Nuxt 3 `-edge` stubs

Nuxt packages are auto released after each commit and when passing tests with an `-edge` suffix in their name.
This helps to avoid polluting `@nuxt/` packages and slowing down npm registry lookup and also testing latest changes without wait for next release.

Currently since there is no stable release channel for Nuxt 3, we use edge releases.
In order to keep usage as simple as possible, package stubs in this repository re-export from latest edge release for each package.

Please check https://v3.nuxtjs.org/ and https://github.com/nuxt/framework for usage information.
