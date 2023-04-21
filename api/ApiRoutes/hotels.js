import express from "express";
import Hotel from "../models/Hotel.js"

const router = express.Router()

router.get('/',(req,res) =>{
    res.send("this is hotelsApi End points")
})

router.get("/find/:id",async(req,res)=>{
    const id = req.params.id;
    try{
        const getHotel = await Hotel.findById(id)
        res.status(200).json(getHotel)
    }catch (error){
        res.status(500).json(error)
    }
})

router.post('/',async(req,res)=>{
    const newHotel = new Hotel(req.body)
    try{
        const saveHotel = await newHotel.save()
        res.status(200).json(saveHotel)
    } catch (error){
        res.status(500).json(error)
    }
})

router.put("/:id",async(req,res)=>{
    const id = req.params.id;
    const body = req.body
    try{
       const updatedHotel = await Hotel.findByIdAndUpdate(id,{$set:body},{new:true})
        res.status(200).json(updatedHotel)
    }catch(error){
        res.status(500).json(error)
    }
})

router.delete("/:id",async(req,res)=>{
    const id = req.params.id;
    try{
        await Hotel.findByIdAndDelete(id)
        res.status(200).json("刪除資料成功")
    }catch(error){
        res.status(500).json(error)
    }
})
export default router
