var express = require('express');
var router = express.Router();

/* GET home page. */
router.get("/",(req,res)=>{
  res.send("Working");
})

router.get("/menu",(req,res)=>{
  res.send("You menu is getting ready");
})

router.get("/person",(req,res)=>{
  res.send("Hellow from person side");
})

module.exports = router;
