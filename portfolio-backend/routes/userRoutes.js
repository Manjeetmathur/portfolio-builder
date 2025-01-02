import { Router } from "express";
import { upload } from "../middlewares/multer.js";
import { allInfo, getUserinfo, login, logout,register,updateEmail,updateface,updategit,updateImage, updateinsta, updatelinked, updateName, updatePhoneNumber, updateProfession, updateResume, updateUserDesc, updateUserName, updateUserTitle, uploadDetails } from "../controllers/userController.js";
import { verifyJwt } from "../middlewares/auth.js";
const router = Router();

router.route("/register").post(register)
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/upload-details").post(verifyJwt,
       upload.fields(
              [
                     { name: "profile" },
                     { name: "resume" }
              ]
       ),
       uploadDetails
);
router.route("/user-info").get(verifyJwt,getUserinfo);
router.route("/all-info/:id").get(allInfo);
router.route("/update-image").patch(verifyJwt,upload.single("profile"),updateImage)
router.route("/update-resume").patch(verifyJwt,upload.single("resume"),updateResume)
router.route("/update-name").patch(verifyJwt,updateName)
router.route("/update-email").patch(verifyJwt,updateEmail)
router.route("/update-user-title").patch(verifyJwt,updateUserTitle)

router.route("/update-user-desc").patch(verifyJwt,updateUserDesc)
router.route("/update-user-phone").patch(verifyJwt,updatePhoneNumber)
router.route("/update-user-profession").patch(verifyJwt,updateProfession)
router.route("/update-linkedin").patch(verifyJwt,updatelinked)
router.route("/update-git").patch(verifyJwt,updategit)
router.route("/update-face").patch(verifyJwt,updateface)
router.route("/update-insta").patch(verifyJwt,updateinsta)


export default router

