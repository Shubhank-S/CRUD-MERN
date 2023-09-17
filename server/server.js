
import express from "express"
import { connectDB } from "./config/db.js";
import CrudModel from "./models/CrudModel.js"; 

const app = express();
const PORT = 8080;

connectDB()

app.listen(PORT,()=>{
    console.log(`Server Running on port ${PORT}`)
})