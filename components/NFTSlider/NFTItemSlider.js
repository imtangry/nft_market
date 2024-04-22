// 某个分类的Slider展示 目前想法是可以展示不同入驻企业的特殊NFT
import Image from 'next/image';
import { createRef } from 'react';
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Slider from "@ant-design/react-slick";

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
    const slider = createRef();

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className='group/card w-full px-4 flex'>
            {/* 上一页 */}
            <div className='hidden md:flex group/item opacity-0 duration-300 group-hover/card:opacity-100 cursor-pointer w-8 bg-gradient-to-b from-neutral-400 hover:from-neutral-500 rounded-xl justify-center items-center'
                onClick={() => (slider.current.slickPrev())}
            >
                <BsChevronLeft className='hidden group-hover/item:block text-3xl font-bold' />
            </div>
            {/* 轮播 */}
            <div className='flex-1 overflow-hidden cursor-pointer rounded-xl mx-2'>

                <div className="slider-container">
                    <Slider {...settings} ref={slider}>
                        {sliderData.map(e => (
                            <div key={e.id} className='px-4'>
                                <div className='flex items-center rounded-lg justify-center w-full font-xl h-40 bg-slate-500'>
                                    {e.title}
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>

            </div>
            {/* 下一页 */}
            <div className='hidden md:flex group/item opacity-0 duration-300 group-hover/card:opacity-100 cursor-pointer w-8 bg-gradient-to-b from-neutral-400 hover:from-neutral-500 rounded-xl justify-center items-center'
                onClick={() => (slider.current.slickNext())}
            >
                <BsChevronRight className='hidden group-hover/item:block text-3xl font-bold' />
            </div>
        </div>
    )
}

export default NFTItemSlider