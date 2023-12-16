import mongoose from "mongoose";

const venueSchema = new mongoose.Schema({
    name:{
        type:String,
        unique:true,
        required:'Missing name'
    },
    address:{
        type:String,
        required:'Missing address'
    },
    state:{
        type:String,
        required:'Missing state'
    }
})

export default mongoose.models.Venue || mongoose.model('Venue', venueSchema)