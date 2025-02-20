import { Router } from "express";
import { verifyJwt } from "../middlewares/auth.js";

import { upload } from "../middlewares/multer.js";
import { deleteCertificate, editCertificateDesc, editCertificateImage, editCertificateLink, editCertificateTitle, getCertificate, uploadCertificate } from "../controllers/certificateController.js";
const router = Router()

router.route("/upload-certificate").post(verifyJwt,upload.single("certificateImage"), uploadCertificate)
// router.route("/get-certificate").get(verifyJwt,getCertificate)
router.route("/edit-certificate-image").patch(verifyJwt, upload.single("certificateImage"), editCertificateImage)
router.route("/edit-certificate-title").patch(verifyJwt, editCertificateTitle)
router.route("/edit-certificate-desc").patch(verifyJwt, editCertificateDesc)
router.route("/edit-certificate-link").patch(verifyJwt, editCertificateLink)
router.route("/delete-certificate").post(verifyJwt, deleteCertificate)

export default router
