import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faBrain, faCode, faComputerMouse, faMagnifyingGlass, faNewspaper, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Pagination, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export function fetchBlogData(currentPage, setBlogs, setPageCount) {
    // Fetch blog data based on the current page
    fetch(`http://localhost:5000/blog/read?page=${currentPage}&size=10`)
        .then(res => res.json())
        .then(data => setBlogs(data));

    // Fetch blog count for pagination
    fetch('http://localhost:5000/blog/count')
        .then(res => res.json())
        .then(data => {
            const count = data.count;
            const page = Math.ceil(count / 10);
            setPageCount(page);
        });
}

const Blogs = () => {
    const inputRef = useRef(null);

    useEffect(() => {
        const placeholderText = 'Search Desired Topic Article...';
        let index = 0;
        const intervalId = setInterval(() => {
            index = (index + 1) % (placeholderText.length + 1);
            inputRef.current.placeholder = placeholderText.slice(0, index);
        }, 150);

        return () => clearInterval(intervalId);
    }, []);

    const [currentPage, setCurrentPage] = useState(1);
    const [pageCount, setPageCount] = useState(0);
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetchBlogData(currentPage, setBlogs, setPageCount);
    }, [currentPage]);

    const navigate = useNavigate();

    const navigateToServiceDetail = id => {
        navigate(`/blogsdetails/${id}`);
    };

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    return (
        <div className='bg-slate-50'>
            <div className='bg-slate-950 pb-10'>
                <div className='contaner'>
                    <div className='container flex flex-col items-center  pt-4 justify-center text-left'>
                        <FontAwesomeIcon className='text-white my-3' icon={faNewspaper} size='xl' beat />
                        <h1 className='text-white text-5xl font-bold font-nunito'>CSEHacks For <span className='text-blue-500'>Knowladge</span> </h1>
                        <div className='flex mt-4 items-center justify-center sm:mt-2 lg:mt-0 w-[70%]'>
                            <input
                                type="text"
                                id="searchInput"
                                ref={inputRef}
                                className='rounded w-[50%] h-9 px-2 me-2 outline-none'
                                placeholder='Search Desire Coding Compiler...'
                            />
                            <button
                                className='rounded bg-white text-black text-sm h-9 px-4'
                            >
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                        </div>
                        <div className='flex items-center text-center justify-center  container mt-5 font-nutino text-slate-600'>
                            <div className='me-3 hover:-translate-y-1 hover:scale-105 transition duration-100 hover:bg-green-700 rounded bg-green-600 px-2 py-1 text-gray-200'><FontAwesomeIcon className='pe-2  ' icon={faSearch} />Search</div>
                            <div className='me-3 hover:-translate-y-1 hover:scale-110 transition duration-100 hover:bg-green-700 rounded bg-green-600 px-2 py-1 text-gray-200'><FontAwesomeIcon className='pe-1' icon={faComputerMouse} />Select</div>
                            <div className='me-3 hover:-translate-y-1 hover:scale-110 transition duration-100 hover:bg-green-700 rounded bg-green-600 px-2 py-1 text-gray-200'><FontAwesomeIcon className='pe-1' icon={faBook} />Read</div>
                            <div className='me-3 hover:-translate-y-1 hover:scale-110 transition duration-100 hover:bg-green-700 rounded bg-green-600 px-2 py-1 text-gray-200   '><FontAwesomeIcon className='pe-1' icon={faBrain} />Knowladge</div>

                        </div>
                        <p className='text-slate-300 w-[50%] text-justify font-nunito mt-3'> Passion meets knowledge in a captivating blogsite, sparking curiosity and meaningful conversations. </p>

                    </div>
                </div>
            </div>

            <div>

                <section>
                    {/* <!-- Container --> */}
                    <div className="mx-auto w-full max-w-7xl px-5 py-5 md:px-10 md:py-24 lg:py-32">
                        {/* <!-- Title --> */}
                        {/* <h2 className="text-center text-3xl font-bold md:text-5xl lg:text-left">The latest and greatest news</h2>
                        <p className="mb-8 mt-4 text-center text-sm text-[#636262] sm:text-base md:mb-12 lg:mb-16 lg:text-left">Lorem ipsum dolor sit amet elit ut aliquam</p> */}
                        {/* <!-- Content --> */}
                        <div className="mx-auto  gap-8 lg:grid-cols-2">
                            {
                                blogs.map((blog) => (
                                    // eslint-disable-next-line jsx-a11y/anchor-is-valid
                                    <a onClick={() => navigateToServiceDetail(blog._id)} href="#" className="flex bg-white flex-col gap-4 px-2 py-2 shadow rounded-md [grid-area:1/1/4/2] lg:pr-8">
                                        <img src={blog.photourl} alt="" className="inline-block h-72 rounded-t w-full object-cover" />
                                        <div className="flex flex-col items-start py-1">
                                            <div className="mb-2 rounded-md bg-[#f2f2f7] px-3 py-1.5">
                                                <p className="text-sm font-semibold text-[#6574f8]">{blog.category}</p>
                                            </div>
                                            <p className="mb-2 text-xl font-bold md:text-2xl lg:text-3xl">{blog.title}</p>
                                            <div className="flex flex-col text-sm text-[#636262] lg:flex-row">
                                                <p>{blog.date}</p>
                                                
                                            </div>
                                            <hr  className='w-full fa-dot-circle'/>
                                           
                                            <div className="flex mt-4 flex-col text-sm text-[#636262] lg:flex-row">
                                                <p
                                                    className='text-gray-700 font-nunito text-justify overflow-hidden text-base'
                                                    style={{
                                                        display: '-webkit-box',
                                                        WebkitLineClamp: 3,
                                                        WebkitBoxOrient: 'vertical',
                                                        overflow: 'hidden',
                                                        textOverflow: 'ellipsis'
                                                    }}
                                                    dangerouslySetInnerHTML={{ __html: blog.content }}
                                                ></p>
                                            </div>
                                        </div>
                                    </a>
                                ))
                            }

                            {/* <div className="md:flex md:justify-between lg:flex-col">
                                <a href="#" className="flex flex-col pb-8 lg:mb-3 lg:flex-row lg:[border-bottom:1px_solid_rgb(236,_236,_236)]">
                                    <img src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94016de6cf90_Rectangle%2035.svg" alt="" className="inline-block h-60 w-full object-cover md:h-36 lg:h-32 lg:w-32" />
                                    <div className="flex flex-col items-start pt-4 lg:px-8">
                                        <div className="mb-2 rounded-md bg-[#f2f2f7] px-2 py-1.5">
                                            <p className="text-sm font-semibold text-[#6574f8]">CATEGORY NAME</p>
                                        </div>
                                        <p className="mb-2 text-sm font-bold sm:text-base">Here is the title for this blog</p>
                                        <div className="flex flex-col items-start">
                                            <div className="flex flex-col text-sm text-[#636262] sm:text-base lg:flex-row lg:items-center">
                                                <p>Laila Bahar</p>
                                                <p className="mx-2 hidden lg:block">-</p>
                                                <p>6 mins read</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="flex flex-col pb-8 lg:mb-3 lg:flex-row lg:[border-bottom:1px_solid_rgb(236,_236,_236)]">
                                    <img src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94016de6cf90_Rectangle%2035.svg" alt="" className="inline-block h-60 w-full object-cover md:h-36 lg:h-32 lg:w-32" />
                                    <div className="flex flex-col items-start pt-4 lg:px-8">
                                        <div className="mb-2 rounded-md bg-[#f2f2f7] px-2 py-1.5">
                                            <p className="text-sm font-semibold text-[#6574f8]">CATEGORY NAME</p>
                                        </div>
                                        <p className="mb-2 text-sm font-bold sm:text-base">Here is the title for this blog</p>
                                        <div className="flex flex-col items-start">
                                            <div className="flex flex-col text-sm text-[#636262] sm:text-base lg:flex-row lg:items-center">
                                                <p>Laila Bahar</p>
                                                <p className="mx-2 hidden lg:block">-</p>
                                                <p>6 mins read</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="flex flex-col pb-8 lg:mb-3 lg:flex-row lg:[border-bottom:1px_solid_rgb(236,_236,_236)]">
                                    <img src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94016de6cf90_Rectangle%2035.svg" alt="" className="inline-block h-60 w-full object-cover md:h-36 lg:h-32 lg:w-32" />
                                    <div className="flex flex-col items-start pt-4 lg:px-8">
                                        <div className="mb-2 rounded-md bg-[#f2f2f7] px-2 py-1.5">
                                            <p className="text-sm font-semibold text-[#6574f8]">CATEGORY NAME</p>
                                        </div>
                                        <p className="mb-2 text-sm font-bold sm:text-base">Here is the title for this blog</p>
                                        <div className="flex flex-col items-start">
                                            <div className="flex flex-col text-sm text-[#636262] sm:text-base lg:flex-row lg:items-center">
                                                <p>Laila Bahar</p>
                                                <p className="mx-2 hidden lg:block">-</p>
                                                <p>6 mins read</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div> */}
                        </div>
                    </div>
                </section>

            </div>
            <div className='flex items-center text-center justify-center mt-14 mb-4'>
                <Stack spacing={2}>
                    <Pagination
                        count={pageCount}
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

export default Blogs;