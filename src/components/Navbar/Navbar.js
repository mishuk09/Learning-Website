import React from 'react';
import './Navbar.css';
import mainlogo from './img/mainlogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBookOpenReader, faBriefcase, faBullseye, faCode, faMagnifyingGlass, faPeopleArrows } from '@fortawesome/free-solid-svg-icons';



const Navbar = () => {
    const navItem = [
        {
            id: 1,
            logo: <FontAwesomeIcon className='fa-icon' icon={faCode} />,
            name: 'HTML',
            href: '/html',

        },
        {
            id: 2,
            logo: <FontAwesomeIcon className='fa-icon' icon={faCode} />,
            name: 'HTML',
            href: '/html',

        },
        {
            id: 3,
            logo: <FontAwesomeIcon className='fa-icon' icon={faCode} />,
            name: 'HTML',
            href: '/html',

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
            <div className='  bg-slate-950 h-20 sm:h-[200px]  md:h-[200px] lg:h-20 '>
                <div className='container h-20 sm:flex-col  lg:flex-row  flex justify-between items-center'>
                    <div className='items-stretch sm:mt-2 lg:mt-0 '><img src={mainlogo} className='w-[250px]  ' alt="logo" /></div>
                    <div className=' text-center sm:mt-2   lg:mt-0    items-center w-[100%]'> <input type="text" className='rounded w-[50%] h-7 px-2   outline-none' /> <button className='rounded bg-white text-sm h-7 px-4 '>  <FontAwesomeIcon icon={faMagnifyingGlass} /></button>  </div>
                    <div className='flex justify-between sm:mt-2 sm:w-[50%] lg:mt-0 lg:w-[60%]  items-center w-[60%]'>
                        <div className='me-3 pb-1  navbar-icon items-center text-center text-sm text-white'><FontAwesomeIcon className=' fa-icon' icon={faBookOpenReader} /><br />  Learn </div>
                        <div className='me-3 pb-1 navbar-icon items-center text-center text-sm text-white'><FontAwesomeIcon className='fa-icon  ' icon={faBullseye} /><br />Practice</div>
                        <div className='me-3 pb-1 navbar-icon items-center text-center text-sm text-white'><FontAwesomeIcon className='fa-icon ' icon={faBriefcase} /><br />Jobs</div>
                        <div className='me-3 pb-1 navbar-icon items-center text-center text-sm text-white'><FontAwesomeIcon className='fa-icon' icon={faPeopleArrows} /><br />Interview</div>
                        <div className='me-3 pb-1 navbar-icon items-center text-center text-sm text-white'><FontAwesomeIcon className='fa-icon' icon={faCode} /><br />Online IDE</div>
                        <div className='me-3  ms-3 items-center   text-center   text-white'> <FontAwesomeIcon icon={faBars} size='2xl' /></div>


                    </div>
                </div>
            </div>

            <div className='bg-green-600 w-[100%] flex    overflow-x-hidden'>
                {navItem.map((navitem) => (
                    <a
                        key={navitem.id}
                        href={navitem.href}
                        className='mx-2 py-2  whitespace-nowrap'
                    >
                        {navitem.logo}
                        {navitem.name}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Navbar;