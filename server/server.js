
import express from "express"
import { connectDB } from "./config/db.js";
import CrudModel from "./models/CrudModel.js"; 

const app = express();
const PORT = 8080;

app.use(express.json())

// Datbase Configuration

connectDB()

app.get('/',(req,resp)=>{
resp.send("hiii")
})

app.post('/post',async(req,resp)=>{
 const data =new CrudModel(req.body)
 const save = await data.save()
 resp.send(save)
})

app.listen(PORT,()=>{
    console.log(`Server Running on port ${PORT}`)
})