import React from 'react'

const InputSection = () => {
    return (
        <div className='text-white max-w-[1170px] text-center px-[30px] mx-auto'>
            <h4 className='text-[20px] py-[10px]'>Ready to watch? Enter your email to create or restart your membership.</h4>
            <div className='max-w-[600px] mx-auto mt-[10px]'>
                <form action="" className='grid sm:grid-cols-[70%_auto] grid-cols-1 gap-[10px]'>
                    <input type="text" className='h-[50px] bg-[rgba(135,206,235,0.3)] rounded-[5px] border-[1px] border-[green] pl-[20px] ' placeholder='Email Address' />
                    <button className='bg-[red] px-[10px] rounded-[5px] text-white text-[20px] p-[10px] sm:w-[200px] w-[200px] mx-auto'>Get Started</button>
                </form>
            </div>
        </div>
    )
}

export default InputSection
