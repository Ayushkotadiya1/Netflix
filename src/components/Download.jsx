import React from 'react'

const Download = () => {
    return (
        <div className='w-[100%] border-t-[8px] border-t-[#605d5d] bg-black sm:py-[80px] py-[50px]'>
            <div className='max-w-[1170px] grid sm:grid-cols-2 grid-cols-1 sm:text-start sm:mx-auto mx-[30px] text-center items-center'>
                <figure className='relative sm:order-1 order-2'>
                    <img src="../../public/images/mobile.jpg" alt="" />
                    <div className='text-white sm:w-[60%] w-[80%] sm:left-[20%] rounded-[12px] left-[10%] absolute bottom-0 border-[1px] border-[#ccc] grid grid-cols-[70%_auto] bg-black'>
                        <div className='grid grid-cols-[30%_auto] items-center'>
                            <img className='p-[10px]' src="../../public/images/stranger.png" alt="" />
                            <div className='leading-6 mx-[5px]'>
                                <h3 className='font-bold sm:text-[18px] text-[15px]'>Stranger Things</h3>
                                <p className='text-blue-500 sm:text-[15px] text-[14px]'>Downloading...</p>
                            </div>
                        </div>
                        <div className='w-[15%] left-[80%] top-[25%] absolute'>
                            <img src="../../public/images/download-icon.gif" alt="" />
                        </div>
                    </div>
                </figure>
                <div className='text-white sm:order-2 order-1'>
                    <h2 className='sm:text-[50px] text-[30px] font-extrabold sm:leading-[60px]'>Download your shows to watch offline</h2>
                    <p className='sm:text-[25px] text-[18px] mt-[9px] sm:leading-[35px]'>Save your favourites easily and always have something to watch.</p>
                </div>
            </div>
        </div>
    )
}

export default Download
