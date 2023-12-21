import React from 'react';

const TutorialHeadlineFormat = (props) => {
    const { logo, name, description } = props;
    return (

        <div className='py-6 w-full bg-slate-900 h-full rounded-t  text-center flex flex-col justify-center items-center'>
            <img className='w-[100px]' src={logo} alt="" />
            <p className='text-slate-100 font-nunito mt-3 font-bold text-2xl'>{name}</p>
            <p className='text-slate-100  bg-slate-800 w-full h-10 mt-4 text-center items-center justify-center flex font-nunito'>{description}</p>
        </div>



    );
};

export default TutorialHeadlineFormat;