'use client'
import {Navbar, NavbarBrand, NavbarContent, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Button, DropdownSection} from "@nextui-org/react";
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react'


export default function NavComponent(){
    const {data:session } = useSession();

    const logoutUser = () => {
        signOut({
            callbackUrl:'/'
        })
    }

    return(
        <Navbar
            shouldHideOnScroll
            isBordered
            className="bg-gray-900 border-b-4 border-slate-400"
        >
            <NavbarBrand>
                <Link href="/" className="text-inherit antonfont text-2xl text-white">
                    Event0
                </Link>
            </NavbarBrand>
            
            <NavbarContent as="div" justify="end">
                <Dropdown placement="bottom-end">
                    <DropdownTrigger>
                        <Button variant="bordered" className="text-white">
                            Menu
                        </Button>
                    </DropdownTrigger>

                    <DropdownMenu aria-label="User actions" variant="flat">
                        <DropdownSection>
                            { !session ?
                                <DropdownItem key="register" textValue="register">
                                    <Link href="/register">Register</Link>
                                </DropdownItem>
                            :
                                <DropdownItem key="log_out" textValue="log out" onClick={logoutUser}>
                                    Log out
                                </DropdownItem>
                            }
                        </DropdownSection>
                        { session ?  
                        <DropdownSection title="Admin actions">
                            <DropdownItem key="dashboard" textValue="dashboard">
                              <Link href="/dashboard">Dashboard</Link>
                            </DropdownItem>
                            <DropdownItem key="addevents" textValue="Add events">
                              <Link href="/dashboard/add_event">Add event</Link>
                            </DropdownItem>
                            <DropdownItem key="addvenue" textValue="Add venue">
                              <Link href="/dashboard/add_venue">Add venue</Link>
                            </DropdownItem>
                        </DropdownSection>
                        :null}
                    </DropdownMenu>
                </Dropdown>
            </NavbarContent>


        </Navbar>
    )
}