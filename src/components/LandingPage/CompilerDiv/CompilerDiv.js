import React from 'react';
import compilerlogo from './img/compilerlogo.png';
import codefont from './img/codefont.png';
import codeback from './img/codeback.png';
import { Link } from 'react-router-dom';

const CompilerDiv = () => {
    const codStyle = {
        // width: '100%', // Adjusted to fill the width of its container
        // height: '240px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(${codeback})`,
        opacity: 0.2,
    }

    return (
        <div className='container pt-8 '>
            <div className='  flex w-full mt-10 border rounded border-slate-400'>
                <div className='h-36 w-[15%] bg-emerald-500	  items-center justify-center text-center' ><img className='flex items-center justify-center text-center absolute w-[150px] mx-14 mt-2' src={codefont} alt="" /> </div>
                <div className='h-36 w-[60%] ps-20 pe-4  flex items-center justify-center' >
                    <div>
                        <p className='font-bold font-nunito text-xl'>Online Coding IDE</p>
                        <p className='font-nunito  text-sm  text-justify'  >Access our online IDE to code seamlessly without the need for offline downloads. Write, test, and run your code instantly in a convenient browser-based environment, empowering your coding experience effortlessly</p>
                    </div>
                </div>
                {/* <div className='h-36 w-[25%] border-t border-r border-b bg-black flex items-center justify-center' style={codStyle} > <button className='bg-green-600 p-2 rounded text-white'> CODE NOW </button></div> */}
                <div style={{ position: 'relative', width: '25%' }}>
                    {/* Background with opacity */}
                    <div className='h-36 w-full border-t border-r border-b bg-black flex items-center justify-center'>
                        <Link to='/onlineide'>
                            <button className='bg-green-600 py-2 px-3 font-bold duration-300 rounded text-white hover:bg-green-800'>
                                &lt;/   CODE NOW &gt;
                            </button>

                        </Link>

                    </div>
                    <div
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundImage: `url(${codeback})`,
                            opacity: 0.2,
                        }}
                    />
                  

                </div>

            </div>
        </div>

    );
};

export default CompilerDiv;