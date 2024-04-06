import image from '@/assets/image/index'
import Image from 'next/image'

const Logo = () => {
    return (
        <div className='flex mr-4 items-center'>
            <Image src={image.logo} width={46} height={46} alt='NFT MARKET LOGO' />
            <h1 className='ml-2 sm:ml-3 font-bold text-xl'>Daisy.</h1>
        </div>
    )
}

export default Logo