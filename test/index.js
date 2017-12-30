var EasyDB = require('../index.js')
var db = new EasyDB('test/file.json')

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
