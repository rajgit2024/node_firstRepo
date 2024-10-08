const express=require("express");
const userModel=require("./userModel");

const app=express();
const porrt=3000;

app.get('/',(req,res)=>{
  res.send("you can do this raj");
})
app.get('/create',async(req,res)=>{
   const createdUser= await userModel.create({
    name:"Rohan",
    username:"raju2012",
    email:"raj@2005" 
  })
  res.send(createdUser);
})
//update an element
app.get("/update",async(req,res)=>{
 const updateUser= await userModel.findOneAndUpdate(
  {username:"Raj"},{name:"Raju"},{new:true})
  res.send(updateUser);
})
//Read model(table)-- we have two type of read method 1.all read 2.single col read
app.get("/read",async(req,res)=>{
  const readUser= await userModel.find();
  res.send(readUser);
})
//Delete objects from array
app.get("/delete",async(req,res)=>{
  const readUser= await userModel.findOneAndDelete({name:"Raj"});
  res.send(readUser);
})

app.listen(porrt,()=>{
  console.log(`Server is running on port${porrt}`);
  
})