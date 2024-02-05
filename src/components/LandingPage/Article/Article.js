import React, { useEffect, useState } from 'react';
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
import useBlogs from '../../Blog/Hooks/useBlogs';

const tabClass = 'rounded border border-slate-300 hover:bg-green-500 hover:text-white duration-300 h-[30px] px-2 ms-2';

const generateBlogPanel = (blog, onClick) => (
    <div key={blog._id} onClick={onClick} className='m-3 rounded pb-2 cursor-pointer shadow-sm border w-full h-full border-slate-400'>
        <div className='mx-3 mt-2 font-bold'>{blog.title}</div>
        <div className='px-2 py-2 mx-2 mt-1 flex flex-col justify-end rounded-sm border-slate-400 w-[99%] h-22'>
            <p
                className='text-slate-600 font-nunito text-justify overflow-hidden text-base'
                style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                }}
                dangerouslySetInnerHTML={{ __html: blog.content }}
            ></p>
            <p className='rounded-sm pt-2 pb-3 align-bottom text-sm border-slate-400 w-[100%] h-4'>
                <FontAwesomeIcon className='text-green-500' icon={faTag} /> {blog.category}
            </p>
        </div>
    </div>
);

const Article = () => {
    const { blogs, categoriesWithCount } = useBlogs();
    const navigate = useNavigate();

    const [value, setValue] = useState('1');
    const [currentPage, setCurrentPage] = useState(1);
    const [currentPages, setCurrentPages] = useState({});

    useEffect(() => {
        const initialPages = Object.fromEntries(categoriesWithCount.map((_, index) => [String(index + 2), 1]));
        setCurrentPages(initialPages);
    }, [categoriesWithCount]);

    const handleChange = (_, newValue) => {
        setValue(newValue);
    };

    const navigateToServiceDetail = (id) => {
        navigate(`/blogsdetails/${id}`);
    };

    const handlePageChange = (event, value, categoryIndex) => {
        setCurrentPage(value);
        setCurrentPages((prevPages) => ({
            ...prevPages,
            [String(categoryIndex)]: value,
        }));
    };

    const itemsPerPage = 5;
    const indexOfLastBlog = currentPage * itemsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - itemsPerPage;

    const currentBlogs = blogs ? blogs.slice(indexOfFirstBlog, indexOfLastBlog) : [];

    return (
        <div className='container mt-16'>
            <Headline parent='Article' child='Blog' short='News' />
            <div className=' mt-4'>
                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={value}>
                        <Box sx={{}}>
                            <TabList onChange={handleChange} aria-label="lab API tabs example">
                                <Tab className={tabClass} label="All" value="1" />
                                {categoriesWithCount.map((category, index) => (
                                    <Tab key={index} className={tabClass} label={category.name} value={String(index + 2)} />
                                ))}
                            </TabList>
                        </Box>

                        {/* All Blogs TabPanel */}
                        <TabPanel className='  mt-2' value="1">
                            {currentBlogs.map((blog) => generateBlogPanel(blog, () => navigateToServiceDetail(blog._id)))}
                            <div className='flex items-center text-center justify-center mt-14 mb-4'>
                                <Stack spacing={2}>
                                    <Pagination
                                        count={Math.ceil((blogs?.length || 0) / itemsPerPage)}
                                        page={currentPage}
                                        onChange={handlePageChange}
                                        variant='outlined'
                                        shape='rounded'
                                    />
                                </Stack>
                            </div>
                        </TabPanel>

                        {/* Individual Category TabPanels */}
                        {categoriesWithCount.map((category, index) => (
                            <TabPanel key={index} className=' mt-2' value={String(index + 2)}>
                                {blogs
                                    .filter((blog) => blog.category === category.name)
                                    .slice(
                                        (currentPages[String(index + 2)] - 1) * itemsPerPage,
                                        currentPages[String(index + 2)] * itemsPerPage
                                    )
                                    .map((blog) => generateBlogPanel(blog, () => navigateToServiceDetail(blog._id)))}
                                <div className='flex items-center text-center justify-center mt-14 mb-4'>
                                    <Stack spacing={2}>
                                        <Pagination
                                            count={Math.ceil(blogs.filter((blog) => blog.category === category.name).length / itemsPerPage)}
                                            page={currentPages[String(index + 2)]}
                                            onChange={(event, value) => handlePageChange(event, value, index + 2)}
                                            variant='outlined'
                                            shape='rounded'
                                        />
                                    </Stack>
                                </div>
                            </TabPanel>
                        ))}
                    </TabContext>
                </Box>
            </div>
        </div>
    );
};

export default Article;
