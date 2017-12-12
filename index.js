let fs = require('fs')

module.exports = (file) => {

	function save(value){
		return new Promise((resolve, reject) => {
			fs.writeFile(file, JSON.stringify(value), 'utf-8', (err) => {
				if (err) reject(err)
				resolve()
			})
		})
	}

	return new Promise((resolve, reject) => {
		let value = {}
		fs.readFile(file, 'utf-8', (err, text) => {
			if (err && err.code == 'ENOENT') {
				save(value).then(() => {
					resolve({value, save})
				})
			}
			else if(err) {
				reject(err)
			}
			else {
				value = JSON.parse(text)
				resolve({value, save})
			}
		})
	})

}
