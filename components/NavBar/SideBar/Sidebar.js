import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { GrClose } from 'react-icons/gr'
import { TiSocialFacebook, TiSocialLinkedin, TiSocialTwitter, TiSocialYoutube, TiSocialInstagram, TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti'

import image from "@/assets/image"
import Button from "@/components/Button/Button"
const SideBar = ({ setOpenSideMenu }) => {
  const [openDiscover, setOpenDiscover] = useState(false)
  const [openHelp, setOpenHelp] = useState(false)

  const discover = [
    {
      name: 'Collection',
      link: 'Collection'
    },
    {
      name: 'Search',
      link: 'search'
    },
    {
      name: 'Author Profile',
      link: 'author-profile'
    },
    {
      name: 'NFT Details',
      link: 'NFT-details'
    },
    {
      name: 'Account Setting',
      link: 'account-setting'
    },
    {
      name: 'Connect Wallet',
      link: 'connect-wallet'
    },
    {
      name: 'Blog',
      link: 'blog'
    },
  ]

  const help = [
    {
      name: 'About',
      link: 'about'
    },
    {
      name: 'Contact Us',
      link: 'contact-us'
    },
    {
      name: 'Sign Up',
      link: 'sign-up'
    },
    {
      name: 'Sign In',
      link: 'sign-in'
    },
    {
      name: 'Subscription',
      link: 'subscription'
    }
  ]

  const socialLink = [
    {
      icon: (<TiSocialFacebook />),
      href: '#'
    },
    {
      icon: (<TiSocialLinkedin />),
      href: '#'
    },
    {
      icon: (<TiSocialTwitter />),
      href: '#'
    },
    {
      icon: (<TiSocialYoutube />),
      href: '#'
    },
    {
      icon: (<TiSocialInstagram />),
      href: '#'
    },

  ]

  const openDiscoverMenu = () => {
    setOpenDiscover(!openDiscover)
    setOpenHelp(false)
  }

  const openHelpMenu = () => {
    setOpenDiscover(false)
    setOpenHelp(!openHelp)
  }

  return (
    <div className="absolute top-0 left-0 bottom-0 w-3/4 border-right shadow-[4px_0px_10px_0px_rgba(0,0,0,0.1)] bg-slate-100 dark:bg-slate-800 py-6 px-4">
      <GrClose className="absolute right-2 top-2 cursor-pointer text-xl" onClick={e => (setOpenSideMenu(false))} />
      <div>
        <div className="mb-2 flex items-center px-2">
          <Image src={image.logo} alt='logo' width='50' height='50' />
          <h1 className="ml-3 font-bold text-xl">Daisy.</h1>
        </div>
        <p className="text-sm my-4 px-2">
          Discover the most outstanding articles on all topices of NFT & your own stories and share them
        </p>

        <div className="flex my-3 px-2">
          {
            socialLink.map((v, i) => (
              <a className="mr-3 text-2xl" href={v.href} key={i}>
                {v.icon}
              </a>
            ))
          }
        </div>

        <div className="my-4 border-b border-slate-500"/>

        <div className="font-bold">

          <div>
            <div className="flex items-center justify-between py-2 hover:bg-slate-500 rounded-md px-2" onClick={openDiscoverMenu}>
              <p>Discover</p>
              <TiArrowSortedDown />
            </div>
            {
              openDiscover && (
                <div>
                  {discover.map((v, i) => (
                    <p key={i}>
                      <Link className='inline-block w-full p-2 pl-4 rounded-md hover:bg-slate-500' href={{ pathname: v.link }}>{v.name}</Link>
                    </p>
                  ))}
                </div>
              )
            }
          </div>

          <div>
            <div className="flex items-center justify-between py-2 hover:bg-slate-500 rounded-md px-2" onClick={openHelpMenu}>
              <p>Help Center</p>
              <TiArrowSortedDown />
            </div>
            {
              openHelp && (
                <div>
                  {help.map((v, i) => (
                    <p key={i}>
                      <Link className='inline-block w-full p-2 pl-4 rounded-md hover:bg-slate-500' href={{ pathname: v.link }}>{v.name}</Link>
                    </p>
                  ))}
                </div>
              )
            }
          </div>
        </div>
      </div>

      <div className="border-b border-slate-500 my-4"/>

      <div>
        <Button btnText="创建"></Button>
        <Button className='ml-4' btnText="连接钱包"></Button>
      </div>
    </div>
  )
}

export default SideBar