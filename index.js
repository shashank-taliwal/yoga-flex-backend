const express = require("express")
const app=express();
const port=process.env.PORT|| 4000;

app.get('/',(req,res)=>{
    res.status(200).json({"message":"Welcome to the backend service of flexmoney yoga service"});
});

app.post('/register',(req,res)=>{
    try{
        res.status(200).json({"message":"User registered"});
    } catch(err){
        res.status(401).json({"message":err});
    }
});

app.post('/renew',(req,res)=>{
    try{
        res.status(200).json({"message":"User renewed"});
    }catch(err){
        res.status(401).json({"message":err});
    }
});

app.post('/change-batch',(req,res)=>{
    try{
        res.status(200).json({"message":"batch changed"});
    } catch(err){
        res.status(401).json({"message":err});
    }
});

app.get('/defaulters',(req,res)=>{
    try{
        res.status(200).json({"message":"defaulter list"});
    } catch(err){
        res.status(401).json({"message":err});
    }
});

app.listen(port,()=>{
    console.log(`Server up and running at port ${port}`);
});