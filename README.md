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
    file: "file.db",
    password: "myPassword",
    default: {location:"Brazil", people:[], num:0} //Initial value
});

//Write or edit data
db.value.location = "EUA";
db.value.people.push({name: "Foo", age: 20, gender: "Male"});
db.value.num++;

//Store data
db.save();

console.log(db.value);
//{location: "EUA", people: [{name: "Foo", age: 20, gender: "Male"}], num: 1}
```
