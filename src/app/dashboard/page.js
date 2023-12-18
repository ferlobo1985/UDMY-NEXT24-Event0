import { getPaginatedEvents } from '@/lib/actions/actions'


export default async function DashboardPage(){
    const pagedEvents = await getPaginatedEvents(1,3);

    console.log(pagedEvents)

    return(
        <>
            Dashboard
        </>
    )
}