import React from 'react';
import Home from './components/LandingPage/Home/Home';
import GoToTopButton from './components/LandingPage/GoToTopButton/GoToTopButton';
import ShortDetils from './components/LandingPage/ShortDetils/ShortDetils';
import Childdiv from './components/LandingPage/Childdiv/Childdiv';
import Library from './components/LandingPage/Library/Library';
import Interview from './components/LandingPage/Interview/Interview';
import Job from './components/LandingPage/Job/Job';
import Article from './components/LandingPage/Article/Article';
import Dsaproblems from './components/LandingPage/Dsaproblems/Dsaproblems';
import Dsa from './components/LandingPage/Dsa/Dsa';

const InheritApp = () => {
    return (
        <div>
            <Home />
            <GoToTopButton></GoToTopButton>
            <ShortDetils></ShortDetils>
            <Childdiv></Childdiv>
            <Dsa></Dsa>
            <Library></Library>
            <Interview></Interview>
            <Job></Job>
            <Article></Article>
            <Dsaproblems></Dsaproblems>

        </div>
    );
};

export default InheritApp;