import Image from "next/image"
import { FaUserAlt, FaRegImage, FaUserEdit } from 'react-icons/fa'
import { MdHelpCenter } from "react-icons/md"
import { TbDownloadOff, TbDownload } from 'react-icons/tb'

import image from "@/assets/image"
import Link from "next/link"

const Profile = () => {
  return (
    <div>
      <div>
        <Image src={image.user} alt='user profile' width='30' height='30' />
      </div>

      <div>
        <p>Rhys</p>
        <small>123333333...</small>
      </div>

      <div>
        <div>
          <div>
            <FaUserAlt />
            <p>
              <Link href={{ pathname: 'my-profile' }}>My Profile</Link>
            </p>
          </div>

          <div>
            <FaRegImage />
            <p>
              <Link href={{ pathname: 'my-items' }}>My Items</Link>
            </p>
          </div>

          <div>
            <FaUserEdit />
            <p>
              <Link href={{ pathname: 'edit-profile' }}>Edit Profile</Link>
            </p>
          </div>
        </div>

        <div>
          <div>
            <MdHelpCenter />
            <p>
              <Link href={{ pathname: 'help' }}>Help</Link>
            </p>
          </div>

          <div>
            <TbDownload />
            <p>
              <Link href={{ pathname: 'disconnect' }}>Disconnect</Link>
            </p>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Profile