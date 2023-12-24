import { faBookOpen, faBug, faCode, faFilePdf, faGear, faMagnifyingGlass, faNewspaper, faRunning, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef } from 'react';
import Headline from '../Otherscomponent/Headline';
import OnlineIDEObject from './OnlineIDEObject';
import { Link } from 'react-router-dom';
import Tutorials from '../Otherscomponent/Tutorials/Tutorials';
import Courses from '../Allcourse/Courses';
import Dsa from '../LandingPage/Dsa/Dsa';
import Library from '../LandingPage/Library/Library';
import Dsaproblems from '../LandingPage/Dsaproblems/Dsaproblems';
import Article from '../LandingPage/Article/Article';
import GoToTopButton from '../LandingPage/GoToTopButton/GoToTopButton';

const OnlineIDE = () => {
    const interviewRef = useRef(null);
    
    const inputRef = useRef(null);

    useEffect(() => {
        const placeholderText = 'Search Desired Coding Compiler...';
        let index = 0;
        const intervalId = setInterval(() => {
            index = (index + 1) % (placeholderText.length + 1);
            inputRef.current.placeholder = placeholderText.slice(0, index);
        }, 150);

        return () => clearInterval(intervalId);
    }, []);


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
        <div>


            <div className='bg-black pb-10'>
                <div className='container flex flex-col items-center pt-4 justify-center text-left'>
                    <FontAwesomeIcon className='text-white my-3' icon={faCode} size='xl' beat/>
                    <h1 className='text-white text-5xl font-bold font-nunito'>Online Coding <span className='text-green-500'>Compilers</span> </h1>
                    <div className='flex mt-4 items-center justify-center sm:mt-2 lg:mt-0 w-[70%]'>
                        <input
                            type="text"
                            id="searchInput"
                            ref={inputRef}
                            className='rounded w-[50%] h-9 px-2 me-2 outline-none'
                            placeholder='Search Desire Coding Compiler...'
                        />
                        <button
                            className='rounded bg-white text-black text-sm h-9 px-4'
                        >
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                    <div className='flex items-center text-center justify-center  container mt-5 font-nutino text-slate-600'>
                        <div className='me-3 hover:-translate-y-1 hover:scale-105 transition duration-100 hover:bg-green-700 rounded bg-green-600 px-2 py-1 text-gray-200'><FontAwesomeIcon className='pe-2  ' icon={faCode} />Code</div>
                        <div className='me-3 hover:-translate-y-1 hover:scale-110 transition duration-100 hover:bg-green-700 rounded bg-green-600 px-2 py-1 text-gray-200'><FontAwesomeIcon className='pe-1' icon={faGear} />Run</div>
                        <div className='me-3 hover:-translate-y-1 hover:scale-110 transition duration-100 hover:bg-green-700 rounded bg-green-600 px-2 py-1 text-gray-200'><FontAwesomeIcon className='pe-1' icon={faBug} />Find Bug</div>
                        <div className='me-3 hover:-translate-y-1 hover:scale-110 transition duration-100 hover:bg-green-700 rounded bg-green-600 px-2 py-1 text-gray-200   '><FontAwesomeIcon className='pe-1' icon={faThumbsUp} />Get Output</div>

                    </div>
                    <p className='text-slate-300 w-[50%] text-justify font-nunito mt-3'>Access a powerful online IDE directly on our learning platform, enabling seamless coding without any software installations. Write, compile, and run code in multiple languages within our integrated development environment.  </p>

                </div>

                <div className='container mt-10'>

                    <p className='font-nutino text-md text-blue-500'>Compiler</p>
                    <div className='flex justify-between relative items-center pe-2   '> <h1 className='text-slate-200 font-nunito   font-bold text-5xl  '>Compiler For<span className='text-green-500  '> Coder </span>  </h1>  </div>
                    <div className='px-5 my-10   relative  '>
                        <div className="inline-grid grid-cols-6 gap-3 mt-2">
                            {
                                OnlineIDEObject.map((tutorial) => (

                                    // eslint-disable-next-line jsx-a11y/anchor-has-content

                                    <Link
                                        key={tutorial.id}
                                        to={tutorial.link}
                                        className='shadow-sm rounded  transition ease-in-out delay-50  hover:-translate-y-2 hover:scale-40  duration-400 '
                                    >
                                        <div className='w-[130px] h-36 rounded bg-slate-900 hover:bg-slate-800 flex flex-col items-center justify-center'>
                                            <div>
                                                <img className='w-[70px] h-[70px]' src={tutorial.img} alt="" />
                                            </div>
                                            <div className='text-white mt-2 font-nunito  '>
                                                {tutorial.title}
                                            </div>
                                        </div>

                                    </Link>


                                ))
                            }
                        </div>
                        <button
                            className='absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-200 text-black p-2 rounded-full'
                            onClick={() => scroll(-500)}
                        >
                            {'<'}
                        </button>
                        <button
                            className='absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-200 text-black p-2 rounded-full'
                            onClick={() => scroll(500)}
                        >
                            {'>'}
                        </button>
                    </div>
                </div>



            </div>
            <GoToTopButton />
            <Courses />
            <Dsa />
            <Library />
            <Article />
            <Dsaproblems />

        </div>
    );
};

export default OnlineIDE;