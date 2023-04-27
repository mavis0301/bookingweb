import { errorMessage } from "../errorMessage.js"
import User from "../models/User.js"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'


export const register = async(req,res,next) =>{
    const registerData = req.body;
    
    try{
        const registerWrong = await User.findOne({username:registerData.username}) || await User.findOne({email:registerData.email})
        
        if(registerWrong){
            return next(errorMessage(400,'此帳號已被註冊'));
        }   
        
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(registerData.password,salt);
        const newUser = new User({
            username : registerData.username,
            email : registerData.email,
            password : hash,
        })
        const saveUser = await newUser.save();
        res.status(200).json(saveUser);
    }catch(error){
        next(errorMessage(500,"註冊失敗",error));
    }
    
}

export const login = async(req,res,next) =>{
    const loginData = req.body;
    try{
        const userData = await User.findOne({username:loginData.account}) || await User.findOne({email:loginData.account});
        if( !userData ) return (next(errorMessage(404,"無此使用者")))
        const isPasswordCorrect = await bcrypt.compare(loginData.password,userData.password);
        if (!isPasswordCorrect) return next(errorMessage(404,"輸入帳號密碼錯誤"))

        const token = jwt.sign({id: userData._id, isAdmin: userData.isAdmin},process.env.JWT);

        res.cookie('JWT_token',token,{
            httpOnly:true
        }).status(200).json(`${userData.username}登入成功`);
    }catch(error){
        next(errorMessage(500,"登入失敗",error));
    }
}


