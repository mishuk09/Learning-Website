import React, { useState } from 'react';
import Marquee from "react-fast-marquee";
import codeforces from './img/codeforces.png';
import hackerearth from './img/hackerearth.png';
import hackerrank from './img/hackerrank.png';
import leetcode from './img/leetcode.png';
import './Bestside.css';


const Bestside = () => {
    const [isPaused, setIsPaused] = useState(false);

    const handleMouseOver = () => {
        setIsPaused(true);
    };

    const handleMouseOut = () => {
        setIsPaused(false);
    };



    return (
        <div className='w-[100%] px-2 h-40 rounded  mt-1
          border border-slate-400 shadow-sm'>
            <h1 className=' mt-1 font-sans text-xl font-bold flex items-center justify-center'>Best Coding Contest Side</h1>
            <hr className='text-slate-400 mt-1' />
            <Marquee
                speed={40}
                gradient={false}
                pauseOnHover={false}
                direction='left'
                className=' marquee-div whitespace-no-wrap overflow-hidden'
                pauseOnClick={false}
                onMouseEnter={handleMouseOver}
                onMouseLeave={handleMouseOut}
            >
                <img

                    src={leetcode}
                    alt=""
                />
                <img

                    src={hackerearth}
                    alt=""
                />
                <img

                    src={hackerrank}
                    alt=""
                />
                <img

                    src={codeforces}
                    alt=""
                />
            </Marquee>
        </div>
    );
};

export default Bestside;
