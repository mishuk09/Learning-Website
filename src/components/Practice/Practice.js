import React from 'react';
import HomePage from '../Otherscomponent/HomePage/HomePage';
import interviewimg from './img/interviewimg.png';
// import Interview from '../LandingPage/Interview/Interview';
import CodingPractice from './CodingPractice';
import PracticeComponent from './PracticeComponent';

const Practice = () => {
    return (
        <div>
            <div>
                <HomePage showHeadButton={false} showInterviewDiv={true} showImgDiv={false} headline='Your Playground for Personal Growth...'
                    description='Absolutely! Imagine a fun zone where you learn and practice to become amazing at things that help you grow in life. It is like playing to become a master at real-life skills!' image={interviewimg}></HomePage>

            </div>
            <div>
                <CodingPractice />
                <PracticeComponent />
            </div>
        </div>
    );
};

export default Practice;