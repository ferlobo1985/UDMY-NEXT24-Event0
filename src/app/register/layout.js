import {getServerSession} from 'next-auth/next'
import {options} from '@/api/auth/[...nextauth]/options'
import {redirect} from 'next/navigation'

export default async function RegisterLayout(props){
    const session = await getServerSession(options);

    if(session){
        redirect('/dashboard')
    }

    return <>{props.children}</>
}