import React from 'react';
import './Childdiv.css';
import Picktrack from '../Picktrack/Picktrack';
import Latesttutorial from '../Latesttutorial/Latesttutorial';
import Seemore from '../Otherscomponent/Seemore';
import element from './img/element.png';
import Headline from '../Otherscomponent/Headline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faQuestion } from '@fortawesome/free-solid-svg-icons';
import Dsaquestion from '../SideBar/Dsaquestion';
import Bestside from '../SideBar/Bestside';

const Childdiv = () => {
    return (
        <div className='container mt-12'>
            <div className='w-[70%]'><Headline short="Pick" parent='Pick a' child="Track">   </Headline></div>
            <div className=' flex  w-[100%] h-[800px] border-t border-slate-400'>

                <div className='w-[70%]    py-2 pe-2 '>
                    <Picktrack></Picktrack>
                    <Latesttutorial></Latesttutorial>
                </div>
                <div className='w-[30%] h-[700px]  border-l border-slate-400'>


                    <Dsaquestion className=''></Dsaquestion>
                    <Bestside></Bestside>
                    {/* <h1 className='text-white mt-1 font-sans text-xl font-bold flex items-center justify-center'>DSA Interview Question</h1>
                        <hr className='text-slate-400 mt-1'/>
                        <div className=' flex items-center '>
                        <FontAwesomeIcon className='text-green-600 p-2' icon={faQuestion} size='xl'/><span className='text-green-500 font-sans text-2xl'>What is Time Complexity?</span>
                        </div>
                        <span  className='mx-4 text-xs text-slate-200'><FontAwesomeIcon icon={faArrowRight} className='text-slate-200' />time complexity is the computational complexity that describes the amount of computer time it takes to run an algorithm</span> */}

                    <div></div>
                    <div></div>
                </div>

            </div>
        </div>

    );
};

export default Childdiv;