import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
    artist:String,
    venue:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Venue',
        required:true
    },
    description:String,
    date:Date,
    slug:{
        type:String,
        unique:true,
        index: true,
        required:true
    }
})

export default mongoose.models.Event || mongoose.model('Event', eventSchema)