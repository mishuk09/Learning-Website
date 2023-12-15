import React from 'react';
import './Navbar.css';
import mainlogo from './img/mainlogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpenReader, faBriefcase, faBullseye, faC, faCode, faDatabase, faLayerGroup, faMagnifyingGlass, faPeopleArrows, faServer, faUser } from '@fortawesome/free-solid-svg-icons';
import html from './img/html.png';
import css from './img/css.png';
import js from './img/js.png';
import react from './img/react.png';
import nodejs from './img/nodejs.png';
import java from './img/java.png';
import py from './img/py.png';
import c from './img/c.png';
import cc from './img/cc.png';
import ccc from './img/css.png';
import dsa from './img/dsa.png';
import rbms from './img/rbms.png';
import sql from './img/sql.png';
import interview from './img/interview.png';
import jobs from './img/job.png';
import Switch from '@mui/material/Switch';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import WbSunnyIcon from '@mui/icons-material/WbSunny';



const Navbar = ({ darkMode, toggleDarkMode }) => {
    const navItem = [
        {
            id: 1,
            logo: c,
            name: 'C',
            href: '/c',

        },
        {
            id: 2,
            logo: cc,
            name: 'C++',
            href: '/c++',

        },
        {
            id: 3,
            logo: ccc,
            name: 'C#',
            href: '/c#',

        },
        {
            id: 4,
            logo: html,
            name: 'HTML',
            href: '/html',

        },
        {
            id: 5,
            logo: css,
            name: 'CSS',
            href: '/css',

        },
        {
            id: 6,
            logo: js,
            name: 'JAVASCRIPT',
            href: '/javascript',

        },
        {
            id: 7,
            logo: java,
            name: 'JAVA',
            href: '/java',

        },
        {
            id: 8,
            logo: py,
            name: 'PYTHON',
            href: '/python',

        },
        {
            id: 9,
            logo: react,
            name: 'REACT',
            href: '/react',

        },
        {
            id: 10,
            logo: nodejs,
            name: 'NODE JS',
            href: '/nodejs',

        },
        {
            id: 11,
            logo: rbms,
            name: 'RBMS',
            href: '/rbms',

        },
        {
            id: 12,
            logo: sql,
            name: 'SQL',
            href: '/sql',

        },
        {
            id: 13,
            logo: dsa,
            name: 'DATA STRUCTURE',
            href: '/datastructure',

        },
        {
            id: 14,
            logo: interview,
            name: 'INTERVIEW',
            href: '/html',

        },
        {
            id: 15,
            logo: jobs,
            name: 'JOBS',
            href: '/jobs',

        }

    ]


    return (
        <div>
            <div className='  bg-slate-950 h-16 sm:h-[200px]  md:h-[200px] lg:h-16 '>
                <div className='container h-16 sm:flex-col  lg:flex-row  flex justify-between items-center'>
                    <div className='items-stretch sm:mt-2 lg:mt-0 '><img src={mainlogo} className='w-[250px]  ' alt="logo" /></div>
                    <div className=' text-center justify-center   sm:mt-2   lg:mt-0    items-center w-[100%]'> <input type="text" className='rounded w-[50%] h-7 px-2   outline-none' /> <button className='rounded mt-0 bg-white text-black text-sm h-7 px-4 '>  <FontAwesomeIcon icon={faMagnifyingGlass} /></button>  </div>
                    <div className='flex justify-between sm:mt-2 sm:w-[50%] lg:mt-0 lg:w-[70%]  items-center w-[60%]'>
                        <div className='me-3 pb-1  navbar-icon items-center text-center text-sm text-white'><FontAwesomeIcon className=' fa-icon' icon={faBookOpenReader} /><br />  Learn </div>
                        <div className='me-3 pb-1 navbar-icon items-center text-center text-sm text-white'><FontAwesomeIcon className='fa-icon  ' icon={faBullseye} /><br />Practice</div>
                        <div className='me-3 pb-1 navbar-icon items-center text-center text-sm text-white'><FontAwesomeIcon className='fa-icon ' icon={faBriefcase} /><br />Jobs</div>
                        <div className='me-3 pb-1 navbar-icon items-center text-center text-sm text-white'><FontAwesomeIcon className='fa-icon' icon={faPeopleArrows} /><br />Interview</div>
                        <div className='me-3 pb-1 navbar-icon items-center text-center text-sm text-white'><FontAwesomeIcon className='fa-icon' icon={faCode} /><br />Online IDE</div>
                        <div className='me-3 pb-1  darkmode-toggle   items-center text-center text-sm text-white'>
                            <Switch
                                className='items-center text-center '
                                checked={darkMode}
                                onChange={toggleDarkMode}
                                icon={<Brightness4Icon />}
                                checkedIcon={<WbSunnyIcon className={darkMode ? 'sunny-dark' : ''} />}
                            />
                        </div>
                        <div className='me-3  ms-3 items-center   text-center   text-white'> <FontAwesomeIcon icon={faUser} size='2xl' /></div>


                    </div>
                </div>
            </div>

            <div className='  w-[100%] flex nav-item   overflow-x-hidden'>
                {navItem.map((navitem) => (
                    <a
                        key={navitem.id}
                        href={navitem.href}
                        className=' px-2 py-2 text-slate-200 whitespace-nowrap justify-center items-center'
                    >

                        <span className='flex font-verdina flex-row justify-center items-center mx-2'>  <img className='w-4 h-4 me-1' src={navitem.logo} alt="" /> {navitem.name}</span>

                    </a>
                ))}
            </div>
        </div>
    );
};

export default Navbar;