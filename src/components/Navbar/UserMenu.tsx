"use client";

import { AiOutlineMenu } from "react-icons/ai"
import UserAvatar from "../UserAvatar"
import { useState, useCallback } from "react";
import MenuItems from "./MenuItems";
import useRegisterModal from "@/hooks/useRegisterModal";
import useLoginModal from "@/hooks/useLoginModal";
import { User } from "@prisma/client";
import { signOut } from "next-auth/react"

interface UserMenuProps {
    currentUser?: User | null;
}

const UserMenu: React.FC<UserMenuProps> = ({
    currentUser
}) => {

    const registerModal = useRegisterModal();
    const loginModal = useLoginModal();

    // Menu Modal 
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = useCallback(() => {
        setIsMenuOpen((value) => !value)
    }, [])

    return (
        <div className='relative'>
            <div
                onClick={() => { }}
                className='w-full flex flex-row justify-center items-center gap-3'>
                <div className='hidden md:block text-sm font-medium text-gray-500 py-2 px-3 hover:bg-neutral-100 transition cursor-pointer rounded-full'>
                    Add your space
                </div>

                <div
                    onClick={toggleMenu}
                    className='flex flex-row justify-center items-center gap-2 border border-gray-300 p-2 md:px-2.5 md:py-1 rounded-full transition cursor-pointer'>
                    <AiOutlineMenu />
                    <div className="hidden md:block">
                        <UserAvatar />
                    </div>
                </div>
            </div>


            {isMenuOpen && (
                <div className="absolute top-16 sm:top-20 right-0 flex flex-col px-2 py-1 border-t border-t-gray-200 shadow-inset-md rounded-xl w-[40vw] md:w-3/4 shadow-md cursor-pointer overflow-hidden">
                    {currentUser ? (
                        <>
                            <MenuItems
                                onClick={() => {}}
                                MenuLabel="My trips"
                            />
                            <MenuItems
                                onClick={() => {}}
                                MenuLabel="My favorites"
                            />
                            <MenuItems
                                onClick={() => {}}
                                MenuLabel="My Reservations"
                            />
                            <MenuItems
                                onClick={() => {}}
                                MenuLabel="My Properties"
                            />
                            <MenuItems
                                onClick={() => {}}
                                MenuLabel="Bunkr my space"
                            />
                            <hr />
                            <MenuItems
                                onClick={() => signOut()}
                                MenuLabel="Logout"
                            />
                        </>
                    ) : 
                    <>
                        <MenuItems
                            onClick={loginModal.onOpen}
                            MenuLabel="Log in"
                        />
                        <MenuItems
                            onClick={registerModal.onOpen}
                            MenuLabel="Sign Up"
                        />
                    </>}
                </div>
            )}
        </div>
    )
}

export default UserMenu