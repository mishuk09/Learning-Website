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
import CompilerDiv from '../CompilerDiv/CompilerDiv';

const Childdiv = () => {
    return (
        <div className='container mt-12'>
            <div className='w-[70%]'><Headline short="Pick" parent='Pick a' child="Track">   </Headline></div>
            <div className=' flex  w-[100%] h-[800px] border-t border-slate-400'>

                <div className='w-[70%]    py-2 pe-2 '>
                    <Picktrack></Picktrack>
                    <CompilerDiv></CompilerDiv>
                    <Latesttutorial></Latesttutorial>
                  
                </div>
                <div className='w-[30%] h-[700px]  border-l border-slate-400'>


                    <Dsaquestion className=''></Dsaquestion>
                    <Bestside></Bestside>
                   

                    <div></div>
                    <div></div>
                </div>

            </div>
        </div>

    );
};

export default Childdiv;