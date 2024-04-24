import React from 'react';
import './Childdiv.css';
import Picktrack from '../Picktrack/Picktrack';
import Latesttutorial from '../Latesttutorial/Latesttutorial';
import Seemore from '../../Otherscomponent/Seemore';
import element from './img/element.png';
import Headline from '../../Otherscomponent/Headline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faQuestion } from '@fortawesome/free-solid-svg-icons';
import Dsaquestion from '../SideBar/Dsaquestion';
import Bestside from '../SideBar/Bestside';
import CompilerDiv from '../CompilerDiv/CompilerDiv';
import Multilanguage from '../../Multilanguage/Multilanguage';

const Childdiv = () => {
    return (
        <div className='container mt-28 '>
            {/* <div className='w-[70%]'><Headline short="Pick" parent='Pick a' child="Track">   </Headline></div> */}
            <div className=' flex    w-[100%]   '>

                <div className='w-[70%]    py-2 pe-2 '>
                    <Picktrack></Picktrack>
                    {/* <Multilanguage /> */}
                    <CompilerDiv  ></CompilerDiv>
                    <Latesttutorial></Latesttutorial>

                </div>
                <div className='w-[30%] mt-2 h-full bg-white  border-l border-slate-200'>


                    <Dsaquestion  ></Dsaquestion>
                    <Bestside></Bestside>


                    <div></div>
                    <div></div>
                </div>

            </div>
        </div>

    );
};

export default Childdiv;