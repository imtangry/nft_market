'use client'
import Image from "next/image"
import { FaUserAlt, FaRegImage, FaUserEdit } from 'react-icons/fa'
import { MdHelpCenter } from "react-icons/md"
import { TbDownloadOff, TbDownload } from 'react-icons/tb'

import image from "@/assets/image"
import Link from "next/link"
import { useAccount } from "wagmi"
import { signOut } from "next-auth/react"


const Profile = () => {
  const { address } = useAccount();

  return (
    <div className="dropdown right-0">
      <div className="flex px-2 mt-2">
        <div className="flex items-center pr-3">
          <Image src={image.user} alt='user profile' width='30' height='30' />
        </div>

        <div className="flex flex-col justify-center flex-1 overflow-hidden">
          <p className="font-bold">Rhys</p>
          <small>{address}</small>
        </div>
      </div>

      <div className="mt-4">
        <div>
          <div className="flex items-center rounded-md pl-2 hover:bg-slate-300 dark:hover:bg-slate-500">
            <FaUserAlt />
            <p className="pl-3 flex-1">
              <Link className="inline-block py-3 pr-2 w-full" href={{ pathname: 'my-profile' }}>My Profile</Link>
            </p>
          </div>

          <div className="flex items-center rounded-md pl-2 hover:bg-slate-300 dark:hover:bg-slate-500">
            <FaRegImage />
            <p className="pl-3 flex-1">
              <Link className="inline-block py-3 pr-2 w-full" href={{ pathname: 'my-items' }}>My Items</Link>
            </p>
          </div>

          <div className="flex items-center rounded-md pl-2 hover:bg-slate-300 dark:hover:bg-slate-500">
            <FaUserEdit />
            <p className="pl-3 flex-1">
              <Link className="inline-block py-3 pr-2 w-full" href={{ pathname: 'edit-profile' }}>Edit Profile</Link>
            </p>
          </div>
        </div>

        <div className="border-b m-2 mx-3 dark:border-slate-400 border-slate-500" />

        <div>
          <div className="flex items-center rounded-md pl-2 hover:bg-slate-300 dark:hover:bg-slate-500">
            <MdHelpCenter />
            <p className="pl-3 flex-1">
              <Link className="inline-block py-3 pr-2 w-full" href={{ pathname: 'help' }}>Help</Link>
            </p>
          </div>

          <div className="flex items-center rounded-md pl-2 hover:bg-slate-300 dark:hover:bg-slate-500">
            <TbDownload />
            <p className="pl-3 flex-1">
              <span className="inline-block py-3 pr-2 w-full cursor-pointer" onClick={ signOut }>Disconnect!</span>
            </p>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Profile