
import { User } from "../model/user.js"
import { Blog } from "../model/blog.js"

const createBlog = async (req, res) => {
       const { content, title } = req.body
       const userId = req._id
       try {
              if (!userId) {
                     throw new Error("invalid User Access . . .")
              }

              const user = await User.findById(userId)

              if (!user) {
                     throw new Error("invalid user Access . . .")
              }

              if (!title || !content) {
                     throw new Error("All fields are required . . . ")
              }

              const blog = await Blog.create({
                     owner: userId,
                     title,
                     content
              })
              user.blogs.push(blog._id)
              user.save()
              return res.status(200).json({
                     message: "blog created successfully",
                     success: true,
                     blog
              })
       } catch (error) {
              return res.json({
                     message: error.message,
              })
       }
}
const getAllblogPostByUser = async (req, res) => {
       const userId = req._id;
       try {
              const allBlog = await Blog.find({ owner: userId });
              return res.status(200).json({
                     success: true,
                     data: allBlog,
                     message: "blog posts fetched successfully."
              });
       } catch (error) {
              return res.status(500).json({
                     success: false,
                     message: error.message
              });
       }
};

const editBlogTitle = async (req, res) => {
       const { blogTitle, blogId } = req.body
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
              if (!blogId) {
                     throw new Error("Post not found");

              }
              const blog =await Blog.findById(blogId)
              if (!blog) {
                     throw new Error("Post not found");
              }
              await Blog.findByIdAndUpdate(
                     blogId,
                     {
                            $set: {
                                   title : blogTitle,
                            }
                     }, { new: true }
              )

              res.status(200).json({
                     message: "Blog Title Updated",
                     success: true,
              })

       } catch (error) {
              res.json({
                     message: error.message,
              })
       }
}
const editBlogContent = async (req, res) => {
       const { blogContent, blogId } = req.body
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
              if (!blogId) {
                     throw new Error("Post not found");

              }
              const blog =await Blog.findById(blogId)
              if (!blog) {
                     throw new Error("Post not found");
              }
              await Blog.findByIdAndUpdate(
                     blogId,
                     {
                            $set: {
                                   content : blogContent,
                            }
                     }, { new: true }
              )

              res.status(200).json({
                     message: "Blog Content Updated",
                     success: true,
              })

       } catch (error) {
              res.json({
                     message: error.message,
              })
       }
}
const deleteBlog = async (req, res) => {
       const {  blogId } = req.body
       console.log(blogId);
       
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
              if (!blogId) {
                     throw new Error("Post not found");

              }
              const blog = await Blog.findById(blogId)
              if (!blog) {
                     throw new Error("Post not found");
              }
              await Blog.findByIdAndDelete(blogId)

              res.status(200).json({
                     message: "Blog deleted",
                     success: true,
              })

       } catch (error) {
              res.json({
                     message: error.message,
              })
       }
}



export { createBlog, getAllblogPostByUser,editBlogContent,editBlogTitle,deleteBlog }