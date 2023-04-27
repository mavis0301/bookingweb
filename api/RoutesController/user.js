import { errorMessage } from "../errorMessage.js";
import User from "../models/User.js";
import bcrypt from "bcryptjs";

export const getUser = async(req,res,next) =>{
    const id = req.params.id;
    try{
        const findUser = await User.findById(id);
        res.status(200).json(findUser);
    }catch(error){
        next(errorMessage(500,"讀取用戶失敗"));
    }
}

export const getAllUser = async(req,res,next) =>{
    try{
        const findUser = await User.find();
        res.status(200).json(findUser);
    }catch(error){
        next(errorMessage(500,"讀取用戶失敗"));
    }
}

export const updateUser = async(req,res,next) =>{
    const id = req.params.id;
    try{
        const update = await User.findByIdAndUpdate(id,{$set:req.body},{new:true});
        res.status(200).json(update);
    }catch(error){
        next(errorMessage(500,"更改用戶失敗",error));
    }
}

export const deletedUser = async (req, res, next) => {
    const id = req.params.id;
    try{
        await User.findByIdAndDelete(id)
        res.status(200).json("用戶成功刪除")
    } catch (error) {
        next(errorMessage(500,"刪除用戶失敗",error))
    }
}