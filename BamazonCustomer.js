// PACKAGES WE NEED TO INSTALL FOR NODE
var mysql = require('mysql');
var inquirer = require('inquirer');

// ESTABLISHES CONNECTION TO MYSQL DB
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root", //Your username
    password: "kungfu123", //Your password
    database: "bamazon"
})

// ENSURES THAT THE CONNECTION IS ESTABLISHED. IF AN ERROR WAS THROWN, IT WILL LET ME KNOW
connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    // start();
})
