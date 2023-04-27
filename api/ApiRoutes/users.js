import express from "express";
import { getUser,getAllUser,updateUser,deletedUser } from "../RoutesController/user.js";
import { verifyAdmin,verifyUser } from "../JWT_Token.js";

const router = express.Router()



router.get('/:id',verifyUser,getUser);

router.get('/',verifyAdmin,getAllUser);

router.put('/:id',verifyUser,updateUser);

router.delete('/:id',verifyUser,deletedUser);

export default router