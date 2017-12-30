# easydb

Easy asynchronous JSON databse

[![NPM](https://nodei.co/npm/easydb.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/easydb/)

# How to install

```sh
$ npm install easydb
```

# Example usage

```javascript
var EasyDB = require('easydb')
var db = new EasyDB('file.json')

db.ready = function(){

	//Print file.json value
	console.log(db.value)

	//Manipulate db.v object as you want
	db.value.a = 1
	db.value.b = 2

	//Write db.value to file.json
	db.write(function(){
		console.log("Data stored!");
	})
	
}
```
