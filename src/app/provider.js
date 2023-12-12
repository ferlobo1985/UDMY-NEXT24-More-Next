'use client'
import {NextUIProvider} from "@nextui-org/react";
import { AppContextProvider } from '@/store/app_context'

export default function Provider(props){
    return (
    <AppContextProvider>
        <NextUIProvider>
            {props.children}
        </NextUIProvider> 
    </AppContextProvider>
    )
}