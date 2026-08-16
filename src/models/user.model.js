import mongoose from "mongoose";


//schema
//new mongoose.Schema(definition, options)

const userSchema= new mongoose.Schema({
  full_name:{
    type:String,
    required:[true,"full_name is required"],
    trim:true,
    minLength:3,
  },
  email:{
    type:String,
    required:[true,"email is required"],
    unique:[true,"email must be unique"],
},
password:{
    type:String,
    required:[true,"password is required"],
},
role:{
    type:String,
    enum:["admin","user"],
    default:"user",
},
},
{ timestamps:true,}
);


export const User = mongoose.model("User", userSchema);
export default User;