import { uploadOnCloudinary } from "../middlewares/multer.js";
import { Certificate } from "../model/certificates.js"
import { User } from "../model/user.js"

const uploadCertificate = async (req, res) => {

       const { title,link,desc} = req.body
       const userId = req._id
       try {
              if (userId === null) {
                     throw new Error("Invalid user access ")
              }
              const user = await User.findById(userId);
              // console.log(user);

              if (!user) {
                     throw new Error("Invalid user access");
              }

              if (!title ) {
                     throw new Error("All Fields are required")
              }
              if (!desc ) {
                     throw new Error("All Fields are required")
              }

              const certificatefilePath = req?.file?.path
              // console.log(postfilePath)

              const certificateUrl = await uploadOnCloudinary(certificatefilePath)
              // console.log(postUrl)

              const certificate = await Certificate.create({
                     certificateTitle: title,
                     certificateImage: certificateUrl.secure_url,
                     link: link || "",
                     owner: userId,
                     certificateDescription : desc
              })
              
                     user.certificates.push(certificate._id)
                     await user.save()
             
              return res.status(200).json({
                     certificate,
                     message: ("Certificate uploaded successfully"),
                     success: true,
              })
       } catch (error) {
              res.json({
                     message: error.message
              })
       }

}
const getCertificate = async (req, res) => {

       const userId = req.query;
       try {
              if (userId === null) {
                     throw new Error("Invalid user access ")
              }
              const user = await User.findById(userId);
              // console.log(user);

              if (!user) {
                     throw new Error("Invalid user access");
              }
              const certificates = await Certificate.find({ owner: userId }).sort({ createdAt: -1 });

              res.status(200).json({
                     success: true,
                     message: "users certificate get successfully",
                     data: certificates,
              });
       } catch (error) {
              res.json({
                     success: false,
                     error: true,
                     message: error.message,
              });
       }
};
const editCertificateImage = async (req, res) => {
       const { certificateId } = req.body
       const userId = req._id
       try {
              if (userId === null) {
                     throw new Error("Invalid user access ")
              }
              const user = await User.findById(userId);
              // console.log(user);

              if (!user) {
                     throw new Error("Invalid user access");
              }
              if (!certificateId) {
                     throw new Error("certificate not found");

              }
              const certificate =await Certificate.findById(certificateId)
              if (!certificate) {
                     throw new Error("certificate not found");
              }
              const certificatefilePath = req.file?.path

              if (!certificatefilePath) {
                     throw new Error("file missing")
              }

              const postUrl = await uploadOnCloudinary(certificatefilePath)

              if (!postUrl) {
                     throw new Error("file missing")
              }

              await Certificate.findByIdAndUpdate(
                     certificateId,
                     {
                            $set: {
                                   certificateImage: postUrl.secure_url,
                                  
                            },

                     }, {
                     new: true,
              }

              )
              res.status(200).json({
                     message: "certificate image Updated",
                     success: true,
              })

       } catch (error) {
              res.json({
                     message: error.message,
              })
       }
}
const editCertificateTitle = async (req, res) => {
       const { title, certificateId } = req.body
       try { 
              if (!certificateId) {
                     throw new Error("certificate not found");

              }
              const certificate =await Certificate.findById(certificateId)
              if (!certificate) {
                     throw new Error("certificate not found");
              }
              if(!title){
                     throw new Error("Title required")
              }
              await Certificate.findByIdAndUpdate(
                     certificateId,
                     {
                            $set: {
                                   certificateTitle:title,
                            }
                     }, { new: true }
              )

              res.status(200).json({
                     message: "certificate title Updated",
                     success: true,
              })

       } catch (error) {
              res.json({
                     message: error.message,
              })
       }
}
const editCertificateDesc = async (req, res) => {
       const { desc, certificateId } = req.body
       const userId = req._id
       try {
              if (userId === null) {
                     throw new Error("Invalid user access ")
              }
              const user = await User.findById(userId);
              // console.log(user);

              if (!user) {
                     throw new Error("Invalid user access");
              }
              if (!certificateId) {
                     throw new Error("certificate not found");

              }
              if(!desc){
                     throw new Error("description required")
              }
              const post =await Certificate.findById(certificateId)
              if (!post) {
                     throw new Error("certificate not found");
              }
              await Certificate.findByIdAndUpdate(
                     certificateId,
                     {
                            $set: {
                                   certificateDescription : desc
                            }
                     }, { new: true }
              )

              res.status(200).json({
                     message: "certificate Description Updated",
                     success: true,
              })

       } catch (error) {
              res.json({
                     message: error.message,
              })
       }
}
const editCertificateLink = async (req, res) => {
       const { link, certificateId } = req.body
       const userId = req._id
       try {
              if (userId === null) {
                     throw new Error("Invalid user access ")
              }
              const user = await User.findById(userId);
              // console.log(user);

              if (!user) {
                     throw new Error("Invalid user access");
              }
              if (!certificateId) {
                     throw new Error("certificate not found");

              }
              const post =await Certificate.findById(certificateId)
              if (!post) {
                     throw new Error("certificate not found");
              }
              if(!link){
                     throw new Error("Link required")
              }
              await Certificate.findByIdAndUpdate(
                     certificateId,
                     {
                            $set: {
                                   link,
                            }
                     }, { new: true }
              )

              res.status(200).json({
                     message: "certificate link Updated",
                     success: true,
              })

       } catch (error) {
              res.json({
                     message: error.message,
              })
       }
}
const deleteCertificate = async (req, res) => {
       const { certificateId } = req.body
       const userId = req._id
       console.log(certificateId,userId);
       
       try {

              if (userId === null) {
                     throw new Error("Invalid user access ")
              }
              const user = await User.findById(userId);
              // console.log(user);

              if (!user) {
                     throw new Error("Invalid user access");
              }
              if (!certificateId) {
                     throw new Error("Certificate not found");

              }
              user.posts = user.posts.filter(item => item.id.toString() !== certificateId)
              await user.save()
              const post =await Certificate.findById(certificateId)
              if (!post) {
                     throw new Error("Certificate not found");
              }
              await Certificate.findByIdAndDelete(certificateId)



              res.status(200).json({
                     message: "Certificate deleted",
                     success: true
              })
       } catch (error) {
              res.json({
                     message: error.message,
              })
       }
}

export { uploadCertificate, getCertificate,  editCertificateDesc, editCertificateTitle, editCertificateLink,editCertificateImage,  deleteCertificate  }