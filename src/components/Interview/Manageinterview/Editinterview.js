import React from 'react';
import useInterview from '../Hooks/useInterview';
import { useNavigate } from 'react-router-dom';

const Editinterview = () => {
    const { interview } = useInterview();
    const navigate = useNavigate();


    // Check if interview exists and is an array
    if (!interview || !Array.isArray(interview)) {
        return <div>No interviews available</div>;
    }


    const navigateToServiceDetail = (id) => {
        navigate(`/editinterview/${id}`);
    };


    return (
        <div className='bg-blue-50'>

            <div className="flex flex-col pt-10 px-2  md:flex-row justify-between">
                <div className=" ">
                    <h1 className="text-2xl font-semibold mb-1">Select Blog For Edit</h1>
                    <h2 className="text-gray-600 ml-0.5">Access for admin only</h2>
                </div>
            </div>


            <div className='grid grid-cols-4 gap-2 px-2 mt-6'>

                {
                    interview.map((blog) => (

                        // eslint-disable-next-line jsx-a11y/anchor-is-valid
                        <a onClick={() => navigateToServiceDetail(blog._id)} href="#" className="flex p-2 flex-col bg-white shadow items-center  rounded pb-8 lg:mb-0 lg:flex-row lg:[border-bottom:1px_solid_rgb(236,_236,_236)]">
                            <img src={blog.photourl} alt="" className="inline-block rounded h-60 w-full object-cover md:h-36 lg:h-10 lg:w-10" />
                            <div className="flex flex-col items-start pt-1 lg:px-8">
                                <p className="mb-1 text-sm font-bold sm:text-base md:text-xl">{blog.title}</p>
                            </div>
                        </a>))}
            </div>
            {/* <div className='flex items-center text-center justify-center mt-14 mb-4'>
                <Stack spacing={2}>
                    <Pagination
                        count={Math.ceil(blogs.length / itemsPerPage)}
                        page={currentPage}
                        onChange={handlePageChange}
                        variant='outlined'
                        shape='rounded'
                    />
                </Stack>
            </div> */}


        </div>
    );
};

export default Editinterview;
