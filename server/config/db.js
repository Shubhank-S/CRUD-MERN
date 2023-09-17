import mongoose from "mongoose"

export const connectDB =async()=>{
    try {
    const connection = await mongoose.connect('mongodb://127.0.0.1:27017/MERN-CRUD-APP')
        console.log("Connected to MongoDB")
    } catch (error) {
        console.log(error)
    }
}


