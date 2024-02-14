import React from 'react';
import compilerlogo from './img/compilerlogo.png';
import codefont from './img/codefont.png';
import codeback from './img/codeback.png';
import { Link } from 'react-router-dom';

const CompilerDiv = () => {
    const clipPathStyle = {
        backgroundImage: `url(${codeback})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    };

    const clipPathStyletwo = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    };


    return (
        <div className='container pt-8'>
            <div className='flex w-full mt-10 border rounded border-slate-400'>
                <div className='h-36 w-[15%] bg-emerald-500 rounded-s items-center justify-center text-center'>
                    <img className='flex items-center justify-center text-center absolute w-[150px] mx-14 mt-2' src={codefont} alt="" />
                </div>
                <div className='h-36 w-[60%] ps-20 pe-4 bg-white flex items-center justify-center'>
                    <div>
                        <p className='font-bold font-nunito text-xl'>Online Coding IDE</p>
                        <p className='font-nunito text-sm text-justify'>Access our online IDE to code seamlessly without the need for offline downloads. Write, test, and run your code instantly in a convenient browser-based environment, empowering your coding experience effortlessly</p>
                    </div>
                </div>
                <div style={clipPathStyle} className='w-[25%] rounded-r' >
                    <div style={clipPathStyletwo} className='h-36 w-full rounded-r   flex items-center justify-center' >
                        <Link to='/onlineide'>
                            <button className='bg-green-500 py-2 px-3 duration-300 rounded text-white hover:bg-green-600'>
                                &lt;/ Code Now &gt;
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompilerDiv;
