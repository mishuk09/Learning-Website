import React from 'react';
import './Home.css';
import homeimg from './img/homeimg.png';
import home from './img/home.png';

const Home = () => {
    return (
        <div className='container flex w-[100%]  h-[500px]'>
            <div className='w-[60%] headline-div mt-[100px]'>
                <h1 className='text-5xl font-sans'>Explore Your Coding Journey
                    With us...</h1>
                <p className='mt-10'>Explore opportunities from across the globe to learn, showcase skills,
                    gain CV points, & get hired by your dream company.</p>
            </div>

            <div className='w-[50%] flex justify-center items-center  '>
                <img className='w-[350px]' src={home} alt="" />
            </div>

        </div>
    );
};

export default Home;