import React from 'react';
import HomePage from '../Otherscomponent/HomePage/HomePage';
import interviewimg from './img/interviewimg.png';
// import Interview from '../LandingPage/Interview/Interview';
import CodingPractice from './CodingPractice';
import PracticeComponent from './PracticeComponent';
import InterviewObject from '../Interview/InterviewObject';
import Headline from '../Otherscomponent/Headline';
import Dsa from '../LandingPage/Dsa/Dsa';
import Dsaproblems from '../LandingPage/Dsaproblems/Dsaproblems';

const Practice = () => {
    return (
        <div className='container'>
            <div>
                <HomePage showHeadButton={false} showInterviewDiv={true} showImgDiv={false} headline='Your Playground for Personal Growth...'
                    description='Absolutely! Imagine a fun zone where you learn and practice to become amazing at things that help you grow in life. It is like playing to become a master at real-life skills!' image={interviewimg}></HomePage>

            </div>
            <div className='container'> 
                <CodingPractice />
                <PracticeComponent />
                <div className='mt-20 mb-10'>
                    <Headline parent='Pick' child='Interview Topic' short='Select' showSeemore={true} to='/interview'></Headline>

                </div>  
                <div className=' container  shadow   flex flex-col items-center justify-center top-[380px] h-auto'>

                    <InterviewObject />
                </div>
                <div className='mt-20   '>
                <Dsaproblems/>
                </div>
             
            </div>
        </div>
    );
};

export default Practice;