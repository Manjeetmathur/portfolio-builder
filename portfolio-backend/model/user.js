import mongoose from "mongoose"

const userSchema = mongoose.Schema({
       name : {
              type : String,
              required:true,
       },
       email : {
              type : String,
              unique : true,
              required:true
       },
       password : {
              type : String,
              required:true
       },
       phonenumber : {
              type : String,
              // required:true
              default : ''
       },
       profession:{
              type:String,
              // required:true,
              default : ''
       },
       title : {
              type:String,
              // required:true
              default : ''
       },
       description : {
              type : String,
              default : ''
              // required:true
       },
       profile: {
              imageUrl:{
                     type:String,
                     default : ''
              },
              publicId : {
                     type:String,
                     default : ''
              },
       },
       resume: {
             type : String,
       },
       linkedinlink:{
              type:String,
              default : ''
       },
       githublink:{
              type:String,
              default : ''
       },
       instagramlink:{
              type:String,
              default : ''
       },
       facebooklink:{
              type:String,
              default : ''
       },
       posts :[ {
              type : mongoose.Schema.Types.ObjectId,
              ref : 'Posts'
       }],
       blogs :[ {
              type : mongoose.Schema.Types.ObjectId,
              ref : 'Blog'
       }],
},
{
       timestamps : true
})

export const User = mongoose.model("User",userSchema)