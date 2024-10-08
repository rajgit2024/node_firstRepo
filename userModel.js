const mongoose=require("mongoose");

//const mongoURL=process.env.MONGO_URL_LOCAL;
const mongoURL=process.env.MONGO_URL;
mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const userSchema=mongoose.Schema({
    name:String,
    username:String,
    email:String
})

//Add schemaa and export to app.js file
module.exports=mongoose.model("user",userSchema);