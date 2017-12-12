# easydb

Easy asynchronous JSON databse

[![NPM](https://nodei.co/npm/easydb.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/easydb/)

# How to install

```sh
$ npm install easydb
```

# Example usage

```javascript
const easydb = require("easydb");

easydb('file.json').then(db => {

	//Print file.json data
	console.log(db.value)

	//Manipulate db.value object as you want
	db.value.a = 1
	db.value.b = 2

	//Store db.value to file.json
	db.save(db.value).then(() => {
		console.log("Data Stored!");
	})

})
```
