import React from 'react';
import Seemore from './Seemore';

const ChildHeadline = (props) => {
    const { parent, child ,to} = props;
    return (
        < >

            <div className='flex justify-between relative items-center pe-2   '> <h1 className='  font-nutino text-xl  '>{parent} <span className='text-green-500  '>{child} </span>  </h1> <Seemore to={to} ></Seemore></div>


        </ >
    );
};

export default ChildHeadline;