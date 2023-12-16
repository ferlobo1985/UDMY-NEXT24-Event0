'use client'
import { forwardRef, useEffect, useState } from 'react'
import { Input, Button, Divider, Select, SelectItem, Textarea } from "@nextui-org/react";
import { errorHelper } from '@/components/utils'

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useFormState } from 'react-dom'
import { redirect } from 'next/navigation';

export default function AddEventComponent({venuesList,postEvent}){
    const initialState = {message: null};
    const [state, formAction] = useFormState(postEvent,initialState)

    const [startDate, setStartDate] = useState(null);

    const formik = useFormik({
        initialValues:{
            artist:"",
            venue:"",
            description:"",
            date:"",
            slug:""
        },
        validationSchema: Yup.object({
            artist:Yup.string().required('Sorry the artist is required'),
            venue:Yup.string().required('Sorry the venue is required'),
            description:Yup.string().required('Sorry the description is required'),
            date:Yup.string().required('Sorry the date is required'),
            slug:Yup.string().required('Sorry the slug is required'),
        }),
        onSubmit: async(value)=>{
            formAction(value)
        }
    })

    useEffect(()=>{
        if(state?.message === 'ok'){
            alert('good job')
            redirect('/dashboard')
        }
    },[state])



    return(
        <form className="max-w-2xl mx-auto" onSubmit={formik.handleSubmit}>
            <h1 className="text-2xl py-5">Add Event</h1>
            <Divider className="mb-5"/>

            <Input
                className="mb-5"
                type="text"
                label="Artist name"
                variant="bordered"
                fullWidth={true}
                {...formik.getFieldProps("artist")}
                {...errorHelper(formik,"artist")}
            />

            <Select
                label="Venue"
                placeholder="Select a venue"
                fullWidth={true}
                className="mb-5"
                {...formik.getFieldProps("venue")}
                {...errorHelper(formik,"venue")}
            >
                { venuesList?.map((venue, index)=>(
                    <SelectItem key={`${venue._id}`}>
                        {venue.name}
                    </SelectItem>
                ))}
            </Select>

            <Divider className="mb-5"/>

            <Textarea
                label="Venue"
                className="mb-5"
                placeholder="Enter your description"
                variant="bordered"
                fullWidth={true}
                {...formik.getFieldProps("description")}
                {...errorHelper(formik,"description")}
            />

            <DatePicker 
                selected={startDate} 
                showTimeSelect
                dateFormat="MMMM d, yyyy h:mm aa"
                onChange={(date)=>{
                    formik.setFieldValue('date',date,true)
                    setStartDate(date)
                }}
               customInput={<CustomPickerButton formik={formik}/>}
            />

            <Divider className="mb-5"/>

            <Input
                className="mb-5"
                type="text"
                label="Slug"
                fullWidth={true}
                {...formik.getFieldProps("slug")}
                {...errorHelper(formik,"slug")}
            />

            <Button color="secondary" variant="solid" type="submit">
                Add Event
            </Button>

            { state?.message && state?.message !== 'ok' ?
                <div className='my-5 text-red-600'>
                    {state.message}
                </div>
            :null}


        </form>
    )
}


const CustomPickerButton = forwardRef(({value, onClick,formik},ref)=>(
    <>
        <Button
            color={formik.errors.date && formik.touched.date ? 'danger':'primary'}
            variant='bordered'
            className='mb-5'
            onClick={onClick}
            ref={ref}
        >
            {value ? value:'Enter an event date'}
        </Button>
        { formik.errors.date && formik.touched.date ?
            <span className='text-xs text-red-600 ml-5'>
                {formik.errors.date}
            </span>
        :null}
    </>
))

CustomPickerButton.displayName = "CustomPickerButton"