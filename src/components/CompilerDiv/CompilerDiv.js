import { Button } from '@mui/material';
import React from 'react';
import compilerlogo from './img/compilerlogo.png';

const CompilerDiv = () => {

    return (
        <div className='container pt-8 '>
            <div className='  flex w-full mt-10 border rounded border-slate-400'>
                <div className='h-36 w-[15%] bg-emerald-500	  items-center justify-center text-center' ><img className='flex items-center justify-center text-center absolute w-[130px] mx-14 mt-2' src={compilerlogo} alt="" /> </div>
                <div className='h-36 w-[60%] ps-20 pe-4  flex items-center justify-center' >
                    <div>
                        <p className='font-bold font-nunito text-xl'>Online Coding IDE</p>
                        <p className='font-nunito  text-sm  text-justify'  >Access our online IDE to code seamlessly without the need for offline downloads. Write, test, and run your code instantly in a convenient browser-based environment, empowering your coding experience effortlessly</p>
                    </div>
                </div>
                <div className='h-36 w-[25%] border-t border-r border-b bg-emerald-300 flex items-center justify-center' ><Button className='bg-black text-white  rounded'>Code Now</Button></div>

            </div>
        </div>

    );
};

export default CompilerDiv;