'use client'

import {useState} from 'react'
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Button} from "@nextui-org/react";
import Link from 'next/link'

export default function Nav(){
    const [isMenuOpen,setIsMenuOpen] = useState(false)

    const menuItems = [
        "Profile",
        "Dashboars",
        "Activity",
        "Log out"
    ]


    return(
       <Navbar
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
       >

         {/* start mobile */}
         <NavbarContent className='sm:hidden' justify='start'>
           <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu":"Open menu"}/>
         </NavbarContent>

        <NavbarContent className='sm:hidden pr-3' justify='center'>
            <NavbarBrand>
                <p className='font-bold text-inherit'>MYAPP</p>
            </NavbarBrand>
        </NavbarContent>

        {/* end mobile */}

        <NavbarContent className='hidden sm:flex gap-4' justify='center'>
            <NavbarBrand>
                <p className='font-bold text-inherit'>MYAPP</p>
            </NavbarBrand>
            <NavbarItem>
                <Link href="/profile" aria-current="profile">
                    Profile
                </Link>
            </NavbarItem>
            <NavbarItem >
                <Link href="/addcar" aria-current="addcar">
                    Add car
                </Link>
            </NavbarItem>
            <NavbarItem >
                <Link href="/adduser" aria-current="aduser">
                    Add user
                </Link>
            </NavbarItem>
            <NavbarItem isActive>
                <Link href="/context" aria-current="context">
                    Context
                </Link>
            </NavbarItem>
        </NavbarContent>


        <NavbarContent justify='end'>
            <NavbarItem>
                <Button as={Link} color='warning' href='/signup' variant='flat'>
                    Sign up
                </Button>
            </NavbarItem>
        </NavbarContent>


        <NavbarMenu>
            { menuItems.map((item,index)=>(
                <NavbarMenuItem key={`${item}-${index}`}>
                    <Link
                        className='w-full'
                        href={`/${item}`}
                    >
                        {item}
                    </Link>
                </NavbarMenuItem>
            ))}
        </NavbarMenu>
       </Navbar>
    )
}