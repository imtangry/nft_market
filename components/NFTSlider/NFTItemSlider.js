'use client'
import { useEffect, useRef } from 'react'
// 某个分类的Slider展示 目前想法是可以展示不同入驻企业的特殊NFT
// import Image from 'next/image';
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
        title: 'BeiJing',
        id: 2,
        owner: '0x1234',
        name: 'C Food company',
        image: 'https://i.seadn.io/s/raw/files/2368b5cd51cce0f754f266a5a9d83110.png?auto=format&dpr=1&w=1000'
    },
    {
        title: 'ShangHai',
        id: 3,
        owner: '0x1234',
        name: 'C Food company',
        image: 'https://i.seadn.io/s/raw/files/2368b5cd51cce0f754f266a5a9d83110.png?auto=format&dpr=1&w=1000'
    },
    {
        title: 'NanJing',
        id: 4,
        owner: '0x1234',
        name: 'C Food company',
        image: 'https://i.seadn.io/s/raw/files/2368b5cd51cce0f754f266a5a9d83110.png?auto=format&dpr=1&w=1000'
    },
    {
        title: 'Great Wall',
        id: 5,
        owner: '0x1234',
        name: 'C Food company',
        image: 'https://i.seadn.io/s/raw/files/2368b5cd51cce0f754f266a5a9d83110.png?auto=format&dpr=1&w=1000'
    },
    {
        title: 'H Mountain',
        id: 6,
        owner: '0x1234',
        name: 'C Food company',
        image: 'https://i.seadn.io/s/raw/files/2368b5cd51cce0f754f266a5a9d83110.png?auto=format&dpr=1&w=1000'
    },
    {
        title: 'L Lake',
        id: 7,
        owner: '0x1234',
        name: 'C Food company',
        image: 'https://i.seadn.io/s/raw/files/2368b5cd51cce0f754f266a5a9d83110.png?auto=format&dpr=1&w=1000'
    },
    {
        title: 'My Home',
        id: 8,
        owner: '0x1234',
        name: 'C Food company',
        image: 'https://i.seadn.io/s/raw/files/2368b5cd51cce0f754f266a5a9d83110.png?auto=format&dpr=1&w=1000'
    },
]

const NFTItemSlider = () => {
    const swiperEl = useRef(null)
    const breakpoints = {
        breakpoints: {
            640: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    }

    useEffect(() => {
        const el = swiperEl.current
        Object.assign(el, {
            slidesPerView: 1,
            spaceBetween: 20,
            breakpoints: {
                "400": {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                "1024": {
                    slidesPerView: 4,
                    spaceBetween: 10,
                },
            },
        });
    }, [])
    return (
        <div className='group/card w-full px-4 flex my-10'>
            <div className='w-7 hidden md:flex rounded-lg group/item opacity-0 duration-300 group-hover/card:opacity-100 cursor-pointer bg-gradient-to-b from-neutral-100 hover:from-neutral-200 justify-center items-center z-10'
                onClick={() => {
                    swiperEl.current.swiper.slidePrev()
                }}
            >
                <BsChevronLeft className='hidden group-hover/item:block text-3xl font-bold' />
            </div>
            {/* 轮播 */}
            <div className='flex-1 h-64 overflow-hidden mx-2 rounded-xl'>
                <swiper-container ref={swiperEl}>
                    {sliderData.map(e => (
                        <swiper-slide key={e.id}>
                            <div className='flex h-64 w-full items-center rounded-xl justify-center font-xl bg-slate-500'>
                                {e.title}
                            </div>
                        </swiper-slide>
                    ))}
                </swiper-container>
            </div>
            <div className='hidden w-7 md:flex group/item rounded-lg opacity-0 duration-300 group-hover/card:opacity-100 cursor-pointer bg-gradient-to-b from-neutral-100 hover:from-neutral-200 justify-center items-center z-10'
                onClick={() => {
                    swiperEl.current.swiper.slideNext();
                }}
            >
                <BsChevronRight className='hidden group-hover/item:block text-3xl font-bold' />
            </div>
        </div>
    )
}

export default NFTItemSlider