import { AccountButton } from '@/components'
import { Profile } from '../index'
import Image from 'next/image';

import image from '@/assets/image';
const User = ({ profile, openProfile }) => {
    return (
        <div className='flex mx-2 relative'>
            <AccountButton userIcon={<div className='p-2 rounded-full bg-slate-200 hover:bg-slate-100 cursor-pointer'>
                <Image src={image.user1} width='24' height='24' alt='USER ICON' onClick={openProfile} />
            </div>} />

            {profile && <Profile />}
        </div>
    )
}

export default User