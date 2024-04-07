'use client'
import { useState, useEffect } from 'react'

import Image from 'next/image'

//  IMPORT ICON START
import { MdOutlineNotificationsNone, MdOutlineNotificationsActive } from 'react-icons/md'
import { BiSearchAlt } from 'react-icons/bi'
import { CgMenuLeft, CgMenuRight } from 'react-icons/cg'
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
//  IMPORT ICON END

// IMPORT COMP START
import { Discover, HelpCenter, Notification, Profile, SideBar } from './index'
import { Button, Logo } from '@/components'
// IMPORT COMP END

import images from '@/assets/image/index'
import { useBaseContext } from '../Providers'

const NavBar = () => {
    const [discover, setDiscover] = useState(false)
    const [help, setHelp] = useState(false)
    const [notification, setNotification] = useState(false)
    const [profile, setProfile] = useState(false)
    const [openSideMenu, setOpenSideMenu] = useState(false)

    const hiddenAllMenu = () => {
        setDiscover(false)
        setHelp(false)
        setNotification(false)
        setProfile(false)
        setOpenSideMenu(false)
    }
    const openMenu = (e) => {
        console.log(44);
        e.stopPropagation()
        const btnText = e.target.innerText;
        hiddenAllMenu()
        switch (btnText) {
            case '发现':
                setDiscover(true);
                break;
            case '帮助':
                setHelp(true);
                break;
        }
    }

    const openNotification = () => {
        hiddenAllMenu()
        setNotification(true)
    }
    const openProfile = () => {
        hiddenAllMenu()
        setProfile(true)
    }
    const openSideBar = () => {
        hiddenAllMenu()
        setOpenSideMenu(true)
    }

    const handleGlobalClick = (e) => {
        console.log(e)
        e.stopPropagation()
        hiddenAllMenu()
    }

    const { state: { theme }, setState } = useBaseContext()

    useEffect(() => {
        // 在组件挂载后添加事件监听器
        document.addEventListener('click', handleGlobalClick, true);
        // 在组件卸载前移除事件监听器
        return () => document.removeEventListener('click', handleGlobalClick, true);
    }, []);

    return (
        <div className='sticky top-0 w-screen themeable h-20 z-50 shadow-lg' onClick={(e)=>{
            console.log(22);
            e.stopPropagation()
            return false
        }}>
            <div className='container mx-auto h-full px-4 sm:px-2 dark:bg-slate-800 flex items-center justify-between'>
                {/* bar left */}
                <div className='flex items-center'>
                    {/* logo */}
                    <Logo />
                    {/* search */}
                    <div className='relative hidden md:block'>
                        <input type="text" placeholder='搜索NFT' className='peer px-4 pr-8 w-52 md:w-64 lg:72 outline-0 rounded-full h-10 bg-transparent border border-slate-600 focus:border-slate-400' />
                        <BiSearchAlt onClick={() => { }} className='absolute text-xl top-1/2 right-2 -translate-y-1/2 text-slate-600 peer-focus:text-slate-400' />
                    </div>
                </div>

                {/* bar right */}
                <div className='items-center text-sm flex ml-auto'>
                    {/* Discover */}
                    <div className='mx-2 relative hidden md:block '>
                        <p className='tracking-widest cursor-pointer' onClick={openMenu}>发现</p>
                        {discover && (
                            <div className='dropdown'>
                                <Discover />
                            </div>
                        )}
                    </div>
                    {/* Help Center */}
                    <div className='mx-2 relative hidden md:block '>
                        <p className='tracking-widest cursor-pointer' onClick={openMenu}>帮助</p>
                        {help && (
                            <div className='dropdown'>
                                <HelpCenter />
                            </div>
                        )}
                    </div>

                    <div className='w-1 h-4 border-r border-slate-600 mx-2 hidden md:block ' />

                    {/* theme change */}
                    <div className='mx-2 text-xl'>
                        {theme === 'dark' ? <HiOutlineMoon className='cursor-pointer' onClick={() => { setState((v) => ({ ...v, theme: 'light' })) }} /> : <HiOutlineSun className='cursor-pointer' onClick={() => { setState((v) => ({ ...v, theme: 'dark' })) }} />}
                    </div>

                    {/* Notification */}
                    <div className='mx-2 relative'>
                        <MdOutlineNotificationsNone className='text-2xl cursor-pointer' onClick={openNotification} />
                        {/* <MdOutlineNotificationsActive onClick={openNotification} /> */}
                        {notification && (
                            <div>
                                <Notification />
                            </div>
                        )}
                    </div>

                    {/* Create button */}
                    <div className='mx-2 tracking-widest hidden md:block '>
                        <Button btnText='创建'></Button>
                    </div>

                    {/* User Profile */}
                    <div className='mx-2 relative'>
                        <div className='p-2 rounded-full bg-slate-200 hover:bg-slate-100 cursor-pointer'>
                            <Image src={images.user} width='24' height='24' alt='USER ICON' onClick={openProfile} />
                        </div>
                        {profile && <Profile />}
                    </div>
                </div>

                {/* mobile menu */}
                <div className='md:hidden text-2xl'>
                    <CgMenuRight onClick={openSideBar} />
                </div>
            </div>

            {/* SideBar */}
            {openSideMenu && (
                <div>
                    <SideBar setOpenSideMenu={setOpenSideMenu} />
                </div>
            )}
        </div>
    )
}

export default NavBar