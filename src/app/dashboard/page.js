import { getPaginatedEvents } from '@/lib/actions/actions'
import DashboardTableComponent from './table';

export default async function DashboardPage(){
    const pagedEvents = await getPaginatedEvents(1,3);

    return(
        <>
            <DashboardTableComponent pagedEvents={pagedEvents}/>
        </>
    )
}