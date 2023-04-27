import express from "express"
import { errorMessage } from "../errorMessage.js"
import Hotel from "../models/Hotel.js"
import { createHotel, deleteHotel, getAllHotels, getHotel, updatedHotel } from "../RoutesController/hotels.js"
import { verifyAdmin } from "../JWT_Token.js"

//這邊前面的url是/api/v1/hotels
const router = express.Router()
//創建第一筆資料
router.post("/",verifyAdmin,createHotel)
//抓取第一筆資料練習
router.get("/find/:id",getHotel)
//將第一筆資料做修改練習
router.put("/:id",updatedHotel)
//刪除資料
router.delete("/:id",verifyAdmin,deleteHotel)

//抓取所有住宿資料 應為目前沒有重複api url除了post的創建一樣
//所以可以用/api/v1/hotels/ 的api url 配合get 來抓取所有住宿資料
router.get("/",getAllHotels)

export default router