let fs = require('fs')
module.exports = function(file){
	this.value = {}
	fs.readFile(file, 'utf-8', (err, text) => {
		if (err && err.code == 'ENOENT') {
			this.write(() => {
				if(this.ready){
					this.ready()
				}
			})
		}
		else if(err) {
			throw err
		}
		else {
			this.value = JSON.parse(text)
			if(this.ready){
				this.ready()
			}
		}
	})
	this.write = (cb) => {
		fs.writeFile(file, JSON.stringify(this.value), 'utf-8', (err) => {
			if (err){
				throw err
			}
			else if(cb){
				cb()
			}
		})
	}
}
