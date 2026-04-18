const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());


// ----------------------
// MongoDB Atlas Connection
// ----------------------

mongoose.connect(
"mongodb+srv://sreekoduri21_db_user:Satyasaisree9999@cluster0.azp7toz.mongodb.net/loginDB?retryWrites=true&w=majority"
)
.then(() => console.log("Atlas Connected"))
.catch(err => console.log(err));



// ----------------------
// User Schema
// ----------------------

const UserSchema = new mongoose.Schema({

 email:String,

 password:String,

 createdAt:{
   type:Date,
   default:Date.now
 },

 status:{
   type:String,
   default:"active"
 }

});

const User = mongoose.model("User", UserSchema);



// ----------------------
// Signup API
// ----------------------

app.post("/signup", async(req,res)=>{

try{

const {email,password} = req.body;


// Check existing user

const existingUser =
await User.findOne({email});

if(existingUser){

return res.json({
success:false,
message:"User already exists"
});

}


// Create new user

const newUser = new User({
email,
password
});


// Save in MongoDB

const savedUser =
await newUser.save();

console.log(savedUser);


// Response

if(savedUser){

res.json({
success:true,
message:"Signup Success"
});

}else{

res.json({
success:false,
message:"User not saved"
});

}

}catch(error){

console.log(error);

res.json({
success:false,
message:"Database Error"
});

}

});



// ----------------------
// Login API
// ----------------------

app.post("/login", async(req,res)=>{

try{

const {email,password}=req.body;

const user =
await User.findOne({
email,
password
});

if(user){

res.json({
success:true,
message:"Login Success"
});

}else{

res.json({
success:false,
message:"Invalid Credentials"
});

}

}catch(error){

console.log(error);

res.json({
success:false,
message:"Login Error"
});

}

});



// ----------------------
// Start Server
// ----------------------

app.listen(5000,()=>{

console.log(
"Server running on port 5000"
);

});