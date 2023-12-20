import React from 'react';
import Headline from '../../Otherscomponent/Headline';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Article = () => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className='container mt-16'>
            <Headline parent='Article' child='Bloog' short='News' />
            <div className=' mt-4'>
                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={value}>  
                        <Box sx={{}}>
                            <TabList onChange={handleChange} aria-label="lab API tabs example">
                                <Tab className='rounded border border-slate-300 hover:bg-green-500 hover:text-white  duration-300 h-[30px] px-2 ms-2' label="All" value="1" />
                                <Tab className='rounded border border-slate-300 hover:bg-green-500 hover:text-white  duration-300 h-[30px] px-2 ms-2' label="Ai" value="2" />
                                <Tab className='rounded border border-slate-300 hover:bg-green-500 hover:text-white  duration-300 h-[30px] px-2 ms-2' label="DSA" value="3" />
                                <Tab className='rounded border border-slate-300 hover:bg-green-500 hover:text-white  duration-300 h-[30px] px-2 ms-2' label="Tech News" value="4" />
                                <Tab className='rounded border border-slate-300 hover:bg-green-500 hover:text-white  duration-300 h-[30px] px-2 ms-2' label="Basic Computer" value="5" />
                            </TabList>
                        </Box>
                        <TabPanel className='  mt-2' value="1">
                            <div className='m-3 rounded pb-3     border w-full h-full border-slate-400'>
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
                                    <div className='rounded-sm align-bottom text-sm   border border-slate-400 w-[100%] h-4'> </div>
                                </div>

                            </div>
                            <Stack className='felx items-center justify-center mt-4' spacing={2}>

                                <Pagination count={10} variant="outlined" shape="rounded" />
                            </Stack>
                        </TabPanel>
                        <TabPanel className=' mt-2' value="2"> <div className='m-3 rounded pb-3     border w-full h-full border-slate-400'>
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
                            </Stack> </TabPanel>
                        <TabPanel className=' mt-2' value="3"> <div className='m-3 rounded pb-3     border w-full h-full border-slate-400'>
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
                            </Stack></TabPanel>
                        <TabPanel className=' mt-2' value="4"> <div className='m-3 rounded pb-3     border w-full h-full border-slate-400'>
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
                        </TabPanel>
                        <TabPanel className=' mt-2' value="5"> <div className='m-3 rounded pb-3     border w-full h-full border-slate-400'>
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
                            </Stack></TabPanel>
                    </TabContext>
                </Box>
            </div>
        </div>
    );
};

export default Article;
