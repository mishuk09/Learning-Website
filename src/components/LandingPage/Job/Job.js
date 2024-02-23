import React from 'react';
import Headline from '../../Otherscomponent/Headline';
import Jobs from '../../Otherscomponent/Job/Jobs';

const Job = () => {
    return (
        <div className='container mt-20 mb-20'>
            <Headline parent='Geting' child='Jobs' short='Jobs'></Headline>
            <p className=' font-nunito mt-1'>Find Your Dream Company & Get Internships  Part Time/Full Time Jobs.....</p>
            <div className='flex gap-3 mt-4'>
                {
                    Jobs.map((job) => (
                        // eslint-disable-next-line jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid
                        <a
                            key={job.id}
                            href=""
                            className='transition ease-in-out delay-50  hover:-translate-y-2 hover:scale-40  duration-400 '
                        >
                            <img className='w-[100%]   rounded' src={job.img} alt="" />
                        </a>
                    ))
                }
            </div>
        </div>
    );
};

export default Job;