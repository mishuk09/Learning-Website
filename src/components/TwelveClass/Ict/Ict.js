import React, { useRef } from 'react';
import bg from './img/bg.png'; // Assuming this is the correct path to your image
import ictone from './img/ictone.png'; // Assuming this is the correct path to your image
import icttwo from './img/icttwo.png'; // Assuming this is the correct path to your image
import GoToTopButton from '../../LandingPage/GoToTopButton/GoToTopButton';
import fifth from './img/fifth.svg';
import second from './img/second.png';
import third from './img/third.png';
import four from './img/four.png';
import first from './img/first.png';
import six from './img/six.png';
import './Ict.css';

const Ict = () => {
    const interviewRef = useRef(null);


    const scroll = (scrollOffset) => {
        if (interviewRef.current) {
            const container = interviewRef.current;
            const start = container.scrollLeft;

            const startTime = performance.now();
            const duration = 500; // Adjust the duration as needed

            const animateScroll = (currentTime) => {
                const elapsedTime = currentTime - startTime;
                const scroll = easeInOutQuad(elapsedTime, start, scrollOffset, duration);
                container.scrollLeft = scroll;

                if (elapsedTime < duration) {
                    requestAnimationFrame(animateScroll);
                }
            };

            requestAnimationFrame(animateScroll);
        }
    };
    // Easing function for smooth scroll animation
    const easeInOutQuad = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    const units = [
        {
            id: 1,
            img: first,
            link: '/',
            title: "তথ্য ও যোগাযোগ প্রযুক্তি",
        },
        {
            id: 2,
            img: second,
            link: '/',
            title: "কমিউনিকেশন সিস্টেমস ও কম্পিউটার নেটওয়ার্কিং"
        },
        {
            id: 3,
            img: third,
            link: '/',
            title: "সংখ্যা পদ্ধতি ও ডিজিটাল ডিভাইস"
        },
        {
            id: 4,
            img: four,
            link: '/',
            title: "ওয়েব ডিজাইন পরিচিতি ও HTML"
        },
        {
            id: 5,
            img: fifth,
            link: '/',
            title: "প্রোগ্রামিং ভাষা ও C Programming"
        },
        {
            id: 6,
            img: six,
            link: '/',
            title: "ডেটাবেজ  ম্যানেজমেন্ট সিস্টেম"
        },
    ]


    return (
        <div className='container relative mt-[500px] h-[650px]'>

            <GoToTopButton />
            <div className='bg-cover bg-center border absolute w-full flex   justify-between font-noto-sans-bengali wi-[100%] top-[160px] rounded left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[300px] mt-[-150px] bg-slate-950' style={{ backgroundImage: `url(${bg})` }}>
                <img className='w-[300px] p-4 ' src={ictone} alt="" />
                <div className='flex flex-col text-center items-center justify-center '>
                    <h1 className='text-slate-200 text-5xl mt-8 font-bold'>তথ্য ও যোগাযোগ প্রযুক্তি</h1>
                    <h1 className='text-slate-400 text-2xl mt-২ font-bold'> একাদশ-দ্বাদশ শ্রেণি</h1>
                </div>

                <img className='w-[300px] p-4' src={icttwo} alt="" />
            </div>

            <div className='pt-[250px]   '>
                {/* <Headline parent='অধ্যায় ভৃত্তিক' child='মডিউল' short='সূচিপত্র'></Headline> */}
                <div className='text-5xl font-bold font-noto-sans-bengali text-white'>
                    <p className='text-sm'>সূচিপত্র</p>
                    <h1>অধ্যায় ভিত্তিক <span className='text-green-500'>মডিউল</span></h1>

                </div>
                <div className='px-5 my-10   relative  '>
                    <div className='   grid grid-flow-col auto-cols-max gap-3 mt-4 overflow-hidden  ' ref={interviewRef}>
                        {units.map((unit) => (
                            // eslint-disable-next-line jsx-a11y/anchor-is-valid
                            <a
                                key={unit.id}
                                href='#'
                                className='bg-slate-800 hover:bg-slate-700 p-3 shadow-sm rounded transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-40 duration-400'
                            >
                                <div className='  rounded    flex flex-col items-center justify-center'>
                                    <div>
                                        <img className='w-[150px] rounded ' src={unit.img} alt='' />
                                    </div>
                                    <div className='text-slate-200 mt-2  font-noto-sans-bengali text-sm'>
                                        {unit.title}
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                    <button
                        className='absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-200 text-black p-2 rounded-full'
                        onClick={() => scroll(-500)}
                    >
                        {'<'}
                    </button>
                    <button
                        className='absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-200 text-black p-2 rounded-full'
                        onClick={() => scroll(500)}
                    >
                        {'>'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Ict;
