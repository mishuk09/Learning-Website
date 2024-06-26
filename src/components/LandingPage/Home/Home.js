import React, { useEffect, useRef } from 'react';
import './Home.css';
import home from './img/home.png';
import rocket from './img/rocket.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faBrain, faBriefcase, faCode, faFilePdf, faMagnifyingGlass, faNewspaper, faPeopleArrows, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Home = () => {

    const inputRef = useRef(null);

    useEffect(() => {
        const placeholderText = 'Search Your Desired Topic...';
        let index = 0;
        const intervalId = setInterval(() => {
            index = (index + 1) % (placeholderText.length + 1);
            inputRef.current.placeholder = placeholderText.slice(0, index);
        }, 150);

        return () => clearInterval(intervalId);
    }, []);
    return (
        <div style={{backgroundColor:'#0e1117'}} className='  relative pb-20 h-[530px]'>
            {/* <div className='container flex w-[100%] text-slate-300 h-[450px]'>
                <div className='w-[50%] headline-div mt-[80px]'>
                    <span className='absolute ms-[38%]'><img className='w-16' src={rocket} alt="" /></span>
                    <h1 className='text-5xl ms-2 font-source-sans-3'>Explore Your Coding Journey
                        With us...</h1>


                    <div className='flex container mt-5 font-nutino text-slate-600'>
                        <Link to='/allcourse' className='me-3 hover:-translate-y-1 hover:scale-110 transition duration-100 hover:bg-green-700 rounded bg-green-600 px-2 py-1 text-gray-200'><FontAwesomeIcon className='pe-1' icon={faBookOpen} />Free Course</Link>
                        <Link to='/interview' className='me-3 hover:-translate-y-1 hover:scale-110 transition duration-100 hover:bg-green-700 rounded bg-green-600 px-2 py-1 text-gray-200'><FontAwesomeIcon className='pe-1' icon={faFilePdf} />PDF</Link>
                        <Link to='/blogs' className='me-3 hover:-translate-y-1 hover:scale-110 transition duration-100 hover:bg-green-700 rounded bg-green-600 px-2 py-1 text-gray-200'><FontAwesomeIcon className='pe-1' icon={faNewspaper} />Article</Link>
                        <Link to='/onlineide' className='me-3 hover:-translate-y-1 hover:scale-110 transition duration-100 hover:bg-green-700 rounded bg-green-600 px-2 py-1 text-gray-200   '><FontAwesomeIcon className='pe-2  ' icon={faCode} />Online IDE</Link>

                    </div>
                    <hr className='mt-2' />
                    <p className='mt-4 mx-3 font-nunito    text-justify'>Explore opportunities from across the globe to learn, showcase skills,
                        gain CV points, & get hired by your dream company.</p>


                </div>

                <div className='w-[50%]  flex justify-center items-center  '>
                    <img className='w-[450px] mt-0 pt-0' src={home} alt="" />
                </div>



            </div> */}

            <div className=' flex flex-col items-center justify-center  text-center'>
                <h1 className='pt-16 text-center text-slate-300 text-5xl font-bold font-sans'>Explore Your Coding Journey
                    With us</h1>
                <p className='mt-4 mx-3 font-nunito text-1xl text-slate-300   text-center'>Explore opportunities from across the globe to learn, showcase skills, <br />
                    gain CV points, & get hired by your dream company.</p>


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
                    <Link to='/allcourse' className='w-[200px] flex items-center text-center px-2 font-bold border-2 rounded py-2  border-purple-400 hover:border-3 hover:border-white duration-100 hover:rounded-full text-white h-auto'> <FontAwesomeIcon icon={faBookOpen} className=' me-2 bg-white p-2 rounded-full  coding-icon34 text-blue-500' size='1xl' /> Learning</Link>
                    <Link to='/practice' className='w-[200px] flex items-center text-center px-2 font-bold border-2 rounded py-2  border-purple-400 hover:border-3 hover:border-white duration-100 hover:rounded-full text-white h-auto'> <FontAwesomeIcon icon={faBrain} className=' me-2 bg-white p-2 rounded-full  coding-icon34 text-blue-500' size='1xl' /> Practice</Link>
                    <Link to='/interview' className='w-[200px] flex items-center text-center px-2 font-bold border-2 rounded py-2  border-purple-400 hover:border-3 hover:border-white duration-100 hover:rounded-full text-white h-auto'> <FontAwesomeIcon icon={faPeopleArrows} className=' me-2 bg-white p-2 rounded-full  coding-icon34 text-blue-500' size='1xl' /> Interview</Link>
                    <Link to='/onlineide' className='w-[200px] flex items-center text-center px-2 font-bold border-2 rounded py-2  border-purple-400 hover:border-3 hover:border-white duration-100 hover:rounded-full text-white h-auto'> <FontAwesomeIcon icon={faCode} className=' me-2 bg-white p-2 rounded-full  coding-icon34 text-blue-500' size='1xl' /> Online IDE</Link>
                </div>

            </div>
        </div>
    );
};

export default Home;