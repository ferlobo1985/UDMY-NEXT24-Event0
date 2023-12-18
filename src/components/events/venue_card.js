'use client'
import {
    Card,
    CardHeader,
    CardBody,
    Divider
  } from "@nextui-org/react";

export default function VenueCardComponent({venueData}){

    return(
        <>
            <Divider/>
            <Card className="max-w-[400px] bg-slate-200 mt-5">
                <CardHeader className="flex gap-3">
                    <div className="flex flex-col">
                        <p className="text-small">Venue information</p>
                        <p className="text-xl">{venueData.name}</p>
                    </div>
                </CardHeader>
                <Divider/>
                <CardBody>
                    <p>{venueData.address}, {venueData.state}</p>
                </CardBody>
            </Card>
        </>
    )

}