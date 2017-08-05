const fs = require('fs');
const crypto = require('crypto');

function encrypt(text, password) {
	if (password) {
		let cipher = crypto.createCipher('aes-256-ctr', password);
		let crypted = cipher.update(text, 'utf8', 'base64');
		crypted += cipher.final('base64');
		return crypted;
	}
	return text;
}

function decrypt(text, password) {
	if (password) {
		let decipher = crypto.createDecipher('aes-256-ctr', password);
		let decrypted = decipher.update(text, 'base64', 'utf8');
		decrypted += decipher.final('utf8');
		return decrypted;
	}
	return text;
}

module.exports = (config) => {
	return new Promise((resolve, reject) => {
		let db = {};
		db.save = () => {
			return new Promise((resolve, reject) => {
				fs.writeFile(config.file, encrypt(JSON.stringify(db.value), config.password), 'utf-8', (err) => {
					if (err) reject(err);
					resolve();
				});
			})
		}
		fs.readFile(config.file, 'utf-8', (err, text) => {
			if (err) {
				if (err.code === 'ENOENT') {
					db.value = config.default;
				}
				else {
					reject(err);
				}
			}
			else db.value = JSON.parse(decrypt(text, config.password));
			resolve(db);
		})
	});
}