const express = require('express');
const path = require('path'); 

const app= express();

//let cssPath= path.resolve(__dirname,'./public/css/estilo.css')

app.use(express.static('public'));

//levantar servidor 
app.listen(3030,()=>{
    console.log("Servidor Corriendo!");
})

let indexPath= path.resolve(__dirname, './views/index.html');
let babbagePath= path.resolve(__dirname, './views/babbage.html');
let bernersLeePath= path.resolve(__dirname,'./views/berners-lee.html');
let clarkePath= path.resolve(__dirname,'./views/clarke.html');
let hamiltonPath= path.resolve(__dirname,'./views/hamilton.html');
let hopperPath = path.resolve(__dirname,'./views/hopper.html');
let lovelacePath = path.resolve(__dirname,'./views/lovelace.html');
let turingPath = path.resolve(__dirname, './views/turing.html')

app.get('/',(req,resp)=>{
    resp.sendFile(indexPath);
})

app.get('/babbage',(req,resp)=>{
    resp.sendFile(babbagePath);
})

app.get('/berners-lee',(req,resp)=>{
    resp.sendFile(bernersLeePath);
})

app.get('/clarke',(req,resp)=>{
    resp.sendFile(clarkePath);
})

app.get('/hamilton',(req,resp)=>{
    resp.sendFile(hamiltonPath);
})

app.get('/hopper',(req,resp)=>{
    resp.sendFile(hopperPath);
})

app.get('/lovelace',(req,resp)=>{
    resp.sendFile(lovelacePath);
})

app.get('/turing',(req,resp)=>{
    resp.sendFile(turingPath);
})





