'use client'
import { useState, useEffect } from 'react'

import Image from 'next/image'
import Link from 'next/link'

//  IMPORT ICON START
import { MdOutlineNotificationsNone, MdOutlineNotificationsActive } from 'react-icons/md'
import { BiSearchAlt } from 'react-icons/bi'
import { CgMenuLeft, CgMenuRight } from 'react-icons/cg'
//  IMPORT ICON END

// IMPORT COMP START
import { Discover, HelpCenter, Notification, Profile, Sidebar } from './index'
import { Button } from '../index'
// IMPORT COMP END

import images from '@/assets/image/index'

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
        const btnText = e.target.innerText;
        hiddenAllMenu()
        switch (btnText) {
            case '发现':
                setDiscover(true);
                break;
            case '帮助':
                setHelp(true);
                break;
            case '通知':
                setNotification(true);
                break;
            case '资料':
                setProfile(true);
                break;
        }
    }

    const openNotification = () => {
        hiddenAllMenu();
        setNotification(true)
    }

    return (
        <div className='w-screen h-20 bg-slate-700'>
            <div className='container mx-auto h-full px-4 bg-slate-800 flex items-center justify-between'>
                {/* bar left */}
                <div className='flex items-center'>
                    {/* logo */}
                    <div className='flex mr-4 items-center'>
                        <Image src={images.logo} width={46} height={46} alt='NFT MARKET LOGO' />
                        <h1 className='ml-3 text-slate-100 font-bold'>Daisy.</h1>
                    </div>
                    {/* search */}
                    <div className='relative'>
                        <input type="text" placeholder='搜索NFT' className='peer px-4 pr-8 w-56 md:w-64 lg:72 text-slate-100 outline-0 rounded-full h-10 bg-transparent border border-slate-600 focus:border-slate-400' />
                        <BiSearchAlt onClick={() => { }} className='absolute text-xl top-1/2 right-2 -translate-y-1/2 text-slate-600 peer-focus:text-slate-400' />
                    </div>
                </div>
                {/* bar right */}
                <div className='flex items-center text-sm text-slate-100'>
                    {/* Discover */}
                    <div className='mx-2'>
                        <p className='tracking-widest' onClick={openMenu}>发现</p>
                        {discover && (
                            <div>
                                <Discover />
                            </div>
                        )}
                    </div>
                    {/* Help Center */}
                    <div className='mx-2 tracking-widest'>
                        <p onClick={openMenu}>帮助</p>
                        {help && (
                            <div>
                                <HelpCenter />
                            </div>
                        )}
                    </div>

                    <div className='w-1 h-4 border-r border-slate-600 mx-4'/>

                    {/* Notification */}
                    <div className='mx-2'>
                        <MdOutlineNotificationsNone className='text-2xl' onClick={openNotification} />
                        {/* <MdOutlineNotificationsActive onClick={openNotification} /> */}
                        {notification && (
                            <div>
                                <Notification />
                            </div>
                        )}
                    </div>

                    {/* CREATE BTN */}
                    <div className='mx-2 tracking-widest'>
                        <Button btnText='创建'></Button>
                    </div>

                    {/* User Profile */}
                    <div className='mx-2'>
                        <div className='p-2 rounded-full bg-slate-200 hover:bg-slate-100 cursor-pointer'>
                            <Image src={images.user} width='24' height='24' alt='USER ICON' />
                        </div>

                        {profile && (
                            <div>
                                <Profile />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar