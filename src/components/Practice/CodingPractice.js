import React from 'react';
import compiler from './img/compiler.png';
import dsapblm from './img/dsapblm.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const CodingPractice = () => {
    const bgimg = [
        {
            id: 1,
            title: "Coding Challenges",
            describe: 'Choose subjects, adjust the challenge level, or even opt for questions tailored to certain companies for a more focused study approach!',

            link: '/ ',
            backgroundImage: `url(${compiler})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',

        },
        {
            id: 2,
            title: "Online Compiler",
            describe: 'Access our user-friendly online compiler for seamless code execution, testing, and debugging across multiple programming languages',
            link: '/onlineide',
            backgroundImage: `url(${dsapblm})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }
    ];

    return (
        <div id='codingpractice' className='  flex gap-3  '>
            {bgimg.map((bg) => (
                <Link
                    key={bg.id}
                    to={bg.link}
                    className='w-full h-[300px] rounded shadow hover:-translate-y-1 duration-300'
                    style={{
                        backgroundImage: bg.backgroundImage,
                        backgroundSize: bg.backgroundSize,
                        backgroundPosition: bg.backgroundPosition,
                    }}
                >
                    <div className='p-4'>
                        <div className='text-3xl font-bold font-nunito w-full text-black'>{bg.title}</div>
                        <div className='text-sm font-bold font-nunito w-[50%] text-justify mt-3 text-slate-700'>{bg.describe}</div>
                        <div className='mt-20 text-black'>
                            <Link className='rounded-full hover:bg-blue-500 hover:text-white duration-300 text-sm   px-3 py-2 border' to={bg.link}>Start Now <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></Link>
                        </div>
                    </div>

                </Link>
            ))}
        </div>
    );
};

export default CodingPractice;
