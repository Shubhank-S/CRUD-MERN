
import express from "express"
import mongoose from "mongoose";

const app = express();
const PORT = 8080;

const connectDB =async()=>{
    try {
    const connection = await mongoose.connect('mongodb://127.0.0.1:27017/MERN-CRUD-APP')
        console.log("Connected to MongoDB")
    } catch (error) {
        console.log(error)
    }
}
connectDB();

app.listen(PORT,()=>{
    console.log(`Server Running on port ${PORT}`)
})