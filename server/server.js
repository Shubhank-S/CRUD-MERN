
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

// CREATE-DATA || POST

app.post('/create-data',async(req,resp)=>{
try {
    const data =new CrudModel(req.body)
    const save = await data.save()
    resp.send(save)
} catch (error) {
    console.log(error)
}
})

// READ-DATA || GET

app.get('/read-data',async(req,resp)=>{
 try {
    const findData = await CrudModel.find()
    resp.send(findData)
    console.log(findData)
 } catch (error) {
    console.log(error)
 }
})

// UPDATE-DATA || PUT

app.put('/update-data/:id',async(req,resp)=>{
try {
    const id = req.params.id
    const updateData = await CrudModel.findByIdAndUpdate({_id:id},req.body,{new:true})
    resp.send(updateData)
} catch (error) {
    console.log(error)
}
})

// DELETE-DATA || DELETE

app.delete('/delete-data/:id',async(req,resp)=>{
try {
    const deleteData =await CrudModel.findByIdAndDelete(req.params.id)
    resp.send(deleteData)
} catch (error) {
    console.log(error)
}
})


app.listen(PORT,()=>{
    console.log(`Server Running on port ${PORT}`)
})