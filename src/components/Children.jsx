import React from 'react'

const Children = () => {
    return (
        <div>
            <div className='w-[100%] border-t-[8px] border-t-[#605d5d] bg-black sm:py-[80px] py-[50px]'>
                <div className='max-w-[1170px] grid sm:grid-cols-2 grid-cols-1 sm:text-start sm:mx-auto mx-[30px] text-center items-center'>
                    <figure className='relative sm:order-1 order-2'>
                        <img src="../../public/images/children.png" alt="" />
                    </figure>
                    <div className='text-white sm:order-2 order-1'>
                        <h2 className='sm:text-[50px] text-[30px] font-extrabold sm:leading-[60px]'>Create profiles for kids</h2>
                        <p className='sm:text-[25px] text-[18px] mt-[9px] sm:leading-[35px]'>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Children
