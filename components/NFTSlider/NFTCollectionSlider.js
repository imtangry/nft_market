// 某个分类的Slider展示 目前想法是可以展示不同入驻企业的特殊NFT
import { Carousel } from 'antd';
import Image from 'next/image';
import { createRef } from 'react';
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const sliderData = [
    {
        title: '加密社区一号健身房',
        id: 1,
        owner: '0x123',
        name: 'C Gym company',
        image: 'https://i.seadn.io/s/raw/files/de2494f478a8f31938816842556c3ab5.png?auto=format&dpr=1&w=1000'
    },
    {
        title: '加密社区一号餐厅',
        id: 2,
        owner: '0x1234',
        name: 'C Food company',
        image: 'https://i.seadn.io/s/raw/files/2368b5cd51cce0f754f266a5a9d83110.png?auto=format&dpr=1&w=1000'
    },
    {
        title: '加密社区一号超市',
        id: 3,
        owner: '0x123411',
        name: 'C Market company',
        image: 'https://i.seadn.io/s/raw/files/2368b5cd51cce0f754f266a5a9d83110.png?auto=format&dpr=1&w=1000'
    },
]

const NFTCollectionSlider = () => {
    const slider = createRef();

    return (
        <div className='group/card h-[440px] w-full px-4 flex'>
            {/* 上一页 */}
            <div className='hidden md:flex group/item opacity-0 duration-300 group-hover/card:opacity-100 cursor-pointer w-8 bg-gradient-to-b from-neutral-400 hover:from-neutral-500 rounded-xl justify-center items-center'
                onClick={() => (slider.current.prev())}
            >
                <BsChevronLeft className='hidden group-hover/item:block text-3xl font-bold'/>
            </div>
            {/* 轮播 */}
            <div className='flex-1 overflow-hidden cursor-pointer rounded-xl mx-2'>
                <Carousel autoplay autoplaySpeed={6000} ref={slider}>
                    {
                        sliderData.map(e => (
                            <div key={e.id} className='relative h-[440px] bg-neutral-400'>
                                <Image src={e.image} alt='Collection Img' fill={true} object-fit="contain" />
                                <h3>{e.title}</h3>
                            </div>
                        ))
                    }
                </Carousel>
            </div>
            {/* 下一页 */}
            <div className='hidden md:flex group/item opacity-0 duration-300 group-hover/card:opacity-100 cursor-pointer w-8 bg-gradient-to-b from-neutral-400 hover:from-neutral-500 rounded-xl justify-center items-center'
                onClick={() => (slider.current.next())}
            >
                <BsChevronRight className='hidden group-hover/item:block text-3xl font-bold'/>
            </div>
        </div>
    )
}

export default NFTCollectionSlider