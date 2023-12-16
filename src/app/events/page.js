'use client'
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';


export default function PostsPage(){
    const { data: session, status } = useSession({
        required:true,
        onUnauthenticated(){
            redirect('/api/auth/signin?callback=/dashboard')
        }
    });

    // console.log(session)

    return(
        <>
            { status !== "authenticated" ?
                <p>NOT auth</p>
                :
                <p>Welcome user</p>
            }
        </>
    )
}