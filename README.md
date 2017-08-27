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

easydb('file.json', (db)=>{

    //Write values if not exists
    if(!db.location) db.location = "Brazil";
    if(!db.people) db.people = [];
    if(!db.num) db.num = 0;

    //Read value
    console.log(db.location);

    //Write or edit value
    db.location = "EUA";
    db.people.push({name: "Foo", age: 20, gender: "Male"});
    db.num++;

})
.then(()=>{
    console.log("Data Stored!");
})
```
