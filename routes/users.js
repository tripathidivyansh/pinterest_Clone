 const mongoose = require('mongoose');
 const plm = require("passport-local-mongoose");
try {
  mongoose.connect("mongodb://127.0.0.1:27017/anayappforgolu")
  
} catch (error) {
  console.log("mongoose not connected");
}
// Define the schema
const userSchema = new mongoose.Schema({
  username: { 
    type: String, 
    required: true, 
    unique: true, 
    trim: true 
  },
  password: { 
    type: String, 
  },
  email: { 
    type: String, 
    required: true, 
    unique: true, 
    lowercase: true, 
    trim: true 
  },
  fullname: { 
    type: String, 
    required: true, 
    trim: true 
  },
  dp: { 
    type: String, // can store image URL or path
    default: "default.jpg" 
  },
  post:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post'
  }]
}, { timestamps: true }); // adds createdAt and updatedAt fields

// Create the model
userSchema.plugin(plm);
module.exports = mongoose.model("User", userSchema);









