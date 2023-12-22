import React from 'react';
import code from './img/code.png';
import dsa from './img/dsa.png';
import interview from './img/interview.png';
import job from './img/job.png';
import sql from './img/sql.png';
import Headline from '../../Otherscomponent/Headline';


const Picktrack = () => {
    const pickTrack = [
        {
            id: 1,
            img: code,
            title: 'Programming'
        },
        {
            id: 2,
            img: dsa,
            title: 'Data Structure'
        },
        {
            id: 3,
            img: interview,
            title: 'Interview'
        },
        {
            id: 4,
            img: job,
            title: 'Jobs'
        },
        {
            id: 5,
            img: sql,
            title: 'SQL'
        },
        {
            id: 6,
            img: code,
            title: 'Online IDE'
        },

    ]

    return (
        <div className='  mt-4'>
            <div className='w-[100%]'><Headline short="Pick" parent='Pick a' child="Track">   </Headline></div>

            <div className='grid gap-2 grid-cols-3 mt-3'>
                {
                    pickTrack.map((pick) => (
                        // eslint-disable-next-line jsx-a11y/anchor-is-valid
                        <a
                            key={pick.id}
                            href="#"
                            className='rounded flex ps-2  justify-center items-center  bg-blue-500 h-[70px] w-[100%] transition ease-in-out delay-100 shadow-sm hover:shadow  hover:-translate-y-1 hover:scale-20 hover:bg-indigo-500 duration-300 '
                        >

                            <div className='w-14   h-14 relative rounded-full bg-white flex items-center justify-center'>
                                <img className='w-10  ' src={pick.img} alt="" />
                            </div>

                            <div className='w-[80%]  ps-4 text-white text-2xl  font-source-sans-3  '>
                                {pick.title}
                            </div>

                        </a>
                    ))
                }

            </div>
        </div>


    );
};

export default Picktrack;