// const path = require('path')
const withPreact = require('next-plugin-preact')
const basePath = ''
module.exports = withPreact({
	assetPrefix: basePath,
	publicRuntimeConfig: {
		basePath,
	},
	experimental: {
		optimizeFonts: true,
		optimizeImages: true,
	},
})
