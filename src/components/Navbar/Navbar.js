import React from 'react';
import './Navbar.css';
import mainlogo from './img/mainlogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBookOpenReader, faBriefcase, faBullseye, faCode, faHouse, faMagnifyingGlass, faPeopleArrows } from '@fortawesome/free-solid-svg-icons';



const Navbar = () => {
    return (
        <div className='  bg-slate-950 h-20  '>
            <div className='container h-20   flex justify-between items-center'>
                <div className='items-stretch  '><img src={mainlogo} className='w-[150px]  ' alt="logo" /></div>
                <div className='  items-center'> <input type="text" className='rounded w-[400px] h-7 px-2   outline-none' /> <button className='rounded bg-white text-sm h-7 px-4 '>  <FontAwesomeIcon icon={faMagnifyingGlass} /></button>  </div>
                <div className='flex justify-between items-center'>
                    <div className='me-3 navbar-icon items-center text-center text-sm text-white'><FontAwesomeIcon className=' navbar-icon' icon={faBookOpenReader} /><br />  Learn </div>
                    <div className='me-3 navbar-icon items-center text-center text-sm text-white'><FontAwesomeIcon className='hover:text-blue-400' icon={faBullseye} /><br />Practice</div>
                    <div className='me-3 navbar-icon items-center text-center text-sm text-white'><FontAwesomeIcon className='hover:text-blue-400' icon={faBriefcase} /><br />Jobs</div>
                    <div className='me-3 navbar-icon items-center text-center text-sm text-white'><FontAwesomeIcon className='hover:text-blue-400' icon={faPeopleArrows} /><br />Interview</div>
                    <div className='me-3 navbar-icon items-center text-center text-sm text-white'><FontAwesomeIcon className='hover:text-blue-400' icon={faCode} /><br />Online IDE</div>
                    <div className='me-3  ms-3 items-center   text-center   text-white'> <FontAwesomeIcon icon={faBars} size='2xl' /></div>


                </div>
            </div>
        </div>
    );
};

export default Navbar;