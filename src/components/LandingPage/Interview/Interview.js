import React, { useRef, useState } from 'react';
import Headline from '../../Otherscomponent/Headline';
import interview from '../../Otherscomponent/interview';

const Interview = () => {
    const interviewRef = useRef(null);


    const scroll = (scrollOffset) => {
        if (interviewRef.current) {
            const container = interviewRef.current;
            const start = container.scrollLeft;

            const startTime = performance.now();
            const duration = 500; // Adjust the duration as needed

            const animateScroll = (currentTime) => {
                const elapsedTime = currentTime - startTime;
                const scroll = easeInOutQuad(elapsedTime, start, scrollOffset, duration);
                container.scrollLeft = scroll;

                if (elapsedTime < duration) {
                    requestAnimationFrame(animateScroll);
                }
            };

            requestAnimationFrame(animateScroll);
        }
    };

    // Easing function for smooth scroll animation
    const easeInOutQuad = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
    };


    return (
        <div className='container mt-16 '>
            <Headline parent='Interview' child='Guid' short='Company'></Headline>
            <div className='px-5 mb-10 relative  '>
                <div className='flex gap-3 mt-4 overflow-hidden  ' ref={interviewRef}>
                    {interview.map((tutorial) => (
                        // eslint-disable-next-line jsx-a11y/anchor-is-valid
                        <a
                            key={tutorial.id}
                            href='#'
                            className='shadow-sm rounded transition ease-in-out delay-50 hover:-translate-y-2 hover:scale-40 duration-400'
                        >
                            <div className='w-[130px] h-36 rounded bg-slate-100 hover:bg-slate-200 flex flex-col items-center justify-center'>
                                <div>
                                    <img className='w-[70px] h-[70px]' src={tutorial.img} alt='' />
                                </div>
                                <div className='text-black mt-1 font-verdina text-sm'>
                                    {tutorial.title}
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
                <button
                    className='absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-200 text-black p-2 rounded-full'
                    onClick={() => scroll(-100)}
                >
                    {'<'}
                </button>
                <button
                    className='absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-200 text-black p-2 rounded-full'
                    onClick={() => scroll(100)}
                >
                    {'>'}
                </button>
            </div>
        </div>
    );
};

export default Interview;
