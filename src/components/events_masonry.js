'use client'
import { useState } from "react"
import {
    Card,
    CardHeader,
    CardFooter,
    Divider,
    Image as UIimage,
    Button,
  } from "@nextui-org/react";
  import Link from 'next/link';
  import Masonry from "react-masonry-css";

const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1
};

export default function EventsMasonryComponent({eventShows}){
    const [events, setEvents] = useState(eventShows)


    return(
        <>
            <div className="max-w-5xl mx-auto mt-4 p-5">
                <h1 className="text-6xl antonfont py-3">Events</h1>
                <Divider className="mb-4"/>
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                >
                    


                </Masonry>

            </div>
        </>
    )
}