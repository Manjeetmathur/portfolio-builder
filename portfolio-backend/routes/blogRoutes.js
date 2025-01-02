import { Router } from "express";
import { verifyJwt } from "../middlewares/auth.js";
import { createBlog, getAllblogPostByUser,editBlogContent,editBlogTitle,deleteBlog  } from "../controllers/blogController.js";
const router = Router()

router.route("/create-blog").post(verifyJwt,createBlog)
router.route("/get-blogs").get(verifyJwt,getAllblogPostByUser)
router.route("/edit-blog-title").patch(verifyJwt,editBlogTitle)
router.route("/edit-blog-content").patch(verifyJwt,editBlogContent)
router.route("/delete-blog").post(verifyJwt,deleteBlog)

export default router
