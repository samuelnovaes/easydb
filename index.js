let fs = require("fs");
let crypto = require("crypto");
let encrypt = (text, password)=>{
	password = password || "bN1BX06ULSBKq7IpO3RfJxxa21R9u32F";
	let cipher = crypto.createCipher("aes-256-ctr", password);
	let crypted = cipher.update(text, "utf8", "hex");
	crypted += cipher.final("hex");
	return crypted;
	return text;
}
let decrypt = (text, password)=>{
	password = password || "bN1BX06ULSBKq7IpO3RfJxxa21R9u32F";
	let decipher = crypto.createDecipher("aes-256-ctr", password);
	let decrypted = decipher.update(text, "hex", "utf8");
	decrypted += decipher.final("utf8");
	return decrypted;
	return text;
}
module.exports = function(config){
	if(!fs.existsSync(config.file)){
		this.value = config.default;
	}
	else{
		this.value = JSON.parse(decrypt(fs.readFileSync(config.file, "utf-8"), config.password));
	}
	this.write = cb=>{
		return new Promise(()=>{
			this.value = cb(this.value);
		});
	};
	this.save = ()=>{
		return new Promise(()=>{
			fs.writeFileSync(config.file, encrypt(JSON.stringify(this.value), config.password), "utf-8");
		});
	};
}
