
import mongoose, { model, Schema } from "mongoose";
mongoose.connect("mongodb+srv://bishalhota264:z9WRmwxeat07DCkY@cluster0.rabcr.mongodb.net/secondBrain");

//userSchema

const UserSchema = new Schema({
    username: { type: String, unique: true }, 
    password: { type: String }              
});

// Creating a model for the 'User' collection, enabling interactions with the database
export const UserModel = model("User", UserSchema);


const ContentSchema = new Schema({
    title: String,                          
    Link: String,                           
    tags: [{ type: mongoose.Types.ObjectId, ref: "tag" }], 
    userId: [{ 
        type: mongoose.Types.ObjectId, 
        ref: "User", 
        required: true                       
    }],
});


export const ContentModel = model("Content", ContentSchema);


// Mongoose is a library that provides a schema-based solution for modeling application data
const LinkSchema = new Schema({
   
    hash: String,


    userId: { type: mongoose.Types.ObjectId, ref: 'User', required: true, unique: true },
});


export const LinkModel = model("Links", LinkSchema);