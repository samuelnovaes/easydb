const fs = require('fs')
module.exports = (file, cb) => {
	return new Promise((resolve, reject) => {
		let db = {}
		fs.readFile(file, 'utf-8', (err, text) => {
			if (err && err.code != 'ENOENT') {
				reject(err.message)
			}
			else if (!err) {
				try {
					db = JSON.parse(text)
				}
				catch (e) {
					if (e.name == 'SyntaxError') {
						reject('Invalid JSON document!')
					}
					else {
						reject(err.message)
					}
				}
			}
			cb(db)
			fs.writeFile(file, JSON.stringify(db), 'utf-8', (err) => {
				if (err) reject(err.message)
				resolve()
			})
		})
	})
}