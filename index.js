var fs = require("fs");
var crypto = require("crypto");

function encrypt(text, password){
	if(password){
		var cipher = crypto.createCipher("aes-256-ctr", password);
		var crypted = cipher.update(text, "utf8", "base64");
		crypted += cipher.final("base64");
		return crypted;
	}
	return text;
}

function decrypt(text, password){
	if(password){
		var decipher = crypto.createDecipher("aes-256-ctr", password);
		var decrypted = decipher.update(text, "base64", "utf8");
		decrypted += decipher.final("utf8");
		return decrypted;
	}
	return text;
}

module.exports = function(config){
	try{
		this.value = JSON.parse(decrypt(fs.readFileSync(config.file, "utf-8"), config.password));
	}
	catch(err){
		if(err.code === "ENOENT"){
			this.value = config.default;
		}
		else{
			throw err;
		}
	}
	this.save = function(){
		fs.writeFileSync(config.file, encrypt(JSON.stringify(this.value), config.password), "utf-8");
	}
}
