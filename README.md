# easydb

Easy oriented objects encrypted databse

[![NPM](https://nodei.co/npm/easydb.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/easydb/)

# How to install

```sh
$ npm install easydb
```

# How to use

```javascript
var easydb = require("easydb")
var db = new easydb(file, password)
//If file doesn't exist, It will be created.
```

- **file**: string
- **password (optional)**: string

# Create Group

```javascript
//Groups are like tables in a SQL database
db.createGroup(group)
//The group will only be created if it doesn't exist
```

- **group**: string

# Delete Group

```javascript
db.deleteGroup(group)
```

- **group**: string

# Rename Group

```javascript
db.renameGroup(oldName, newName)
```

- **oldName**: string
- **newName**: string

# Insert data

```javascript
db.insert(group, data)
```

- **group**: string
- **data**: any type of data

# Select data

```javascript
var dataArray = db.select(group, where)
//It returns an array of data. Setting
//Setting where to "$", it will return all data
```

- **group**: string
- **where**: string or function (See linq.js: [linq.js])

# Delete data

```javascript
db.delete(group, where)
//Setting where to "$", it will delete all data
```

- **group**: string
- **where**: string or function (See linq.js: [linq.js])

# Update data

```javascript
db.update(group, where, data)
//Setting where to "$", it will update all data
```

- **group**: string
- **where**: string or function (See linq.js: [linq.js])
- **data**: any type of data (See linq.js: [linq.js])

# Examples

```javascript
var easydb = require("easydb")
var db = new easydb("mybase", "mypassword")

/*Create group*/
db.createGroup("students")
db.createGroup("animals")

/*Delete group*/
db.deleteGroup("animals")

/*Rename group*/
db.renameGroup("students", "people")

/*Insert data*/
db.insert("people", {id: "#", name: "Samuel Novaes", age: 19, occupation: "student"})
//Creating a property called "id" and setting its value to "#", we have an auto increment

/*Select data*/
var people = db.select("people", "$.age < 20")
people.forEach(function(item){
  console.log(item.name)
})

/*Update data*/
db.update("people", "$.age > 25", function(x){
  x.occupation = "teacher"
  return x
})

/*Delete data*/
db.delete("people", "$.id == 1")
```

[linq.js]: <https://linqjs.codeplex.com>
