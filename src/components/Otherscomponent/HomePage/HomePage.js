import { faBookOpen, faBrain, faCode, faFilePdf, faNewspaper, faPeopleArrows } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = ({ headline, description, image, shortimg, img1, img2, showImgDiv, showHeadButton, showInterviewDiv }) => {
    return (
        <div className='container flex w-[100%]  h-[450px]'>
            <div className='w-[50%] headline-div mt-[80px]'>
                <span className='absolute ms-[43%] mt-[-5px]'><img className='w-16' src={shortimg} alt="" /></span>

                <h1 className='text-5xl ms-2 font-source-sans-3'>{headline}</h1>
                {showHeadButton &&
                    <div className='flex container mt-5 font-nutino text-slate-600'>
                        <div className='me-3 hover:-translate-y-1 hover:scale-110 transition duration-100 hover:bg-green-700 rounded bg-green-600 px-2 py-1 text-gray-200'><FontAwesomeIcon className='pe-1' icon={faBookOpen} />Free Course</div>
                        <div className='me-3 hover:-translate-y-1 hover:scale-110 transition duration-100 hover:bg-green-700 rounded bg-green-600 px-2 py-1 text-gray-200'><FontAwesomeIcon className='pe-1' icon={faFilePdf} />PDF</div>
                        <div className='me-3 hover:-translate-y-1 hover:scale-110 transition duration-100 hover:bg-green-700 rounded bg-green-600 px-2 py-1 text-gray-200'><FontAwesomeIcon className='pe-1' icon={faNewspaper} />Article</div>
                        <div className='me-3 hover:-translate-y-1 hover:scale-110 transition duration-100 hover:bg-green-700 rounded bg-green-600 px-2 py-1 text-gray-200   '><FontAwesomeIcon className='pe-2  ' icon={faCode} />Online IDE</div>

                    </div>}

                {showInterviewDiv &&
                    <div className="  container  text-start items-start font-nunito  mt-4">

                        <div className='grid grid-cols-2 text-start mt-3 gap-2'>
                            <Link to='/allcourse' className='w-full  flex items-center text-center px-2 font-bold border-2 rounded py-2  border-purple-400 hover:border-3 hover:border-white duration-100 hover:rounded-full text-white h-auto'> <FontAwesomeIcon icon={faBookOpen} className=' me-2 bg-white p-2 rounded-full  coding-icon34 text-blue-500' size='1xl' /> Assessing Proficiencies</Link>
                            <Link to='/practice' className='w-full flex items-center text-center px-2 font-bold border-2 rounded py-2  border-purple-400 hover:border-3 hover:border-white duration-100 hover:rounded-full text-white h-auto'> <FontAwesomeIcon icon={faBrain} className=' me-2 bg-white p-2 rounded-full  coding-icon34 text-red-500' size='1xl' /> Practice</Link>
                            <Link to='/interview' className='w-full  flex items-center text-center px-2 font-bold border-2 rounded py-2  border-purple-400 hover:border-3 hover:border-white duration-100 hover:rounded-full text-white h-auto'> <FontAwesomeIcon icon={faPeopleArrows} className=' me-2 bg-white p-2 rounded-full  coding-icon34 text-blue-500' size='1xl' /> Interview Preparation</Link>
                            <Link to='/onlineide' className='w-full  flex items-center text-center px-2 font-bold border-2 rounded py-2  border-purple-400 hover:border-3 hover:border-white duration-100 hover:rounded-full text-white h-auto'> <FontAwesomeIcon icon={faCode} className=' me-2 bg-white p-2 rounded-full  coding-icon34 text-purple-500' size='1xl' /> Coding Practice</Link>
                        </div>
                        {/* <div  >
                            <a href="#codingpractice">
                                <div className="w-[100%] cursor-pointer hover:-translate-y-1 duration-300 font-bold  flex  rounded-md  h-[60px]     border-purple-400  border">
                                    <div className='w-[20%] bg-green-600 rounded-l-md text-white items-center justify-center flex flex-col'>
                                        <FontAwesomeIcon className='  ' size='xl' icon={faCode} />
                                    </div>
                                    <div className='w-[80%] text-white ps-2 items-start justify-center flex flex-col'>
                                        Coding Practice
                                        <p className='text-sm font-thin'>Crafting solutions in virtual light       </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="w-[100%] cursor-pointer hover:-translate-y-1 duration-300 font-bold  flex  rounded-md  h-[60px]   border">
                            <div className='w-[20%] bg-green-600 rounded-l-md text-white items-center justify-center flex flex-col'>
                                <FontAwesomeIcon className='  ' size='xl' icon={faPeopleArrows} />
                            </div>
                            <div className='w-[80%] text-white  ps-2 items-start justify-center flex flex-col'>
                                Interview Preparation
                                <p className='text-sm font-thin'>Ready yourself for success.       </p>
                            </div>
                        </div>

                        <div className="col-span-2  cursor-pointer hover:-translate-y-1 duration-300 w-[100%] font-bold  flex  rounded-md  h-[60px]   border">
                            <div className='w-[10%] bg-green-600 rounded-l-md text-white items-center justify-center flex flex-col'>
                                <FontAwesomeIcon className='  ' size='xl' icon={faBrain} />
                            </div>
                            <div className='w-[90%] text-white ps-2 items-start justify-center flex flex-col'>
                                Assessing Proficiencies
                                <p className='text-sm  font-thin'>Assess strengths, elevate skills,
                                    Achieve excellence in every test</p>
                            </div>
                        </div> */}

                    </div>
                }

                {/* <hr className='mt-2' /> */}
                <p className='mt-4 mx-3 font-nunito text-justify'>{description}</p>
                {showImgDiv &&
                    <div className='flex w-full gap-3 container mt-4'>
                        <div><img className='w-[250px] hover:scale-110 delay-50 duration-300 rounded border' src={img1} alt="" /></div>
                        <div><img className='w-[250px] hover:scale-110 delay-50 duration-300 rounded border' src={img2} alt="" /></div>
                    </div>}

            </div>

            <div className='w-[50%] flex justify-center items-center'>
                <img className='w-[450px] mt-0 pt-0' src={image} alt="" />
            </div>
        </div>
    );
};

export default HomePage;