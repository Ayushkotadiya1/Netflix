import React from 'react'

const Show = () => {
    return (
        <div className='w-[100%] border-t-[8px] border-t-[#605d5d] bg-black sm:py-[80px] py-[50px]'>
            <div className='max-w-[1170px] grid sm:grid-cols-2 grid-cols-1 sm:text-start sm:mx-auto mx-[30px] text-center items-center'>
                <div className='text-white'>
                    <h2 className='sm:text-[50px] text-[30px] font-extrabold'>Watch everywhere</h2>
                    <p className='sm:text-[25px] text-[18px] mt-[9px] sm:leading-8 leading-5'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                </div>
                <figure className='relative sm:mt-0 mt-[20px]'>
                    <video className='absolute w-[60%] left-[20%] bottom-[45%]' data-uia="nmhp-card-animation-asset-video" autoplay="" playsinline="" muted="" loop=""><source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v" type="video/mp4" /></video>
                    <img className='relative z-[2]' src="../../public/images/laptop.png" alt="" />
                </figure>
            </div>
        </div>
    )
}

export default Show

