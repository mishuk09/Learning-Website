import React, { useRef } from 'react';
import Headline from '../Otherscomponent/Headline';
import interview from '../Otherscomponent/interview';

const Interview = () => {
    const scrollRef = useRef(null);

    const scroll = (scrollOffset) => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo({
                left: scrollRef.current.scrollLeft + scrollOffset,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className='container mt-10 '>
             <Headline   parent='Interview' child="Guid" short='Company'></Headline>
        <div className=' px-5  mb-10 relative'>
           
            <div
                ref={scrollRef}
                className='flex gap-3    mt-2 overflow-hidden   w-full'
                style={{ scrollBehavior: 'smooth', overflowX: 'auto' }}
            >
                {
                    interview.map((tutorial) => (

                        // eslint-disable-next-line jsx-a11y/anchor-has-content

                        // eslint-disable-next-line jsx-a11y/anchor-is-valid
                        <a
                            key={tutorial.id}
                            href="#"
                            className=' shadow-sm rounded     delay-50  hover:scale-110   duration-400'
                        >
                            <div className='w-[130px] h-36  rounded bg-slate-100 flex flex-col items-center justify-center'>
                                <div>
                                    <img className='w-[70px] h-[70px]' src={tutorial.img} alt="" />
                                </div>
                                <div className='text-black mt-1 font-serif text-sm'>
                                    {tutorial.title}
                                </div>
                            </div>

                        </a>


                    ))
                }
            </div>
            <button
                onClick={() => scroll(-150)} // Adjust the scroll amount as needed
                className='absolute left-0 top-1/3  transform   bg-gray-200 p-2 rounded-full'
            >
                {'<'}
            </button>
            <button
                onClick={() => scroll(150)} // Adjust the scroll amount as needed
                className='absolute right-0 top-1/3 transform   bg-gray-200 p-2 rounded-full'
            >
                {'>'}
            </button>
        </div>
        </div>
    );
};

export default Interview;
