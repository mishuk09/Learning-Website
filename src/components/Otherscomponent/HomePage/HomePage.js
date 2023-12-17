import { faBookOpen, faCode, faFilePdf, faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const HomePage = ({ headline, description, image, shortimg, img1, img2 }) => {
    return (
        <div className='container flex w-[100%]  h-[450px]'>
            <div className='w-[50%] headline-div mt-[80px]'>
                <span className='absolute ms-[43%] mt-[-5px]'><img className='w-16' src={shortimg} alt="" /></span>

                <h1 className='text-5xl ms-2 font-source-sans-3'>{headline}</h1>

                <div className='flex container mt-5 font-nutino text-slate-600'>
                    <div className='me-3 hover:-translate-y-1 hover:scale-110 transition duration-100 hover:bg-green-700 rounded bg-green-600 px-2 py-1 text-gray-200'><FontAwesomeIcon className='pe-1' icon={faBookOpen} />Free Course</div>
                    <div className='me-3 hover:-translate-y-1 hover:scale-110 transition duration-100 hover:bg-green-700 rounded bg-green-600 px-2 py-1 text-gray-200'><FontAwesomeIcon className='pe-1' icon={faFilePdf} />PDF</div>
                    <div className='me-3 hover:-translate-y-1 hover:scale-110 transition duration-100 hover:bg-green-700 rounded bg-green-600 px-2 py-1 text-gray-200'><FontAwesomeIcon className='pe-1' icon={faNewspaper} />Article</div>
                    <div className='me-3 hover:-translate-y-1 hover:scale-110 transition duration-100 hover:bg-green-700 rounded bg-green-600 px-2 py-1 text-gray-200   '><FontAwesomeIcon className='pe-2  ' icon={faCode} />Online IDE</div>

                </div>
                <hr className='mt-2' />
                <p className='mt-4 mx-3 font-nunito text-justify'>{description}</p>

                <div className='flex w-full gap-3 container mt-4'>
                    <div><img className='w-[250px] hover:scale-110 delay-50 duration-300 rounded border' src={img1} alt="" /></div>
                    <div><img className='w-[250px] hover:scale-110 delay-50 duration-300 rounded border' src={img2} alt="" /></div>
                </div>

            </div>

            <div className='w-[50%] flex justify-center items-center'>
                <img className='w-[450px] mt-0 pt-0' src={image} alt="" />
            </div>
        </div>
    );
};

export default HomePage;