import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Seemore = ({ to, ...rest }) => {
    return (
        <>
            <Link to={to} >
                <button className='text-[12px] right-0 text-slate-600 hover:bg-green-500 hover:text-white duration-500 rounded  border-solid border-[2px] h-[30px] px-1'>See More<FontAwesomeIcon className='px-1' icon={faArrowUpRightFromSquare} /></button>
            </Link>
        </>
    );
};

export default Seemore;