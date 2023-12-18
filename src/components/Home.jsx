import React from 'react'

const Home = () => {
    return (
        <div className='w-[100%] border-t-[8px] border-t-[#605d5d] bg-black sm:py-[80px] py-[50px]'>
            <div className='max-w-[1170px] grid sm:grid-cols-2 grid-cols-1 sm:text-start sm:mx-auto mx-[30px] text-center items-center'>
                <div className='text-white'>
                    <h2 className='sm:text-[50px] text-[30px] font-extrabold'>Enjoy on your TV</h2>
                    <p className='sm:text-[25px] text-[18px] mt-[9px]'>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                </div>
                <figure className='relative'>
                    <video className='absolute left-[10%] w-[80%] bottom-[20%] z-[1]' data-uia="nmhp-card-animation-asset-video" autoplay="" playsinline="" muted="" loop=""><source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" type="video/mp4" /></video>
                    <img className='relative z-[2]' src="../../public/images/tv.png" alt="" />
                </figure>
            </div>
        </div>
    )
}

export default Home
