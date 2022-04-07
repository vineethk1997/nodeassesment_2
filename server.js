
// console.log("hello")

// const express = require("express");

// creating server
const express = require("express");

const server = express();

const middleware1 = (req, res, next)=>{
    console.log("This is middleware1");
    next()
}


server.use(middleware1)


server.get("/",(request,response)=>{
    response.send("<h1>Hello</h1>")
})

server.get("/user",(request,response)=>{
    response.send("Hello World")
})

server.get("/id",(request,response)=>{
    response.send("Hello Hello Hello")
})

server.listen(3000,()=>{
    console.log("It is running")
})

