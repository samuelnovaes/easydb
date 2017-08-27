const fs = require('fs')

module.exports = (file) => {
	return new Promise((resolve, reject) => {
		let db = {}
		fs.readFile(file, 'utf-8', (err, text) => {
			if (err) {
				if (err.code === 'ENOENT') {
					db.value = null
				}
				else {
					reject(err.message)
				}
			}
			else {
				try {
					db.value = JSON.parse(text)
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
			resolve(db)
		})
		db.save = () => {
			return new Promise((resolve, reject) => {
				fs.writeFile(file, JSON.stringify(db.value), 'utf-8', (err) => {
					if (err) reject(err.message)
					resolve()
				})
			})
		}
	})
}