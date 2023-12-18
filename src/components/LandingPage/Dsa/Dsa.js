import React, { useRef } from 'react';
import Headline from '../../Otherscomponent/Headline';
import array from './img/array.png';
import stack from './img/stack.png';
import queue from './img/queue.png';
import linkedlist from './img/linkedlist.png';
import graph from './img/graph.png';
import tree from './img/tree.png';

const Dsa = () => {

    const dsaData = [
        { id: 1, img: array },
        { id: 2, img: linkedlist },
        { id: 3, img: stack },
        { id: 4, img: queue },
        { id: 5, img: graph },
        { id: 6, img: tree },
    ];
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


    return (
        <div className='container mt-16 '>
            <Headline parent='DSA' child='Courses' short='Data Structure' showSeemore={true}></Headline>
            <div className='px-5 mb-10 relative  '>
                <div className='  grid grid-flow-col auto-cols-max gap-3 mt-4 overflow-hidden  ' ref={interviewRef}>
                    {dsaData.map((tutorial) => (
                        // eslint-disable-next-line jsx-a11y/anchor-is-valid
                        <a
                            key={tutorial.id}
                            href='#'
                            className='shadow-sm rounded transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-40 duration-400'
                        >
                            <div className='  rounded    flex flex-col items-center justify-center'>
                                <div>
                                    <img className='w-[350px] rounded ' src={tutorial.img} alt='' />
                                </div>
                                <div className='text-black mt-1 font-verdina text-sm'>
                                    {tutorial.title}
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
    );
};
export default Dsa;
