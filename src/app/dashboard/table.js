'use client'
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination } from "@nextui-org/react";
import { useState } from "react";
import { getPaginatedEvents } from '@/lib/actions/actions'

export default function DashboardTableComponent({pagedEvents}){
    const [state,setState] = useState(pagedEvents)
    const getNewPage = async(page)=>{
        const response = await getPaginatedEvents(page,3);
        setState(response)
    }

    return(
        <Table
            aria-label="Events pagination table"
            bottomContent={
                <div className="flex w-full justify-center">
                    <Pagination
                        isCompact
                        showControls
                        showShadow
                        color="secondary"
                        page={state.page}
                        total={state.totalPages}
                        onChange={(page)=> getNewPage(page)}
                    />
                </div>
            }
            classNames={{
                wrapper:"min-h-[222px]"
            }}
        >
            <TableHeader>
                <TableColumn key="artist">Artist</TableColumn>
                <TableColumn key="venue">Venue</TableColumn>
                <TableColumn key="date">Date</TableColumn>
            </TableHeader>
            <TableBody>
                { state.docs.map(item =>(
                    <TableRow key={item._id}>
                        <TableCell>{item.artist}</TableCell>
                        <TableCell>{item.venue.name}</TableCell>
                        <TableCell>{item.date}</TableCell>
                    </TableRow>
                ))}
            </TableBody>

        </Table>
    )

}