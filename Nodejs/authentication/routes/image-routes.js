import { Router } from "express"
import {authMiddleWare} from "../middlwares/authMiddleware.js"
import {isAdminUser} from "../middlwares/adminMiddleware.js"
import uploadMiddleware from "../middlwares/uploadMiddleware.js"
import { deleteImageController, fetchImagesController, uploadImage,  } from "../controllers/image-controller.js"

const router = Router()

router.post('/upload',authMiddleWare,isAdminUser,uploadMiddleware.single('image'),uploadImage )

router.get('/get',authMiddleWare, isAdminUser ,fetchImagesController)
router.delete('/delete', authMiddleWare,isAdminUser,deleteImageController)
export default router
