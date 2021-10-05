var http = require('http')
http.createServer((req,res)=>{
    res.write("Hello,Welcome");
    res.end();
}).listen(4005,()=>console.log("Node server started on port number 3000"));

//Express

const express = require('express')

var app = express();
app.get('/',(req,res)=>{
    res.send("Welcome Prograd");
}).listen(4001,()=>console.log("Express server started at port number 4000"));