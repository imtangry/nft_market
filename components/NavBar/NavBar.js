import { useState, useEffect } from 'react'

import Image from 'next/image'
import Link from 'next/link'

//  IMPORT ICON START
import { MdNotifications } from 'react-icons/md'
import { BsSearce } from 'react-icons/bs'
import { CgMenuLeft, CgMenuRight } from 'react-icons/cg'
//  IMPORT ICON END

// IMPORT COMP START
import { Discover, HelpCenter, Notification, Profile, Sidebar } from './index'
import { Button } from '../index'
// IMPORT COMP END

const NavBar = () => {
    const [discover, setDiscover] = useState(false)
    const [help, setHelp] = useState(false)
    const [notification, setNotification] = useState(false)
    const [profile, setProfile] = useState(false)
    const [openSideMenu, setOpenSideMenu] = useState(false)


    return (
        <div className=''>
            d
        </div>
    )
}

export default NavBar