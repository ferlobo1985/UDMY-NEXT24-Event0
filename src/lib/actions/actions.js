'use server'

import DBconnect from '@/lib/db';
import Venue from '@/lib/models/venue'
import Event from '@/lib/models/events';
import { redirect, notFound } from 'next/navigation'
import { revalidatePath } from 'next/cache'

export async function findEventById(id){
    await DBconnect();
    const request = await Event.find({slug:id}).populate({path:'venue',model:Venue}).exec();

    if(!request.length > 0){
        return notFound()
    }
    return request[0];
}


export async function getPaginatedEvents(page,limit){
    await DBconnect();
    let aggQueryArray = [];
    aggQueryArray.push(
        { $lookup:
            {
                from:'venues',
                localField:'venue',
                foreignField:'_id',
                as:'venue'
            }
        },
        { $unwind:'$venue'}
    )
    let aggQuery = Event.aggregate(aggQueryArray)

    const options ={
        page,
        limit,
        sort:{_id:'desc'}
    }
    const events = await Event.aggregatePaginate(aggQuery,options);
    return JSON.parse(JSON.stringify(events))
}



export async function findEvents(skip,limit){
    try{
        await DBconnect();
        const request = await Event.find({})
        .populate({path:'venue',model:Venue})
        .sort([['_id','desc']])
        .skip(skip)
        .limit(limit);
        return request;
    } catch(error){
        throw new Error(error)
    }
}



export async function addVenue(formState, formdata){
    await DBconnect();
    try{
        const newVenue = new Venue({
            name: formdata.name,
            address: formdata.address,
            state: formdata.state,
        })
        await newVenue.save();
        // return {message:'ok'}
    } catch(error){
        return {message:error.message}
    }
    revalidatePath('/dashboard/add_event')
    redirect('/dashboard')
}