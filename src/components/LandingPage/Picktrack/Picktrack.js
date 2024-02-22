import React from 'react';
import code from './img/code.png';
import dsa from './img/dsa.png';
import interview from './img/interview.png';
import job from './img/job.png';
import sql from './img/sql.png';
import Headline from '../../Otherscomponent/Headline';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faCode, faDatabase, faLayerGroup, faPeopleArrows } from '@fortawesome/free-solid-svg-icons';


const Picktrack = () => {
    const pickTrack = [
        {
            id: 1,
            img: <FontAwesomeIcon icon={faCode} className='   p-2 rounded-full  coding-icon34 text-blue-500' size='xl' />,
            link: 'allcourse',
            title: 'Programming'
        },
        {
            id: 2,
            img: <FontAwesomeIcon icon={faLayerGroup} className='   p-2 rounded-full  coding-icon34 text-yellow-500' size='xl' />,
            link: 'dsa',
            title: 'Data Structure'
        },
        {
            id: 3,
            img: <FontAwesomeIcon icon={faPeopleArrows} className='   p-2 rounded-full  coding-icon34 text-purple-500' size='xl' />,
            link: 'interview',
            title: 'Interview'
        },
        {
            id: 4,
            img: <FontAwesomeIcon icon={faBriefcase} className='   p-2 rounded-full  coding-icon34 text-green-500' size='xl' />,
            link: 'jobs',
            title: 'Jobs'
        },
        {
            id: 5,
            img: <FontAwesomeIcon icon={faDatabase} className='   p-2 rounded-full  coding-icon34 text-red-500' size='xl' />,
            link: 'sql',
            title: 'SQL'
        },
        {
            id: 6,
            img: <FontAwesomeIcon icon={faCode} className='   p-2 rounded-full  coding-icon34 text-green-200' size='xl' />,
            link: 'onlineide',
            title: 'Online IDE'
        },

    ]


    return (
        <div className='  bg-green-100  py-4 px-2 rounded'>
            <div className='w-[100%]'><Headline short="Pick" parent='Pick a' child="Track">   </Headline></div>

            <div className='grid gap-2 grid-cols-3 mt-3'>
                {
                    pickTrack.map((pick) => (
                        // eslint-disable-next-line jsx-a11y/anchor-is-valid
                        <Link
                            key={pick.id}
                            to={pick.link}
                            className='rounded flex ps-2  justify-center items-center  bg-white h-[70px] w-[100%] transition ease-in-out delay-100 shadow-sm hover:shadow  hover:-translate-y-1 hover:scale-20 hover:bg-indigo-500 duration-300 '
                        >

                            <div className='w-14   h-14 relative rounded-md bg-black flex items-center justify-center'>
                                {/* <img className='w-10  ' src={pick.img} alt="" /> */}
                                {pick.img}
                            </div>

                            <div className='w-[80%]  ps-4 text-black text-2xl  font-source-sans-3  '>
                                {pick.title}
                            </div>

                        </Link>
                    ))
                }

            </div>
        </div>


    );
};

export default Picktrack;