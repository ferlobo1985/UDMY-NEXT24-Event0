'use client'
import { SessionProvider } from 'next-auth/react'

export default function AuthProvider(props){
    return(
        <SessionProvider>
            {props.children}
        </SessionProvider>
    )
}