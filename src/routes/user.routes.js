import { Router } from "express";
import { registerUser,userInfromation,myInfromation } from "../controllers/user.controllers.js";

const router = Router()

router.route("/register").get(registerUser)
router.route("/info").post(userInfromation)
router.route("/personal").get(myInfromation)

export {router}