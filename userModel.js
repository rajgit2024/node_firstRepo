const mongoose=require("mongoose");
require('dotenv').config();

//const mongoURL=process.env.MONGO_URL_LOCAL;
const mongoURL=process.env.MONGO_URL;

//set up MongoDB connection
mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db=mongoose.connection;



//Add schemaa and export to app.js file
module.exports=mongoose.model("user",userSchema);