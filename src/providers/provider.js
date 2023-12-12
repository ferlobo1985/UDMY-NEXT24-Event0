'use client'
import { NextUIProvider } from '@nextui-org/react';

export default function AppProvider(props){
    return(
        <NextUIProvider>
            {props.children}
        </NextUIProvider>
    )
}