'use client'
import { useContext, useEffect } from 'react';
import { AppContext } from '@/store/app_context'
import {Divider, Button} from '@nextui-org/react'
import Link from 'next/link'

export default function ContextPage(){
    const appCtx = useContext(AppContext);

    useEffect(()=>{
        console.log(appCtx.users)
    })


    const handleUser = () => {
        appCtx.addUser({name:'Steve'})
    }


    return(
        <>
            <h1 className='text-2xl mb-3'>The users are:</h1>
            <ul>
                { appCtx.users.map((user,index)=>(
                    <li key={`${user.name}+${index}`}>{user.name}</li>
                ))}
            </ul>
            <Divider className='mt-3'/>
            <div className='flex gap-4 items-center mt-3'>
                <Button color="primary" onClick={handleUser}>
                    Add user
                </Button>
                <Button as={Link} href="/">
                    Go home
                </Button>
            </div>
        </>
    )
}
