import React from 'react';
import './Childdiv.css';

const Childdiv = () => {
    return (
        <div className='container mt-12'>
            <p className='font-sans text-md text-blue-500'>Choose</p>
            <h1 className=' mb-4 font-sans font-bold text-3xl '>Pick A Track</h1>
            <div className=' flex  w-[100%] h-[1000px]'>

                <div className='w-[70%] grid gap-2 grid-cols-2 h-52 p-2 bg-slate-200'>

                    <div className='rounded flex bg-blue-500 h-[70px] w-[100%]'>
                        <div className='w=[30%] h-[50px] rounded-full bg-white '></div>
                        <div className='w=[70%] h-[50px]'></div>
                    </div>
                    <div className='rounded  bg-blue-500 h-[70px] w-[100%]'></div>
                    <div className='rounded  bg-blue-500 h-[70px] w-[100%]'></div>
                    <div className='rounded  bg-blue-500 h-[70px] w-[100%]'></div>
                    <div className='rounded  bg-blue-500 h-[70px] w-[100%]'></div>
                    <div className='rounded  bg-blue-500 h-[70px] w-[100%]'></div>
                </div>
                <div className='w-[30%] h-52 bg-slate-400'></div>

            </div>
        </div>

    );
};

export default Childdiv;