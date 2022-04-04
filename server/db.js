var mongoose = require("mongoose");

const mongoURI = "mongodb+srv://zarana:zarnabuma@cluster0.bzltt.mongodb.net/projectbuma?retryWrites=true&w=majority";

const connectToMongo = function (){
    mongoose.connect(mongoURI, {useNewUrlParser:true,useUnifiedTopology:true} 
    ).then(()=>{
        console.log("Connected to atlas")}).catch((err)=>{
            console.log(err);
        })
}

module.exports = connectToMongo;