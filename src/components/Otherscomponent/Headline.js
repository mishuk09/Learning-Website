import React from 'react';
import Seemore from './Seemore';

const Headline = (props) => {
    const { parent, child, short, showSeemore, to } = props;
    return (
        < >
            <p className='font-verdina text-md text-blue-500'>{short}</p>
            <div className='flex justify-between relative items-center pe-2   '> <h1 className=' font-verdina   font-bold text-4xl  '>{parent} <span className='text-green-600  '>{child} </span>  </h1> {showSeemore && <Seemore to={to}></Seemore>}</div>


        </ >
    );
};

export default Headline;