'use client'
import { addVenue } from '@/lib/actions/actions'
import { Input, Button, Divider, Select, SelectItem } from "@nextui-org/react";
import { states } from '@/components/states';
import { errorHelper } from '@/components/utils'

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useFormState } from 'react-dom'


export default function AddVenueComponent(){
    const initialState = {message: null};
    const [state, formAction] = useFormState(addVenue,initialState)

    const formik =  useFormik({
        initialValues:{
            name:'',
            address:'',
            state:''
        },
        validationSchema: Yup.object({
            name:Yup.string().required('Sorry the name is required'),
            address:Yup.string().required('Sorry the address is required'),
            state:Yup.string().required('Sorry the state is required')
        }),
        onSubmit: async (values) =>{
            formAction(values)
        }
    })

    return(
        <form className="max-w-2xl mx-auto" onSubmit={formik.handleSubmit}>
           <h1 className="text-2xl py-5">Add venue</h1>
           <Divider className="mb-5"/>

            <Input
                className="mb-5"
                type="text"
                label="Venue name"
                variant="bordered"
                fullWidth={true}
                {...formik.getFieldProps("name")}
                {...errorHelper(formik,"name")}
            />

            <Input
                className="mb-5"
                type="text"
                label="Address"
                variant="bordered"
                fullWidth={true}
                {...formik.getFieldProps("address")}
                {...errorHelper(formik,"address")}
            />

            <Select
                items={states}
                label="State"
                placeholder="Select the state"
                fullWidth={true}
                className="mb-5"
                {...formik.getFieldProps("state")}
                {...errorHelper(formik,"state")}
            >
                {(state)=><SelectItem key={state.name}>{state.name}</SelectItem>}
            </Select>

            <Button color="secondary" variant="solid" type="submit">
                Add venue
            </Button>

            { state?.message ?
                <div className='my-5 text-red-600'>
                    {state.message}
                </div>
            :null}
        </form>
    )
}