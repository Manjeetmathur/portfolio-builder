import { Router } from "express";
import { verifyJwt } from "../middlewares/auth.js";
import { deletePost,  editPostDesc,  editPostImage, editPostLink,  editPostTitle, getPost, uploadPost } from "../controllers/postController.js";
import { upload } from "../middlewares/multer.js";
const router = Router()

router.route("/upload-post").post(verifyJwt,upload.single("postImage"), uploadPost)
router.route("/get-post/:id").get( getPost)
router.route("/edit-post-image").patch(verifyJwt, upload.single("postImage"), editPostImage)
router.route("/edit-post-title").patch(verifyJwt, editPostTitle)
router.route("/edit-post-desc").patch(verifyJwt, editPostDesc)
router.route("/edit-post-link").patch(verifyJwt, editPostLink)
router.route("/delete-post").post(verifyJwt, deletePost)

export default router
