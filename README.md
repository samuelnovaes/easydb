# easydb

Easy asynchronous encrypted JSON databse

[![NPM](https://nodei.co/npm/easydb.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/easydb/)

# How to install

```sh
$ npm install easydb
```

# Example usage

```javascript
const easydb = require("easydb");

easydb({
    file: "file.db",
    password: "myPassword",
    default: {location:"Brazil", people:[], num:0} //Initial value
}).then((db)=>{

    //Read data
    console.log(db.value.location);

    //Write or edit data
    db.value.location = "EUA";
    db.value.people.push({name: "Foo", age: 20, gender: "Male"});
    db.value.num++;

    //Store data
    db.save().then(()=>{
        console.log("Data Stored!");
    }).catch((err)=>{
        console.log('Error on storing data: '+err);
    });

}).catch((err)=>{
    console.log('Error on loading database: '+err);
})
```
