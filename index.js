let fs = require("fs");
let crypto = require("crypto");

let encrypt = (text, password)=>{
	password = password || "bN1BX06ULSBKq7IpO3RfJxxa21R9u32F";
	let cipher = crypto.createCipher("aes-256-ctr", password);
	let crypted = cipher.update(text, "utf8", "base64");
	crypted += cipher.final("base64");
	return crypted;
	return text;
}

let decrypt = (text, password)=>{
	password = password || "bN1BX06ULSBKq7IpO3RfJxxa21R9u32F";
	let decipher = crypto.createDecipher("aes-256-ctr", password);
	let decrypted = decipher.update(text, "base64", "utf8");
	decrypted += decipher.final("utf8");
	return decrypted;
	return text;
}

module.exports = function(file, password){
	if(fs.existsSync(file)){
		this.value = JSON.parse(decrypt(fs.readFileSync(file, "utf-8"), password));
	}
	this.save = ()=>{
		return new Promise(()=>{
			fs.writeFileSync(file, encrypt(JSON.stringify(this.value), password), "utf-8");
		});
	}
}
