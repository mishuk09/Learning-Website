import { Pagination, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Editblog = () => {
    const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    useEffect(() => {
        const url = "http://localhost:5000/blog/read";
        fetch(url)
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, []);
    const navigate = useNavigate();

    const navigateToServiceDetail = (id) => {
        navigate(`/editblog/${id}`);
    };


    const indexOfLastBlog = currentPage * itemsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - itemsPerPage;
    const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };


    return (
        <div>

            <div className="flex flex-col pt-10 px-2  md:flex-row justify-between">
                <div className=" ">
                    <h1 className="text-2xl font-semibold mb-1">Select Blog For Edit</h1>
                    <h2 className="text-gray-600 ml-0.5">Access for admin only</h2>
                </div>
            </div>


            <div className='grid grid-cols-2 gap-2 px-2 mt-6'>

                {
                    currentBlogs.slice(0, 10).map((blog) => (

                        // eslint-disable-next-line jsx-a11y/anchor-is-valid
                        <a onClick={() => navigateToServiceDetail(blog._id)} href="#" className="flex p-2 flex-col bg-white shadow items-center  rounded pb-8 lg:mb-0 lg:flex-row lg:[border-bottom:1px_solid_rgb(236,_236,_236)]">
                            <img src={blog.photourl} alt="" className="inline-block rounded h-60 w-full object-cover md:h-36 lg:h-32 lg:w-32" />
                            <div className="flex flex-col items-start pt-1 lg:px-8">
                                <div className="mb-2 rounded-md bg-[#f2f2f7] px-2 py-1.5">
                                    <p className="text-sm font-semibold text-[#6574f8]">{blog.category}</p>
                                </div>
                                <p className="mb-1 text-sm font-bold sm:text-base md:text-xl">{blog.title}</p>


                            </div>
                        </a>))}
            </div>
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


        </div>
    );
};

export default Editblog;
