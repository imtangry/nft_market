import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { GrClose } from 'react-icons/gr'
import { TiSocialFacebook, TiSocialLinkedin, TiSocialTwitter, TiSocialYoutube, TiSocialInstagram, TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti'

import image from "@/assets/image"
import Button from "@/components/Button/Button"
const SideBar = ({ setOpenSideBar }) => {
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
    <div>
      <GrClose onClick={e => (setOpenSideBar(false))} />

      <div>
        <Image src={image.logo} alt='logo' width='50' height='50' />
        <p>
          Discover the most outstanding articles on all topices of NFT & your own stories and share them
        </p>

        <div>
          {
            socialLink.map((v, i) => (
              <a href={v.href} key={i}>
                {v.icon}
              </a>
            ))
          }
        </div>

        <div>
          <div>
            <div onClick={openDiscoverMenu}>
              <p>Discover</p>
              <TiArrowSortedDown />
            </div>
            {
              openDiscover && (
                <div>
                  {discover.map((v, i) => (
                    <p key={i}>
                      <Link href={{ pathname: v.link }}>{v.name}</Link>
                    </p>
                  ))}
                </div>
              )
            }
          </div>

          <div onClick={openHelpMenu}>
            <p>Help Center</p>
            <TiArrowSortedDown />
          </div>
          {
            openHelp && (
              <div>
                {help.map((v, i) => (
                  <p key={i}>
                    <Link href={{ pathname: v.link }}>{v.name}</Link>
                  </p>
                ))}
              </div>
            )
          }
        </div>
      </div>

      <div>
        <Button btnText="创建"></Button>
        <Button btnText="连接钱包"></Button>
      </div>
    </div>
  )
}

export default SideBar