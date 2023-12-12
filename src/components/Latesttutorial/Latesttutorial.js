/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Seemore from '../Otherscomponent/Seemore';
import Headline from '../Otherscomponent/Headline';
import c from './img/c.svg';
import cc from './img/cc.png';
import csharp from './img/csharp.png';
import html from './img/html.png';
import css from './img/css.png';
import javascript from './img/javascript.png';
import java from './img/java.png';
import python from './img/python.png';
import react from './img/react.png';
import nodejs from './img/nodejs.png';
import sql from './img/sql.png';
import dbms from './img/dbms.png';

const Latesttutorial = () => {
    const tutotials = [
        {
            id: 1,
            img: c,
            title: 'C'
        },
        {
            id: 2,
            img: cc,
            title: 'C++'
        },
        {
            id: 3,
            img: csharp,
            title: 'C#'
        },
        {
            id: 4,
            img: html,
            title: 'HTML'
        },
        {
            id: 5,
            img: css,
            title: 'CSS'
        },
        {
            id: 6,
            img: javascript,
            title: 'JAVASCRIPT'
        },
        {
            id: 7,
            img: java,
            title: 'JAVA'
        },
        {
            id: 8,
            img: python,
            title: 'PYTHON'
        },
        {
            id: 9,
            img: react,
            title: 'REACT JS'
        },
        {
            id: 10,
            img: nodejs,
            title: 'NODE JS'
        },
        {
            id: 11,
            img: sql,
            title: 'SQL'
        },
        {
            id: 12,
            img: dbms,
            title: 'DBMS'
        },
    ]
    return (
        <div className=' mt-10'>
            <Headline className='w-[100%]' parent="Larest" child="Tutorial" short="Code"></Headline>
            <div className="inline-grid grid-cols-6 gap-3">
                {
                    tutotials.map((tutorial) => (

                        // eslint-disable-next-line jsx-a11y/anchor-has-content

                        <a
                            key={tutorial.id}
                            href="#"
                            className='shadow-sm rounded transition ease-in-out delay-200  hover:-translate-y-2 hover:scale-40 duration-400'
                        >
                            <div className='w-[130px] h-36 rounded bg-slate-100 flex flex-col items-center justify-center'>
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