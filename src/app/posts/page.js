import { options } from '@/api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth/next'
import { redirect } from 'next/navigation'

export default async function PostsPage(){
    const session = await getServerSession(options);

    // if(!session){
    //     redirect('/api/auth/signin?callbackUrl=/dashboard')
    // }

    return(
        <>
            { !session ?
                <p>NOT auth</p>
                :
                <p>Welcome user</p>
            }
        </>
    )
}