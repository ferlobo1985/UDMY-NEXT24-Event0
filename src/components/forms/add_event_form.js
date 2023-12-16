'use client'
import { Input, Button, Divider, Select, SelectItem, Textarea } from "@nextui-org/react";
import { errorHelper } from '@/components/utils'

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useFormState } from 'react-dom'

export default function AddEventComponent({venuesList}){

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
            console.log(value)
        }
    })


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
                    <SelectItem key={`${venue._id}+${index}`}>
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


        </form>
    )
}