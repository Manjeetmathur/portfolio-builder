import { uploadOnCloudinary } from "../middlewares/multer.js";
import { Posts } from "../model/posts.js"
import { User } from "../model/user.js"

const uploadPost = async (req, res) => {

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

              const postfilePath = req.file?.path

              const postUrl = await uploadOnCloudinary(postfilePath)

              const post = await Posts.create({
                     postTitle: title,
                     "postImage.imageUrl": postUrl.secure_url,
                     "postImage.publicId": postUrl.public_id,
                     link: link || "",
                     owner: userId,
                     postDescription : desc
              })
              if(user){
                     user.posts.push(post._id)
                     await user.save()
              }
              return res.status(200).json({
                     post,
                     message: ("post uploaded successfully"),
                     success: true,
              })
       } catch (error) {
              res.json({
                     message: error.message
              })
       }

}
const getPost = async (req, res) => {

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
              const posts = await Posts.find({ owner: userId }).sort({ createdAt: -1 });

              res.status(200).json({
                     success: true,
                     message: "users posts get successfully",
                     data: posts,
              });
       } catch (error) {
              res.json({
                     success: false,
                     error: true,
                     message: error.message,
              });
       }
};
const editPostImage = async (req, res) => {
       const { postId } = req.body
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
              if (!postId) {
                     throw new Error("Post not found");

              }
              const post =await Posts.findById(postId)
              if (!post) {
                     throw new Error("Post not found");
              }
              const postfilePath = req.file?.path

              if (!postfilePath) {
                     throw new Error("file missing")
              }

              const postUrl = await uploadOnCloudinary(postfilePath)

              if (!postUrl) {
                     throw new Error("file missing")
              }

              await Posts.findByIdAndUpdate(
                     postId,
                     {
                            $set: {
                                   "postImage.imageUrl": postUrl.secure_url,
                                   "postImage.publicId": postUrl.public_id,
                            },

                     }, {
                     new: true,
              }

              )
              res.status(200).json({
                     message: "profile Updated",
                     success: true,
              })

       } catch (error) {
              res.json({
                     message: error.message,
              })
       }
}
const editPostTitle = async (req, res) => {
       const { postTitle, postId } = req.body
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
              if (!postId) {
                     throw new Error("Post not found");

              }
              const post =await Posts.findById(postId)
              if (!post) {
                     throw new Error("Post not found");
              }
              await Posts.findByIdAndUpdate(
                     postId,
                     {
                            $set: {
                                   postTitle,
                            }
                     }, { new: true }
              )

              res.status(200).json({
                     message: "profile Updated",
                     success: true,
              })

       } catch (error) {
              res.json({
                     message: error.message,
              })
       }
}
const editPostDesc = async (req, res) => {
       const { desc, postId } = req.body
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
              if (!postId) {
                     throw new Error("Post not found");

              }
              const post =await Posts.findById(postId)
              if (!post) {
                     throw new Error("Post not found");
              }
              await Posts.findByIdAndUpdate(
                     postId,
                     {
                            $set: {
                                   postDescription : desc
                            }
                     }, { new: true }
              )

              res.status(200).json({
                     message: "Post Description Updated",
                     success: true,
              })

       } catch (error) {
              res.json({
                     message: error.message,
              })
       }
}
const editPostLink = async (req, res) => {
       const { link, postId } = req.body
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
              if (!postId) {
                     throw new Error("Post not found");

              }
              const post =await Posts.findById(postId)
              if (!post) {
                     throw new Error("Post not found");
              }
              await Posts.findByIdAndUpdate(
                     postId,
                     {
                            $set: {
                                   link,
                            }
                     }, { new: true }
              )

              res.status(200).json({
                     message: "profile Updated",
                     success: true,
              })

       } catch (error) {
              res.json({
                     message: error.message,
              })
       }
}
const deletePost = async (req, res) => {
       const { postId } = req.body
       const userId = req._id
       console.log(postId,userId);
       
       try {

              if (userId === null) {
                     throw new Error("Invalid user access ")
              }
              const user = await User.findById(userId);
              // console.log(user);

              if (!user) {
                     throw new Error("Invalid user access");
              }
              if (!postId) {
                     throw new Error("Post not found");

              }
              const post =await Posts.findById(postId)
              if (!post) {
                     throw new Error("Post not found");
              }
              await Posts.findByIdAndDelete(postId)

              res.status(200).json({
                     message: "post deleted",
                     success: true
              })
       } catch (error) {
              res.json({
                     message: error.message,
              })
       }
}

export { uploadPost, getPost,  editPostImage, editPostTitle, editPostDesc,editPostLink,  deletePost  }