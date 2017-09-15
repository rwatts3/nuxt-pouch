const path = require('path')

module.exports = function nuxtPouch (moduleOptions) {
	let options = Object.assign({
		defaultDB: process.env.COUCHDB_URI
	}, this.options.pouch, moduleOptions);
	
	this.addPlugin({
		src: path.resolve(__dirname, 'plugin.js'),
		options
	})
}
