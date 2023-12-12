import GitHubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';

import DBconnect from '@/lib/db';
import User from '@/lib/models/user';
import {passwordCheck} from '@/components/utils'

export const options = {
    providers:[
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        CredentialsProvider({
            name:'Credentials',
            credentials:{
                email:{
                    label:'Email:',
                    type:'email',
                    placeholder:'Enter-you-email'
                },
                password:{
                    label:'Password:',
                    type:'password',
                }
            },
            async authorize(credentials){
                /// go to DB to sigin in 
                await DBconnect();

                const user = await User.findOne({email: credentials.email})
                if(!user){
                    return null
                }
                const validPass = await passwordCheck(credentials.password,user.password);
                if(!validPass){
                    return null;
                }

                return user;
            }
        })
    ],
    // pages: {
    //     signIn: '/auth/signin',
    //     signOut: '/auth/signout',
    //     error: '/auth/error', // Error code passed in query string as ?error=
    //     verifyRequest: '/auth/verify-request', // (used for check email message)
    //     newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
    // }
}