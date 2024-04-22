'use client'

import { useState } from "react"
import image from "@/assets/image"
import Image from "next/image"
import { Button } from "@/components"

import { HiFire } from "react-icons/hi";
import { AiOutlineFieldTime } from "react-icons/ai";
import { FaCircleRight, FaCircleLeft, FaHeart } from "react-icons/fa6";

const sliderData = [
    {
        title: 'NFT_01',
        id: 1,
        name: 'Rhys',
        collection: 'Gym',
        like: 22,
        price: '0.0001 ETH',
        image: image.user,
        nftImage: image.nft1,
        time: {
            days: 21,
            hours: 1,
            minutes: 22,
            seconds: 23
        }
    },
    {
        title: 'NFT_02',
        id: 2,
        name: 'Rhys',
        collection: 'Music',
        like: 12,
        price: '0.00125 ETH',
        image: image.user,
        nftImage: image.nft2,
        time: {
            days: 0,
            hours: 12,
            minutes: 2,
            seconds: 23
        }
    },
]

const NFTBigSlider = () => {
    const [index, setIndex] = useState(0)
    const [currentNFT, setCurrentNFT] = useState(sliderData[index])
    const inc = () => {
        console.log(index);
        if (index < sliderData.length - 1) {
            setCurrentNFT(sliderData[index + 1])
            setIndex(index + 1)
        }
    }

    const dec = () => {
        if (index > 0) {
            setCurrentNFT(sliderData[index - 1])
            setIndex(index - 1)
        }
    }
    return (
        <div className="my-12 flex justify-center w-full flex-wrap md:flex-nowrap px-4 mb-24">
            {/* 信息卡片*/}
            <div className="flex-1 z-10 bg-neutral-200 dark:bg-neutral-800 w-1/2 px-6 py-4 rounded-md dark:shadow-lg shadow-lg min-w-96">
                {/* title */}
                <h1 className="text-2xl font-bold">{currentNFT.title}</h1>
                {/* 基本信息 */}
                <div className="flex items-center my-4">
                    <div className="flex flex-1">
                        <Image className="mr-2" src={image.user} width={30} height={40} alt='seller header' />
                        <div className="flex flex-col justify-center overflow-hidden">
                            <span>Creator</span>
                            <span>{currentNFT.name}</span>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <HiFire className="text-4xl mr-2" />
                        <div className="flex flex-col justify-center overflow-hidden">
                            <span>Collection</span>
                            <span>{currentNFT.collection}</span>
                        </div>
                    </div>
                </div>
                {/* 价格 */}
                <div className="relative border h-16 rounded-md mt-12 mb-4 flex border-slate-500 dark:border-slate-200 items-center pl-12 pt-2 shadow-inner">
                    <div className="absolute left-12 -top-4 px-6 h-10 leading-10 bg-slate-300 dark:bg-slate-500 rounded-md">
                        Current Bid
                    </div>
                    {currentNFT.price}
                </div>
                {/* 倒计时 */}
                <div>
                    <div className="flex items-center mb-4 mt-8">
                        <AiOutlineFieldTime className="mr-2 text-2xl" />
                        Sale ending in
                    </div>
                    <div className="flex my-4">
                        <div className="flex flex-col mr-4">
                            <span className="text-2xl font-bold">{(currentNFT.time.days + '').padStart(2, 0)}</span>
                            <span>Days</span>
                        </div>
                        <div className="flex flex-col mr-4">
                            <span className="text-2xl font-bold">{(currentNFT.time.hours + '').padStart(2, 0)}</span>
                            <span>Hours</span>
                        </div>
                        <div className="flex flex-col mr-4">
                            <span className="text-2xl font-bold">{(currentNFT.time.minutes + '').padStart(2, 0)}</span>
                            <span>Minutes</span>
                        </div>
                        <div className="flex flex-col mr-4">
                            <span className="text-2xl font-bold">{(currentNFT.time.seconds + '').padStart(2, 0)}</span>
                            <span>Seconds</span>
                        </div>
                    </div>
                </div>

                <div className="border-b mt-8 mb-4"></div>
                {/* 操作按钮 */}
                <div className="flex items-center justify-center">
                    <Button className="mr-8">Place</Button>
                    <Button>View</Button>
                </div>
                <div className="flex mt-4 text-4xl text-slate-500 dark:text-slate-200">
                    <FaCircleLeft onClick={() => {
                        dec()
                    }} className="mr-6 cursor-pointer hover:text-slate-400 dark:hover:text-slate-50"></FaCircleLeft>
                    <FaCircleRight onClick={inc} className="cursor-pointer hover:text-slate-400 dark:hover:text-slate-50"></FaCircleRight>
                </div>
            </div>
            {/* 展示卡片 */}
            <div className="shadow-xl flex-1 relative w-1/2 min-w-96 min-h-80 bg-sky-300 rounded-2xl mt-6 md:mt-0 md:top-8 md:-left-6 border-8 border-slate-50">
                <Image src={currentNFT.nftImage} fill={true} objectFit="cover" alt="NFT Image" />
                <div className="flex items-center absolute top-4 h-8 right-4 themeable rounded-full px-4">
                    <FaHeart className="mr-4"/>
                    {currentNFT.like}
                </div>
            </div>
        </div>
    )
}

export default NFTBigSlider