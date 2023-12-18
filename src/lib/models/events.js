import mongoose from "mongoose";
import aggregatePaginate from 'mongoose-aggregate-paginate-v2';

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

eventSchema.plugin(aggregatePaginate)
export default mongoose.models.Event || mongoose.model('Event', eventSchema)