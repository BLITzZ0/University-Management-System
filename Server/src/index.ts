import express from "express";
const app = express()
const port = 3000

app.get("/",(req,res)=>{
    console.log("Hello World");
    res.send("hello");
});

app.get("/hello",(req,res)=>{
    console.log("Hello World");
    res.send("hello");
});


app.get("/hello",(req,res)=>{
    console.log("Hello World");
    res.send("hello");
});

app.listen(port,()=>{
    console.log("App is running in port: " + port)
})