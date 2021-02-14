// const path = require('path')
const withPreact = require('next-plugin-preact')
const basePath = 'development' === process.env.NODE_ENV ? '' : '/keizai-mawasu'
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
