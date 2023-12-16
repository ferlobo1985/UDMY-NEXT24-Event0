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

export default function EventsMasonryComponent({eventShows,loadMore}){
    const [events, setEvents] = useState(eventShows);
    const [loadButton, setLoadButton ] =  useState(true)
    const randHeight = (number) =>{
        // even
        if( number % 2 === 0) { return 200}
        // odd
        return 300;
    }

    const moreHandler = async()=>{
        setLoadButton(false);
        const newEvents = await loadMore(events.length,3);

        if( newEvents.length === 0){
            setLoadButton(false);
        } else{
            setLoadButton(true);
            setEvents( prevState => {
                return [...prevState,...newEvents]
            })
        }
    }

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
                    { events?.map((event,index)=>(
                    <Card
                        key={`${event._id}+${index}`}
                        isFooterBlurred
                        className="w-full min-h-200 col-span-12 sm:col-span-7"
                    >   
                        <CardHeader className="absolute z-10 top-0 flex-col items-start bg-black/40">
                            <p className="text-tiny text-white/60 uppercase font-bold">
                                {event.venue.name}
                            </p>
                            <h4 className="text-white/90 font-medium text-xl">
                                {event.artist}
                            </h4>
                        </CardHeader>
                        <UIimage
                            isZoomed={true}
                            isBlurred={true}
                            removeWrapper
                            alt="Card background"
                            className="z-0 w-full h-full object-cover"
                            src={`http://picsum.photos/200/${randHeight(index)}?${index}`}
                        
                        />
                        <CardFooter className="absolute bg-black/40 bottom-0 z-10">
                            <Button radius="full" size="sm" as={Link} href={`/events/${event.slug}`}>
                                Go to event
                            </Button>
                        </CardFooter>
                    </Card>
                    ))}
                </Masonry>
                <Divider className="mb-5"/>
                { loadButton ?
                <Button color="primary" variant="ghost" size="lg" onClick={moreHandler}>
                    Load more
                </Button>
                :null}

            </div>
        </>
    )
}