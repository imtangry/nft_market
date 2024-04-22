import image from '@/assets/image/index'
import Image from 'next/image'

const Logo = () => {
    return (
        <div className='flex mr-4 items-center'>
            <Image src={image.logo} width={42} height={38} alt='NFT MARKET LOGO' />
            <h1 className='ml-3 font-bold text-xl tracking-wider'>Daisy.</h1>
        </div>
    )
}

export default Logo