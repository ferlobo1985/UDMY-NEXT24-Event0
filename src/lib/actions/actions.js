'use server'

import DBconnect from '@/lib/db';
import Venue from '@/lib/models/venue'
import Event from '@/lib/models/events';
import { redirect, notFound } from 'next/navigation'
import { revalidatePath } from 'next/cache'

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