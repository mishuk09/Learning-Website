import React from 'react';
import Headline from '../Otherscomponent/Headline';
import ChildHeadline from '../Otherscomponent/ChildHeadline';

const Library = () => {
    return (
        <div className='container'>

            <Headline parent="Choose" child='Library' short="Tutorial"></Headline>
            <div className='grid grid-cols-2 gap-3   '>
                <div className=' w-[100%] h-[200px] p-2  rounded border  border-slate-400'>
                    <ChildHeadline   parent='Web Development'></ChildHeadline>
                    <div>

                    </div>
                </div>
                <div className='w-[100%] h-[200px]  rounded border  border-slate-400'></div>
                <div className='w-[100%] h-[200px]  rounded border  border-slate-400'></div>
                <div className='w-[100%] h-[200px]  rounded border  border-slate-400'></div>
            </div>
        </div>
    );
};

export default Library;