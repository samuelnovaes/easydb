let fs = require("fs");
let crypto = require("crypto");

let encrypt = (text, password)=>{
	if(password){
		let cipher = crypto.createCipher("aes-256-ctr", password);
		let crypted = cipher.update(text, "utf8", "base64");
		crypted += cipher.final("base64");
		return crypted;
	}
	return text;
}

let decrypt = (text, password)=>{
	if(password){
		let decipher = crypto.createDecipher("aes-256-ctr", password);
		let decrypted = decipher.update(text, "base64", "utf8");
		decrypted += decipher.final("utf8");
		return decrypted;
	}
	return text;
}

module.exports = class {
	constructor(config){
		this.config = config;
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
	}
	save(){
		fs.writeFileSync(this.config.file, encrypt(JSON.stringify(this.value), this.config.password), "utf-8");
	}
}
