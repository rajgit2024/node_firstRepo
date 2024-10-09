const express=require("express");
const userModel=require("./userModel");
const passport=require("passport");
const passportStrategy=require("passport-local");
require("dotenv").config();

const PORT=process.env.PORT||3000;

app.get("/",(req,res)=>{
res.send("Welcome to our Hotel");
} )

const personRoutes = require("./routes/menuRoutes");
const menuRoutes= require("./routes/personRoutes");

app.use('./person',personRoutes);
app.use('./menu',menuRoutes);

//for port file
app.listen(PORT,()=>{
  console.log(`Server is running on port${porrt}`);
  
})