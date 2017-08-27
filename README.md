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

easydb('file.json').then((db)=>{

    //Write default data
    if(!db.value){
        db.value = {location:"Brazil", people:[], num:0}
    }

    //Read data
    console.log(db.value.location);

    //Write or edit data
    db.value.location = "EUA";
    db.value.people.push({name: "Foo", age: 20, gender: "Male"});
    db.value.num++;

    //Store data
    db.save().then(()=>{
        console.log("Data Stored!");
    });

})
```
