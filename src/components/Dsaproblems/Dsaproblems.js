import React from 'react';
import Headline from '../Otherscomponent/Headline';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Dsaproblems = () => {
    return (
        <div className='container'>
            <Headline parent='DSA' child='Problems' short='Code'></Headline>
            <div className='container m-3 w-[98%]'>
                <div className='  m-3 rounded pb-3     border w-full h-full border-slate-400'>
                    <div className='mx-3 mt-2 font-bold'>Headline</div>
                    <div className='px-3 py-2 mx-3 mt-1 flex flex-col justify-end rounded-sm border border-slate-400 w-[97%] h-20 '  >
                        <div className='rounded-sm   align-bottom text-sm   border border-slate-400 w-[100%] h-4'> </div>
                    </div>
                    <div className='mx-3 mt-3 font-bold'>Headline</div>
                    <div className='px-3 py-2 mx-3 mt-1 flex flex-col justify-end rounded-sm border border-slate-400 w-[97%] h-20 '  >
                        <div className='rounded-sm   align-bottom text-sm   border border-slate-400 w-[100%] h-4'> </div>
                    </div>
                    <div className='mx-3 mt-3 font-bold'>Headline</div>
                    <div className='px-3 py-2 mx-3 mt-1 flex flex-col justify-end rounded-sm border border-slate-400 w-[97%] h-20 '  >
                        <div className='rounded-sm   align-bottom text-sm   border border-slate-400 w-[100%] h-4'> </div>
                    </div>

                </div>
                <Stack className='felx items-center justify-center mt-4' spacing={2}>

                    <Pagination count={10} variant="outlined" shape="rounded" />
                </Stack>

            </div>

        </div>
    );
};

export default Dsaproblems;