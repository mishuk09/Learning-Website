import React, { useRef } from 'react';
import Headline from '../Otherscomponent/Headline';
import interview from '../Otherscomponent/interview';

const Interview = () => {


    return (
        <div className='container mt-16 '>
            <Headline parent='Interview' child="Guid" short='Company'></Headline>
            <div className=' px-5  mb-10 relative'>

                <div className="flex gap-3 mt-4"


                >
                    {
                        interview.map((tutorial) => (

                            // eslint-disable-next-line jsx-a11y/anchor-has-content

                            <a
                                key={tutorial.id}
                                href="#"
                                className='shadow-sm rounded  transition ease-in-out delay-50  hover:-translate-y-2 hover:scale-40  duration-400 '
                            >
                                <div className='w-[130px] h-36 rounded bg-slate-100 hover:bg-slate-200 flex flex-col items-center justify-center'>
                                    <div>
                                        <img className='w-[70px] h-[70px]' src={tutorial.img} alt="" />
                                    </div>
                                    <div className='text-black mt-1 font-verdina text-sm'>
                                        {tutorial.title}
                                    </div>
                                </div>

                            </a>


                        ))
                    }
                </div>

            </div>
        </div>
    );
};

export default Interview;
