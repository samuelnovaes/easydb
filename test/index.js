let easydb = require('../index.js')

easydb('test/file.json').then(db => {

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
