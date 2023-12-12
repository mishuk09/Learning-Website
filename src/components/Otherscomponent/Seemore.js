import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Seemore = () => {
    return (
        <>
            <button className='text-sm right-0 text-slate-600 hover:bg-green-500 hover:text-white duration-500 rounded  border-solid border-[2px] h-[36px] px-1'>See More<FontAwesomeIcon className='px-2' icon={faArrowUpRightFromSquare} /></button>

        </>
    );
};

export default Seemore;