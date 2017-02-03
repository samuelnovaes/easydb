# easydb

Easy encrypted JSON databse

[![NPM](https://nodei.co/npm/easydb.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/easydb/)

# How to install

```sh
$ npm install easydb
```

# Example usage

```javascript
const easydb = require("easydb");

const db = new easydb({
    file: "people.db",
    password: "test123",
    default: {location: "Brazil", people: []} //Initial value
});

//Writing or editing values
db.write($=>{
    $.location = "EUA";
    $.people.push({name: "Foo", age: 20, gender: "Male"});
    return $; //Don't forguet this
});

//Saving values to file
db.save();

//Getting values
console.log(db.value);
//{location: "EUA", people: [{name: "Foo", age: 20, gender: "Male"}]}
```
