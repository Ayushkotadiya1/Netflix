import React, { useState } from 'react'
import InputSection from './InputSection';

const FAQ = () => {
        const [activeIndex, setActiveIndex] = useState(null);

        const handleAccordionClick = (index) => {
            setActiveIndex(activeIndex === index ? null : index);
        };

    const faqData = [
        // Your FAQ data here as an array of objects { question: '...', answer: '...' }
        {
            question: 'What is Netflix?',answer: 'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.'
        },
        {
            question: 'What is Netflix?',answer: 'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.'
        },
        {
            question: 'What is Netflix?',answer: 'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.'
        },
        {
            question: 'What is Netflix?',answer: 'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.'
        },
        {
            question: 'What is Netflix?',answer: 'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.'
        },
        {
            question: 'What is Netflix?',answer: 'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.'
        }
    ];

    return (
        <div className='w-[100%] border-t-[8px] border-t-[#605d5d] bg-black sm:py-[80px] py-[50px]'>
            <div className='max-w-[1170px] mx-auto px-[15px]'>
                <h2 className='text-center text-white font-bold sm:text-[50px] text-[35px]'>Frequently Asked Questions</h2>
                <div className='py-[30px]'>
                    {faqData.map((item, index) => (
                        <div className='bg-[#2d2d2d] mb-[10px]' key={index}>
                            <div
                                className='faQuestion cursor-pointer p-[20px] text-white text-[25px] relative border-b-[2px] border-[black] hover:bg-[rgb(78,78,78)] duration-300'
                                onClick={() => handleAccordionClick(index)}
                            >
                                <h3>{item.question}</h3>
                                <span className={`absolute right-[20px] top-[15px] ${activeIndex === index ? 'rotate-45' : ''}`}>+</span>
                            </div>
                            <div className={`animate-slide-bottom text-white sm:text-[22px] ${activeIndex === index ? 'scale-y-100 h-[auto] p-[20px]' : 'scale-y-0 h-0'}`}>
                                <p>{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <InputSection />
        </div>
    );
};

export default FAQ;

        