import React from 'react';
import ict from './img/ict.png';
import biology from './img/biology.png';
import math from './img/math.png';
import chemistry from './img/chemistry.png';
import physic from './img/physic.png';
import Ict from './Ict/Ict';

const TwelveClass = () => {
    const subjects = [
        {
            id: 1,
            img: ict,
            title: "তথ্য ও যোগাযোগ প্রযুক্তি"
        },
        {
            id: 2,
            img: math,
            title: "উচ্চতর গণিত ১ম পত্র"
        },
        {
            id: 3,
            img: math,
            title: "উচ্চতর গণিত ২য় পত্র"
        },
        {
            id: 4,
            img: physic,
            title: "পদার্থ   ১ম পত্র"
        },
        {
            id: 5,
            img: physic,
            title: "পদার্থ ২য় পত্র"
        },
        {
            id: 6,
            img: chemistry,
            title: "রষায়ন ১ম পত্র"
        },
        {
            id: 7,
            img: chemistry,
            title: " রষায়ন ২য় পত্র"
        },
        {
            id: 8,
            img: biology,
            title: "জীববিজ্ঞান ১ম পত্র"
        },
        {
            id: 5,
            img: biology,
            title: "জীববিজ্ঞান ২য় পত্র"
        },
        {
            id: 5,
            img: biology,
            title: "বাংলা ১ম পত্র"
        },
        {
            id: 5,
            img: biology,
            title: "বাংলা ২য় পত্র"
        },
        {
            id: 5,
            img: biology,
            title: "ইংরেজি ২য় পত্র"
        },
    ]

    return (
        <div>
            <div className='bg-gradient-to-b from-black to-slate-700  relative w-full h-[450px]'>
                <div className='font-nunito flex flex-col items-center text-center justify-center pt-14'>
                    <h1 className='text-slate-100 text-5xl font-bold'>Start <span className='text-green-600'>Learning</span> </h1>
                    <p className='text-slate-300 text-2xl'>Choose your desired Subject and begin learning</p>
                </div>
                <div className='absolute text-slate-200  font-noto-sans-bengali   font-bold rounded top-[450px] grid grid-cols-4 gap-3  p-3  justify-between  container  bg-slate-950 wi-[100%] h-[500px] left-1/2 transform -translate-x-1/2 -translate-y-1/2' >
                    {subjects.map((subject) => (
                        // eslint-disable-next-line jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid
                        <a
                            key={subject.id}
                            href=""
                            className='flex rounded shadow-sm hover:-translate-y-2 duration-300 hover:bg-slate-700  flex-col bg-slate-800 items-center text-center justify-center p-2 pt-2   '

                        >
                            <div><img className='w-20' src={subject.img} alt="" /></div>
                            {subject.title}


                        </a>
                    ))
                    }
                </div>
            </div>
            <div className=' bg-gradient-to-b from-black to-slate-700'>
                <div className='  '>
                    <Ict />
                </div>

            </div>



        </div>
    );
};

export default TwelveClass;