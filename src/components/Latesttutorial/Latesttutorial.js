/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Seemore from '../Otherscomponent/Seemore';
import Headline from '../Otherscomponent/Headline';
import Tutorials from '../Otherscomponent/Tutorials/Tutorials';

const Latesttutorial = () => {
    
    return (
        <div className=' mt-10'>
            <Headline className='w-[100%]' parent="Latest" child="Tutorial" short="Code"></Headline>
            <div className="inline-grid grid-cols-6 gap-3">
                {
                    Tutorials.map((tutorial) => (

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
                                <div className='text-black mt-1 font-serif text-sm'>
                                    {tutorial.title}
                                </div>
                            </div>

                        </a>


                    ))
                }
            </div>
        </div>
    );
};

export default Latesttutorial;
