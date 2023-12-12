'use client'
import {NextUIProvider} from "@nextui-org/react";

export default function Provider(props){
    return <NextUIProvider>{props.children}</NextUIProvider>  
}