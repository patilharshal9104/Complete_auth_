import mongoose from 'mongoose'

const broadcasterSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Broadcaster name is required"],
        trim: true,
        minLength: 2,
        maxLength: 100,
    },
},{timestamps: true})


export default mongoose.model("Broadcaster", broadcasterSchema);