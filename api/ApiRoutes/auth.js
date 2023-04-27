import express from "express";
import { register } from "../RoutesController/auth.js";
import { login } from "../RoutesController/auth.js";
const router = express.Router()

router.get('/',(req,res) =>{
    res.send("this is authApi End points")
})

router.post('/register',register);

router.post('/login',login);

export default router