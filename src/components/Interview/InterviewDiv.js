import React, { useEffect, useRef } from 'react';
import './InterviewDiv.css'
import HomePage from '../Otherscomponent/HomePage/HomePage';
import interviewimg from './img/interviewimg.png';
import Interview from '../LandingPage/Interview/Interview';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpenReader, faCode, faHandPointer, faMagnifyingGlass, faPeopleArrows, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import InterviewObject from './InterviewObject';

const InterviewDiv = () => {

    const inputRef = useRef(null);

    useEffect(() => {
        const placeholderText = 'Search Desired Interview Topic...';
        let index = 0;
        const intervalId = setInterval(() => {
            index = (index + 1) % (placeholderText.length + 1);
            inputRef.current.placeholder = placeholderText.slice(0, index);
        }, 150);

        return () => clearInterval(intervalId);
    }, []);
    return (
        <div className='relative h-[600px] mb-[600px]  bg-black '>
            <div className='container flex flex-col items-center pt-4 justify-center text-left'>
                <FontAwesomeIcon className='text-white my-3' icon={faCode} size='xl' beat />
                <h1 className='text-white text-5xl font-bold font-nunito'>Interview Questions <span className='text-green-500'>For All</span> </h1>
                <div className='flex mt-4 items-center justify-center sm:mt-2 lg:mt-0 w-[70%]'>
                    <input
                        type="text"
                        id="searchInput"
                        ref={inputRef}
                        className='rounded w-[50%] h-9 px-2 me-2 outline-none'
                        placeholder='Search Desired Interview Topic...'
                    />


                    <button
                        className='rounded bg-white text-black text-sm h-9 px-4  '
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
                <div className='   shadow absolute flex flex-col items-center justify-center top-[380px]'>
                    <InterviewObject />
                </div>
            </div>

        </div>
    );
};

export default InterviewDiv;