import { findEventById } from '@/lib/actions/actions'

export default async function EventPage(props){
    const eventID = props.params.id;
    const event = await findEventById(eventID);

    console.log(event)

    return(
        <>
            event
        </>
    )
}