import React from 'react';
import './Home.css';
import home from './img/home.png';
import rocket from './img/rocket.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faCode, faFilePdf, faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='bg-slate-950 relative pb-20'>
            <div className='container flex w-[100%] text-slate-300 h-[450px]'>
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



            </div>
        </div>
    );
};

export default Home;