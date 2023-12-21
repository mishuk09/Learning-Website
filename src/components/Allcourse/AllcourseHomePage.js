import React from 'react';
import HomePage from '../Otherscomponent/HomePage/HomePage';
import tutorialimg from './img/tutorialimg.png';
import bookimg from './img/bookimg.png';
import course from './img/course.png';
import certificate from './img/certificate.png';
import Courses from './Courses';
import GoToTopButton from '../LandingPage/GoToTopButton/GoToTopButton';
import Dsa from '../LandingPage/Dsa/Dsa';
import Library from '../LandingPage/Library/Library';
import Article from '../LandingPage/Article/Article';
import Dsaproblems from '../LandingPage/Dsaproblems/Dsaproblems';


const AllcourseHomePage = () => {
    const headline = 'Choose Your Subject & Start Learning...';
    const description = 'We are providing  Many programming language as well as coding experience and latest technology  news and  article for you.';

    return (
        <div className=' '>
            <GoToTopButton></GoToTopButton>
            <HomePage headline={headline} showHeadButton={true} description={description} image={tutorialimg} shortimg={bookimg} img1={course} img2={certificate} ></HomePage>
            <Courses />
            <Dsa />
            <Library />
            <Article />
            <Dsaproblems/>


        </div>
    );
};

export default AllcourseHomePage;