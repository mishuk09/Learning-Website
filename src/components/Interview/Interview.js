import React from 'react';
import HomePage from '../Otherscomponent/HomePage/HomePage';
import interviewimg from './img/interviewimg.png';

const Interview = () => {
    return (
        <div>
            <HomePage showHeadButton={false} showInterviewDiv={true} showImgDiv={false} headline='Your Playground for Personal Growth and Mastery'
                description='Absolutely! Imagine a fun zone where you learn and practice to become amazing at things that help you grow in life. It is like playing to become a master at real-life skills!' image={interviewimg}></HomePage>
        </div>
    );
};

export default Interview;