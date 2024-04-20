// 某个分类的Slider展示 目前想法是可以展示不同入驻企业的特殊NFT
import { Carousel } from 'antd';

const sliderData = [
    {
        title: '加密社区一号健身房',
        id: 1,
        owner: '0x123',
        name: 'C Gym company',
        image: ''
    },
    {
        title: '加密社区一号餐厅',
        id: 2,
        owner: '0x1234',
        name: 'C Food company',
        image: ''
    },
]

const NFTCollectionSlider = () => {
    return (
    <div className='group h-[440px] w-full px-4 flex'>
        {/* 上一页 */}
        <div className='cursor-pointer w-12 hover:bg-slate-400 rounded-xl flex justify-center items-center'>
            
        </div>
        {/* 轮播 */}
        <div className='flex-1 overflow-hidden cursor-pointer rounded-xl mx-2'>
        <Carousel autoplay>
            {
                sliderData.map(e => (
                    <div key={e.id} className='h-[440px] bg-slate-400'>
                        <h3>{e.title}</h3>
                    </div>
                ))
            }
        </Carousel>
        </div>
         {/* 下一页 */}
         <div className='cursor-pointer w-12 hover:bg-slate-400 rounded-xl flex justify-center items-center'>
        
        </div>
    </div>
    )
}

export default NFTCollectionSlider