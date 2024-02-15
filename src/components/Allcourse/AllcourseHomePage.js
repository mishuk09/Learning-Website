import React, { useEffect, useRef } from 'react';
import HomePage from '../Otherscomponent/HomePage/HomePage';
import tutorialimg from './img/tutorialimg.png';
import bookimg from './img/bookimg.png';
import course from './img/course.png';
import certificate from './img/certificate.png';
import Courses from './Courses';
import GoToTopButton from '../LandingPage/GoToTopButton/GoToTopButton';
import Dsa from '../LandingPage/Dsa/Dsa';
import Library from '../LandingPage/Library/Library';
import Article from '../LandingPage/Article/Article';
import Dsaproblems from '../LandingPage/Dsaproblems/Dsaproblems';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faBrain, faBriefcase, faCode, faDatabase, faLayerGroup, faMagnifyingGlass, faPeopleArrows, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { faStackpath } from '@fortawesome/free-brands-svg-icons';
import Shortcourse from './Shortcourse';


const AllcourseHomePage = () => {
    const headline = 'Choose Your Subject & Start Learning...';
    const description = 'We are providing  Many programming language as well as coding experience and latest technology  news and  article for you.';
    const inputRef = useRef(null);

    useEffect(() => {
        const placeholderText = 'Search Your Desired Tutorial...';
        let index = 0;
        const intervalId = setInterval(() => {
            index = (index + 1) % (placeholderText.length + 1);
            inputRef.current.placeholder = placeholderText.slice(0, index);
        }, 150);

        return () => clearInterval(intervalId);
    }, []);
    return (
        <div className=' '>
            <div style={{ backgroundColor: '#0e1117' }} className='  relative pb-20 h-[530px]'>

                <div className=' flex flex-col items-center justify-center  text-center'>
                    <h1 className='pt-16 text-center text-slate-300 text-5xl font-bold font-sans'>Choose Your Subject & Start Learning...</h1>
                    <p className='mt-4 mx-3 font-nunito text-1xl text-slate-300   text-center'>We are providing  Many programming language as well as coding experience <br /> and latest technology  news and  article for you.</p>


                    <div className='flex items-center justify-center  text-center sm:mt-2 lg:mt-6 w-[60%]'>
                        <input
                            type="text"
                            id="searchInput"
                            ref={inputRef}
                            className='  w-[50%] h-10 px-2  rounded-l outline-none'
                        />
                        <button
                            className='  bg-blue-600 text-slate-300 text-sm h-10 px-4 w-28 rounded-r items-center text-center justify-center'
                        >
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                    <div className='flex  w-[50%]   items-center mt-3'>
                        <div className=' text-white   font-bold text-xl      '>   <span> &lt;/&gt;</span></div>
                        <div className=' h-1 rounded-sm me-2 bg-gradient-to-r from-slate-950 to-blue-600  w-full  '>   </div>
                        <div className=' text-slate-300 me-2  font-bold text-xl  '>
                            <FontAwesomeIcon icon={faUserGraduate} className='    text-white' size='1xl' />
                        </div>
                        <div className=' h-1 rounded-sm bg-gradient-to-l from-slate-950 to-blue-600 w-100  '>   </div>
                        <div className='  '>  <FontAwesomeIcon icon={faBriefcase} className='     text-white' size='1xl' /></div>
                    </div>
                    <div className='grid grid-cols-2 text-start mt-3 gap-2'>
                        <a href='#courses' className='w-[200px] flex items-center text-center px-2 font-bold border-2 rounded py-2  border-purple-400 hover:border-3 hover:border-white duration-100 hover:rounded-full text-white h-auto'> <FontAwesomeIcon icon={faBookOpen} className=' me-2 bg-white p-2 rounded-full  coding-icon34 text-blue-500' size='1xl' /> Free Tutorials</a>
                        <a href='#courses' className='w-[200px] flex items-center text-center px-2 font-bold border-2 rounded py-2  border-purple-400 hover:border-3 hover:border-white duration-100 hover:rounded-full text-white h-auto'> <FontAwesomeIcon icon={faCode} className=' me-2 bg-white p-2 rounded-full  coding-icon34 text-blue-500' size='1xl' /> Programming</a>
                        <a href='#dsa' className='w-[200px] flex items-center text-center px-2 font-bold border-2 rounded py-2  border-purple-400 hover:border-3 hover:border-white duration-100 hover:rounded-full text-white h-auto'> <FontAwesomeIcon icon={faLayerGroup} className=' me-2 bg-white p-2 rounded-full  coding-icon34 text-blue-500' size='1xl' /> DSA</a>
                        <a href='#library' className='w-[200px] flex items-center text-center px-2 font-bold border-2 rounded py-2  border-purple-400 hover:border-3 hover:border-white duration-100 hover:rounded-full text-white h-auto'> <FontAwesomeIcon icon={faDatabase} className=' me-2 bg-white p-2 rounded-full  coding-icon34 text-blue-500' size='1xl' /> Library</a>
                    </div>

                </div>
            </div>
            <Shortcourse />
            {/* <HomePage headline={headline} showHeadButton={true} description={description} image={tutorialimg} shortimg={bookimg} img1={course} img2={certificate} ></HomePage> */}
            <Courses />
            <Dsa />
            <Library />
            <Dsaproblems />
            <Article />



        </div>
    );
};

export default AllcourseHomePage;