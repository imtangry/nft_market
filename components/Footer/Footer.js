import { RiSendPlaneFill } from 'react-icons/ri'
import { Discover, HelpCenter } from '../NavBar'
import { Logo, SocialLink } from '@/components'

const Footer = () => {
  return (
    <div className='themeable'>
      <div className="container mx-auto p-4  flex flex-wrap">
        <div className='flex-1 min-w-60'>
          <Logo />
          <p className='my-4 px-4'>
            Greatest digital marketplace for crypto collectibles and non-fungible tokens ( NFTs ).Lets Create,Sell,Buy,and Discover digital items here.
          </p>
          <SocialLink />
        </div>

        <div className='flex-1 px-4 my-4'>
          <h3 className='font-bold text-base'>Discover</h3>
          <Discover />
        </div>

        <div className='flex-1 px-4 my-4'>
          <h3 className='font-bold text-base'>Help Center</h3>
          <HelpCenter />
        </div>

        <div className='flex-1 min-w-60 px-4 my-4'>
          <h3 className='font-bold text-base'>Subscribe</h3>
          <div className='relative mt-6'>
            <input className='border-0 outline-0 pl-4 text-base pr-11 text-slate-50 bg-slate-500 focus:bg-slate-400 dark:bg-slate-500 dark:focus:bg-slate-400 h-16 w-full rounded-full' type="text" />
            <RiSendPlaneFill className='absy-center text-slate-50 dark:text-slate-900 right-4 text-2xl' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer