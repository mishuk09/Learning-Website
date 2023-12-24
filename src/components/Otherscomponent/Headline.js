import React from 'react';
import Seemore from './Seemore';

const Headline = (props) => {
    const { parent, child, short, showSeemore, to } = props;
    return (
        < >
            <p className='font-nutino text-md text-blue-500'>{short}</p>
            <div className='flex justify-between relative items-center pe-2   '> <h1 className=' font-nunito   font-bold text-4xl  '>{parent} <span className='text-green-500  '>{child} </span>  </h1> {showSeemore && <Seemore to={to}></Seemore>}</div>


        </ >
    );
};

export default Headline;