import { faBookOpenReader, faBug, faCode, faGear, faHandPointer, faMagnifyingGlass, faPeopleArrows, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef, useState } from 'react';
import InterviewTab from './InterviewTab';


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
        <div className='   bg-black '>
            <div className='container flex flex-col items-center pt-4 justify-center text-left'>
                <FontAwesomeIcon className='text-white my-3' icon={faCode} size='xl' beat />
                <h1 className='text-white text-5xl font-bold font-nunito'>Interview Questions <span className='text-green-500'>For All</span> </h1>
                <div className='flex mt-4 items-center justify-center sm:mt-2 lg:mt-0 w-[70%]'>
                    <input
                        type="text"
                        className='rounded w-[50%] h-9 px-2 me-2 outline-none'
                        placeholder='Search Desire Interview Topic...'
                    />
                    <button
                        className='rounded bg-white text-black text-sm h-9 px-4'
                    >
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <div className='flex items-center text-center justify-center  container mt-5 font-nutino text-slate-600'>
                    <div className='me-3 hover:-translate-y-1 hover:scale-105 transition duration-100 hover:bg-green-700 rounded bg-green-600 px-2 py-1 text-gray-200'><FontAwesomeIcon className='pe-2  ' icon={faHandPointer} />Select</div>
                    <div className='me-3 hover:-translate-y-1 hover:scale-110 transition duration-100 hover:bg-green-700 rounded bg-green-600 px-2 py-1 text-gray-200'><FontAwesomeIcon className='pe-1' icon={faBookOpenReader} />Read</div>
                    <div className='me-3 hover:-translate-y-1 hover:scale-110 transition duration-100 hover:bg-green-700 rounded bg-green-600 px-2 py-1 text-gray-200'><FontAwesomeIcon className='pe-1' icon={faPeopleArrows} />Intervies</div>
                    <div className='me-3 hover:-translate-y-1 hover:scale-110 transition duration-100 hover:bg-green-700 rounded bg-green-600 px-2 py-1 text-gray-200   '><FontAwesomeIcon className='pe-1' icon={faThumbsUp} />Get Job</div>

                </div>
                <p className='text-slate-300 w-[50%] text-justify font-nunito mt-3'>Find interview questions on any topic. Choose, read, and prepare for your job interview hassle-free</p>

            </div>
            <div className='container flex flex-col items-center justify-center mt-5'>
                <InterviewTab />
            </div>
        </div>
    );
};

export default Interview;
