import React from 'react';
import './Navbar.css';
import mainlogo from './img/mainlogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBookOpenReader, faBriefcase, faBullseye, faCode, faMagnifyingGlass, faPeopleArrows, faUser } from '@fortawesome/free-solid-svg-icons';



const Navbar = () => {
    const navItem = [
        {
            id: 1,
            logo: <FontAwesomeIcon icon={faBars} />,
            name: 'C',
            href: '/c',

        },
        {
            id: 2,
            logo: <FontAwesomeIcon className='fa-icon' icon={faCode} />,
            name: 'C++',
            href: '/c++',

        },
        {
            id: 3,
            logo: <FontAwesomeIcon icon="fa-brands fa-react" />,
            name: 'C#',
            href: '/c#',

        },
        {
            id: 4,
            logo: <FontAwesomeIcon className='fa-icon' icon={faCode} />,
            name: 'HTML',
            href: '/html',

        },
        {
            id: 5,
            logo: <FontAwesomeIcon className='fa-icon' icon={faCode} />,
            name: 'CSS',
            href: '/css',

        },
        {
            id: 5,
            logo: <FontAwesomeIcon className='fa-icon' icon={faCode} />,
            name: 'JAVASCRIPT',
            href: '/javascript',

        },
        {
            id: 5,
            logo: <FontAwesomeIcon className='fa-icon' icon={faCode} />,
            name: 'JAVA',
            href: '/java',

        },
        {
            id: 5,
            logo: <FontAwesomeIcon className='fa-icon' icon={faCode} />,
            name: 'PYTHON',
            href: '/python',

        },
        {
            id: 5,
            logo: <FontAwesomeIcon className='fa-icon' icon={faCode} />,
            name: 'REACT',
            href: '/react',

        },
        {
            id: 5,
            logo: <FontAwesomeIcon className='fa-icon' icon={faCode} />,
            name: 'NODE JS',
            href: '/nodejs',

        },
        {
            id: 5,
            logo: <FontAwesomeIcon className='fa-icon' icon={faCode} />,
            name: 'RBMS',
            href: '/rbms',

        },
        {
            id: 5,
            logo: <FontAwesomeIcon className='fa-icon' icon={faCode} />,
            name: 'SQL',
            href: '/sql',

        },
        {
            id: 5,
            logo: <FontAwesomeIcon className='fa-icon' icon={faCode} />,
            name: 'DATA STRUCTURE',
            href: '/datastructure',

        },
        {
            id: 5,
            logo: <FontAwesomeIcon className='fa-icon' icon={faCode} />,
            name: 'INTERVIEW',
            href: '/html',

        },
        {
            id: 5,
            logo: <FontAwesomeIcon className='fa-icon' icon={faCode} />,
            name: 'JOBS',
            href: '/jobs',

        },
        {
            id: 5,
            logo: <FontAwesomeIcon className='fa-icon' icon={faCode} />,
            name: 'HTML',
            href: '/html',

        },
        {
            id: 5,
            logo: <FontAwesomeIcon className='fa-icon' icon={faCode} />,
            name: 'HTML',
            href: '/html',

        },
        {
            id: 5,
            logo: <FontAwesomeIcon className='fa-icon' icon={faCode} />,
            name: 'HTML',
            href: '/html',

        },

    ]


    return (
        <div>
            <div className='  bg-slate-950 h-16 sm:h-[200px]  md:h-[200px] lg:h-16 '>
                <div className='container h-16 sm:flex-col  lg:flex-row  flex justify-between items-center'>
                    <div className='items-stretch sm:mt-2 lg:mt-0 '><img src={mainlogo} className='w-[250px]  ' alt="logo" /></div>
                    <div className=' text-center sm:mt-2   lg:mt-0    items-center w-[100%]'> <input type="text" className='rounded w-[50%] h-7 px-2   outline-none' /> <button className='rounded bg-white text-sm h-7 px-4 '>  <FontAwesomeIcon icon={faMagnifyingGlass} /></button>  </div>
                    <div className='flex justify-between sm:mt-2 sm:w-[50%] lg:mt-0 lg:w-[60%]  items-center w-[60%]'>
                        <div className='me-3 pb-1  navbar-icon items-center text-center text-sm text-white'><FontAwesomeIcon className=' fa-icon' icon={faBookOpenReader} /><br />  Learn </div>
                        <div className='me-3 pb-1 navbar-icon items-center text-center text-sm text-white'><FontAwesomeIcon className='fa-icon  ' icon={faBullseye} /><br />Practice</div>
                        <div className='me-3 pb-1 navbar-icon items-center text-center text-sm text-white'><FontAwesomeIcon className='fa-icon ' icon={faBriefcase} /><br />Jobs</div>
                        <div className='me-3 pb-1 navbar-icon items-center text-center text-sm text-white'><FontAwesomeIcon className='fa-icon' icon={faPeopleArrows} /><br />Interview</div>
                        <div className='me-3 pb-1 navbar-icon items-center text-center text-sm text-white'><FontAwesomeIcon className='fa-icon' icon={faCode} /><br />Online IDE</div>
                        <div className='me-3  ms-3 items-center   text-center   text-white'> <FontAwesomeIcon icon={faUser} size='2xl' /></div>


                    </div>
                </div>
            </div>

            <div className='  w-[100%] flex nav-item   overflow-x-hidden'>
                {navItem.map((navitem) => (
                    <a
                        key={navitem.id}
                        href={navitem.href}
                        className='px-2 py-2 text-white whitespace-nowrap'
                    >
                        {/* {navitem.logo} */}
                        {navitem.name}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Navbar;