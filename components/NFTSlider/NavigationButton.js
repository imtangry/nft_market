import React from 'react';
import { useSwiper } from 'swiper/react';
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

export default function SwiperNavButtons() {
    const swiper = useSwiper();

    return (
        <div>
            {/* 上一页 */}
            <div className='absolute top-1/2 -translate-y-1/2 left-2 w-12 h-12 rounded-full hidden md:flex group/item opacity-0 duration-300 group-hover/card:opacity-100 cursor-pointer bg-gradient-to-b from-neutral-100 hover:from-neutral-200 justify-center items-center z-10'
                onClick={() => swiper.slidePrev()}
            >
                <BsChevronLeft className='hidden group-hover/item:block text-3xl font-bold' />
            </div>
            {/* 下一页 */}
            <div className='hidden absolute top-1/2 -translate-y-1/2 right-2 w-12 h-12 md:flex group/item opacity-0 duration-300 group-hover/card:opacity-100 cursor-pointer bg-gradient-to-b from-neutral-100 hover:from-neutral-200 rounded-full justify-center items-center z-10'
                onClick={() => swiper.slideNext()}
            >
                <BsChevronRight className='hidden group-hover/item:block text-3xl font-bold' />
            </div>
        </div>
    );
};