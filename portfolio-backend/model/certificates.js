import mongoose from "mongoose";

const CertificateSchema = new mongoose.Schema({ 
       certificateTitle : {
              type : String
       },
       certificateDescription : {
              type : String
       },
       certificateImage : {
              type:String
       },
       link:{
              type:String,
              default:""
       },
       owner : {
             type: mongoose.Schema.Types.ObjectId,
             ref : "User"
       }
 })

export const Certificate = mongoose.model("Certificate",CertificateSchema)
