import GitHubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';


export const options = {
    providers:[
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
                /// go to DB to sigin in or register
                const user = {
                    id:98761,
                    email:'francis@gmail.com',
                    password:'testing123'
                }

                if(credentials?.email === user.email && credentials?.password === user.password){
                    return user;
                } else {
                    return null;
                }
            }
        })
    ]
}