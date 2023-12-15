import React from 'react';
import mainlogo from './img/mainlogo.png';
import playstore from './img/playstore.png';
import appstore from './img/appstore.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faCode, faEnvelope, faGears, faHeadset, faLayerGroup, faMap, faPeopleGroup, } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div className='bg-slate-950 mt-16 w-full h-[200px]'>
            <div className='container flex items-center justify-center text-center'>
                <div className='w-full h-full flex flex-col items-center justify-center overflow-hidden'>
                    <div>
                        <img className='w-[150px] py-2 items-center justify-center text-center' src={mainlogo} alt="" />
                    </div>
                    <div className='font-sans text-sm text-slate-200 whitespace-normal py-2 text-start'>
                        CSE Hacks is an online platform where you can learn all about Computer Engineering and Science
                    </div>
                    <div className='flex space-x-0 mt-2'>
                        <img className='w-[140px] m-0 p-0  ' src={playstore} alt="" />
                        <img className='w-[140px] m-0 p-0 ' src={appstore} alt="" />
                    </div>
                </div>
                <div className='w-full  text-slate-200 h-full text-start mt-0'>
                    <p className='font-bold   ps-10 py-4'>About</p>
                    <p className='ps-10 font-serif mt-2'><FontAwesomeIcon className='me-2' icon={faPeopleGroup} />Team</p>
                    <p className='ps-10 font-serif mt-2'><FontAwesomeIcon className='me-2' icon={faHeadset} />Support</p>
                    <p className='ps-10 font-serif mt-2'><FontAwesomeIcon className='me-2' icon={faBriefcase} />Career</p>
                </div>

                <div className='w-full  text-slate-200 h-full text-start mt-0'>
                    <p className='font-bold   ps-10 py-4'>Learn</p>
                    <p className='ps-10 font-serif mt-2'><FontAwesomeIcon className='me-2' icon={faCode} />Programming Language</p>
                    <p className='ps-10 font-serif mt-2'><FontAwesomeIcon className='me-2' icon={faLayerGroup} />Data Structure</p>
                    <p className='ps-10 font-serif mt-2'><FontAwesomeIcon className='me-2' icon={faGears} />Online Compiler</p>
                </div>
                <div className='w-full  text-slate-200 h-full text-start mt-0'>
                    <p className='font-bold   ps-10 py-4'>Contact</p>
                    <p className='ps-10 font-serif mt-2'><FontAwesomeIcon className='me-2' icon={faMap} />Rajkot,Gujarat,India.</p>
                    <p className='ps-10 font-serif mt-2'><FontAwesomeIcon className='me-2' icon={faEnvelope} />csehacks@gmail.com</p>
                    <p className='ps-10 font-serif mt-2'><FontAwesomeIcon className='me-2' icon={faEnvelope} />csehacks@gmail.com</p>
                    
                </div>

                Github
            </div>
        </div>
    );
};

export default Footer;
