import mongoose from "mongoose"

const CrudSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    age:{
        type:Number,
        required:true
    }
})

export default mongoose.model('cruds',CrudSchema)