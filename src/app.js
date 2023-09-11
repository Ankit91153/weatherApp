const express=require("express");
const app=express();
const hbs=require("hbs");
const path=require("path")
const port=process.env.port || 5000;

const staticpath=path.join(__dirname,"../public");
const templatePath=path.join(__dirname,"../template/views");
const partialPath=path.join(__dirname,"../template/partial");

app.use(express.static(staticpath));
app.set("view engine","hbs");
app.set("views",templatePath);
hbs.registerPartials(partialPath);


app.get("/",(req,res)=>{
    res.render("index");
})
app.get("/weathericon",(req,res)=>{
    res.render("weathericon");
})
app.get("/weather",(req,res)=>{
    res.render("weather");
})


app.listen(port,()=>{

console.log("Server Listen"+port);
})