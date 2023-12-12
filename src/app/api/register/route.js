import DBconnect from "@/lib/db";
import User from "@/lib/models/user";
import { passwordHash } from '@/components/utils'


export async function POST(request){
    const {email,password} = await request.json();

    await DBconnect();
    const existingUser = await User.findOne({email});

    if(existingUser) {
        return Response.json({error:"Email is already in use"},{status:500});
    }

    const hashedPass = await passwordHash(password);
    const newUser = new User({
        email,
        password: hashedPass
    });


    try {
        await newUser.save();
        return Response.json({user: newUser},{status:200})
    } catch(error){
        return Response.json({error: 'Something went wrong'},{status:500})
    }
}