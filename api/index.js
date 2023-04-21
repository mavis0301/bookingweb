import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import hotelsApiRoute from "./ApiRoutes/hotels.js"
import authApiRoute from "./ApiRoutes/auth.js"
import roomsApiRoute from "./ApiRoutes/rooms.js"
import usersApiRoute from "./ApiRoutes/users.js"

const app = express()
dotenv.config()
const port = 5000

const connect = async() => {
    try{
        await mongoose.connect(process.env.MONGODB)
            console.log("Connected to mongoDB")
    }
    catch(error){
        console.log("disconnected to mongoDB")
    }
}

mongoose.connection.on("connected",()=>{
    console.log("MongoDB connected!")
})
mongoose.connection.on("disconnected",()=>{
    console.log("MongoDB disconnected!")
})


app.listen(port, () => {
    connect();
    console.log(`connected to ${port} backend`)
})

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.use(express.json())

app.use('/api/v1/hotels',hotelsApiRoute)
app.use('/api/v1/auth',authApiRoute)
app.use('/api/v1/rooms',roomsApiRoute)
app.use('/api/v1/users',usersApiRoute)

