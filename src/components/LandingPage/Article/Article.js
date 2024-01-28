import React, { useEffect, useRef, useState } from 'react';
import Headline from '../../Otherscomponent/Headline';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag } from '@fortawesome/free-solid-svg-icons';





const Article = () => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const inputRef = useRef(null);
    const [blogs, setBlogPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;


    useEffect(() => {
        const fetchBlogPosts = async () => {
            try {
                const response = await fetch('http://localhost:5000/blog/read'); // Adjust the URL as needed
                if (response.ok) {
                    const data = await response.json();
                    setBlogPosts(data);
                } else {
                    console.error('Failed to fetch blog posts');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchBlogPosts();
    }, []);

    const navigate = useNavigate();

    const navigateToServiceDetail = (id) => {
        navigate(`/blogsdetails/${id}`);
    };

    const indexOfLastBlog = currentPage * itemsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - itemsPerPage;
    const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
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

                            {
                                currentBlogs.map((blog) => (
                                    <div className='m-3 rounded pb-2  shadow-sm  border w-full h-full border-slate-400'>
                                        <div className='mx-3 mt-2 font-bold'>{blog.title}</div>
                                        <div className='px-2 py-2 mx-2 mt-1 flex flex-col justify-end rounded-sm border border-slate-400 w-[99%] h-22 '  >
                                        <p
                                                        className='text-gray-700 font-nunito text-justify overflow-hidden text-base'
                                                        style={{
                                                            display: '-webkit-box',
                                                            WebkitLineClamp: 2,
                                                            WebkitBoxOrient: 'vertical',
                                                            overflow: 'hidden',
                                                            textOverflow: 'ellipsis'
                                                        }}
                                                        dangerouslySetInnerHTML={{ __html: blog.content }}
                                                    >

                                                    </p>
                                            <p className='rounded-sm  pt-2 pb-3 align-bottom text-sm     border-slate-400 w-[100%] h-4'> 
                                            <FontAwesomeIcon className='text-green-500' icon={faTag} /> {blog.category}
                                            </p>
                                        </div>
                                    </div>
                                ))
                            }



                            <div className='flex items-center text-center justify-center mt-14 mb-4'>
                                <Stack spacing={2}>
                                    <Pagination
                                        count={Math.ceil(blogs.length / itemsPerPage)}
                                        page={currentPage}
                                        onChange={handlePageChange}
                                        variant='outlined'
                                        shape='rounded'
                                    />
                                </Stack>
                            </div>
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
