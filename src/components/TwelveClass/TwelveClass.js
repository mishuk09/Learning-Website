import React from 'react';
import ict from './img/ict.png';
import biology from './img/biology.png';
import math from './img/math.png';
import chemistry from './img/chemistry.png';
import physic from './img/physic.png';
import Ict from './Ict/Ict';
import Article from '../LandingPage/Article/Article';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faBrain, faBriefcase, faCode, faMagnifyingGlass, faPeopleArrows, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const TwelveClass = () => {
    const subjects = [
        {
            id: 1,
            img: ict,
            title: "তথ্য ও যোগাযোগ প্রযুক্তি"
        },
        {
            id: 2,
            img: math,
            title: "উচ্চতর গণিত ১ম পত্র"
        },
        {
            id: 3,
            img: math,
            title: "উচ্চতর গণিত ২য় পত্র"
        },
        {
            id: 4,
            img: physic,
            title: "পদার্থ   ১ম পত্র"
        },
        {
            id: 5,
            img: physic,
            title: "পদার্থ ২য় পত্র"
        },
        {
            id: 6,
            img: chemistry,
            title: "রষায়ন ১ম পত্র"
        },
        {
            id: 7,
            img: chemistry,
            title: " রষায়ন ২য় পত্র"
        },
        {
            id: 8,
            img: biology,
            title: "জীববিজ্ঞান ১ম পত্র"
        },
        {
            id: 5,
            img: biology,
            title: "জীববিজ্ঞান ২য় পত্র"
        },
        {
            id: 5,
            img: biology,
            title: "বাংলা ১ম পত্র"
        },
        {
            id: 5,
            img: biology,
            title: "বাংলা ২য় পত্র"
        },
        {
            id: 5,
            img: biology,
            title: "ইংরেজি ২য় পত্র"
        },
    ]

    return (
        <div>
            <div style={{ backgroundColor: '#0e1117' }} className='  relative pb-20 h-[530px]'>

                <div className=' flex flex-col items-center justify-center  text-center'>
                    <h1 className='pt-16 text-center text-slate-300 text-5xl font-bold font-sans'> Higher School Certificate Exam
                       </h1>
                    <p className='mt-4 mx-3 font-nunito text-1xl text-slate-300   text-center'>Explore opportunities from across the globe to learn, showcase skills, <br />
                        gain CV points, & get hired by your dream company.</p>


                    <div className='flex items-center justify-center  text-center sm:mt-2 lg:mt-6 w-[60%]'>
                        <input
                            type="text"
                            id="searchInput"
                            // ref={inputRef}
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
            <div className='  mt-[430px] flex  justify-center items-center '>

                <div className='absolute text-slate-200 border font-noto-sans-bengali   font-bold rounded  grid grid-cols-4 gap-3  p-3  justify-between  container  bg-slate-950 w-[100%] h-[500px] left-1/2 transform -translate-x-1/2 -translate-y-1/2' >
                    {subjects.map((subject) => (
                        // eslint-disable-next-line jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid
                        <a
                            key={subject.id}
                            href=""
                            className='flex rounded shadow-sm hover:-translate-y-2 duration-300 hover:bg-slate-700  flex-col bg-slate-800 items-center text-center justify-center p-2 pt-2   '

                        >
                            <div><img className='w-20' src={subject.img} alt="" /></div>
                            {subject.title}


                        </a>
                    ))
                    }
                </div>
            </div>
            <div className='  bg-gradient-to-b from-slate-900 to-black'>
                <div className='  '>
                    <Ict />
                </div>
            </div>
            <Article />



        </div>
    );
};

export default TwelveClass;