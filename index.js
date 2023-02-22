const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;// 5000->8000

const configDB = {
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 't2210m',
  multipleStatements: true
};
const mysql = require("mysql");
const conn = mysql.createConnection(configDB);

app.listen(PORT,function (){
   console.log("Server is running....");
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get("/",function (req,res){
    res.send("Hello world");
})

app.get("/api/products",function (req,res){
   var sql = "select * from products";
   conn.query(sql,function (err,data){
      if(err) res.send("404 not found");
      else res.send(data);
   });
});

app.get("/api/categories",function (req,res){
    var sql = "select * from categories";
    conn.query(sql,function (err,data){
        if(err) res.send("404 not found");
        else res.send(data);
    });
});