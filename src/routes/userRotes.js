import { Router } from "express";
import userController from "../controllers/userController.js";


export const router = new Router()

router.post('/create', userController.createUser)
router.get('/:rfId', userController.getUser)
router.delete('/:rfId', userController.deleteUser)
router.get('/', userController.getUsers)
