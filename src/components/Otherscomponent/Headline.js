import React from 'react';
import Seemore from './Seemore';

const Headline = (props) => {
    const { parent, child, short } = props;
    return (
        < >
            <p className='font-sans text-md text-blue-500'>{short}</p>
            <div className='flex justify-between relative items-center pe-2   '> <h1 className=' mb-4 font-sans font-bold text-4xl  '>{parent} <span className='text-green-500  '>{child} </span>  </h1> <Seemore ></Seemore></div>


        </ >
    );
};

export default Headline;