import React from 'react';
import bg from './img/bg.png'; // Assuming this is the correct path to your image

const Ict = () => {
    return (
        <div className='container relative mt-[500px] h-[500px]'>
            <div className='bg-cover bg-center absolute w-full flex flex-col items-center justify-center font-noto-sans-bengali wi-[100%] top-[160px] rounded left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[300px] mt-[-150px] bg-slate-950' style={{ backgroundImage: `url(${bg})` }}>
                <h1 className='text-slate-300 text-5xl mt-8 font-bold'>তথ্য ও যোগাযোগ প্রযুক্তি</h1>
                <h1 className='text-slate-400 text-2xl mt-২ font-bold'> একাদশ-দ্বাদশ শ্রেণি</h1>
            </div>
        </div>
    );
};

export default Ict;
