import React from 'react';
import html from './img/html.png';

const TutorialHeadlineFormat = () => {
    return (

        <div className='py-6 w-full bg-slate-900 h-full rounded-t  text-center flex flex-col justify-center items-center'>
            <img className='w-[100px]' src={html} alt="" />
            <p className='text-slate-100 font-nunito font-bold text-2xl'>HTML</p>
            <p className='text-slate-100  bg-slate-800 w-full h-10 mt-4 text-center items-center justify-center flex font-nunito'>Programming Language</p>
        </div>



    );
};

export default TutorialHeadlineFormat;