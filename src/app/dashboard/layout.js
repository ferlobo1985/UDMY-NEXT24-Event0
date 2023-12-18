import { getServerSession } from 'next-auth/next';
import { options } from '@/api/auth/[...nextauth]/options';
import { redirect } from 'next/navigation';

export default async function DashboardLayout(props){
    const session = await getServerSession(options);

    if(!session){
        redirect('/register')
    }

    return(
        <div className="max-w-5xl mx-auto">
            {props.children}
        </div>
    )

}