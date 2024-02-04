import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faBrain, faCode, faComputerMouse, faMagnifyingGlass, faNewspaper, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Pagination, Stack, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Switch from '@mui/material/Switch';
import BlogMain from './BlogMain';


const Blogs = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);



    const inputRef = useRef(null);
    const [blogs, setBlogPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPageSection1 = 5;
    const itemsPerPageSection2 = 10;

    useEffect(() => {
        const placeholderText = 'Search Desired Topic Article...';
        let index = 0;
        const intervalId = setInterval(() => {
            index = (index + 1) % (placeholderText.length + 1);
            inputRef.current.placeholder = placeholderText.slice(0, index);
        }, 150);

        return () => clearInterval(intervalId);
    }, []);

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

    const indexOfLastBlogSection1 = currentPage * itemsPerPageSection1;
    const indexOfFirstBlogSection1 = indexOfLastBlogSection1 - itemsPerPageSection1;
    const currentBlogsSection1 = blogs.slice(indexOfFirstBlogSection1, indexOfLastBlogSection1);

    const indexOfLastBlogSection2 = currentPage * itemsPerPageSection2;
    const indexOfFirstBlogSection2 = indexOfLastBlogSection2 - itemsPerPageSection2;
    const currentBlogsSection2 = blogs.slice(indexOfFirstBlogSection2, indexOfLastBlogSection2);

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };



    const handleSearch = async () => {
        setLoading(true);
        try {
            const response = await fetch(`http://localhost:5000/blog/search/${query}`);
            if (response.ok) {
                const data = await response.json();
                setResults(data);
            } else {
                console.error('Error searching blogs');
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (query.trim() !== '') {
            handleSearch();
        } else {
            setResults([]);
        }
    }, [query]);




    const [open, setOpen] = React.useState(false);
    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState('sm');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleMaxWidthChange = (event) => {
        setMaxWidth(
            // @ts-expect-error autofill of arbitrary value is not handled.
            event.target.value,
        );
    };

    const handleFullWidthChange = (event) => {
        setFullWidth(event.target.checked);
    };

    return (
        <div className=' '>
            <div className='bg-slate-950 pb-10'>
                <div className='contaner'>
                    <div className='container   flex flex-col items-center  pt-4 justify-center text-left'>
                        <FontAwesomeIcon className='text-white my-3' icon={faNewspaper} size='xl' beat />
                        <h1 className='text-white text-5xl font-bold font-nunito'>CSEHacks For <span className='text-blue-500'>Knowladge</span> </h1>
                        <div className='flex mt-4 items-center justify-center sm:mt-2 lg:mt-0 w-[70%]'>
                            <input
                                type="text"
                                id="searchInput"
                                ref={inputRef}
                                className='rounded w-[50%] h-9 px-2 me-2 outline-none'
                                placeholder='Search Desire Coding Compiler...'
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                            />
                            <button
                                variant="outlined" onClick={handleClickOpen}
                                className='rounded bg-white text-black text-sm h-9 px-4'
                            >
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>

                        </div >
                        <div className='text-slate-700 w-[36%] font-bold  overflow-y-auto  rounded font-nunito absolute bg-white top-[300px]  h-auto'>
                            {loading && <p>Loading...</p>}
                            {results.length > 0 && (
                                <>
                                    <ul>
                                        {results.slice(0, 5).map((blog) => (
                                            <p onClick={() => navigateToServiceDetail(blog._id)} className='px-3 h-8  flex items-center  hover:text-green-600 duration-200 cursor-pointer hover:rounded hover:bg-slate-100' key={blog._id}><FontAwesomeIcon className='me-1' icon={faMagnifyingGlass} />{blog.title}</p>
                                        ))}
                                    </ul>
                                    <div className='text-center p-1 bg-slate-200 items-center justify-center'>
                                        <React.Fragment>
                                            <button variant="outlined" onClick={handleClickOpen}>
                                                See All
                                            </button>
                                            <Dialog
                                                fullWidth={fullWidth}
                                                maxWidth={maxWidth}
                                                open={open}
                                                onClose={handleClose}
                                            >
                                                <DialogTitle>
                                                    <input
                                                        type="text"
                                                        className='rounded  bg-slate-100 w-[50%] h-9 px-2 me-2 outline-none'
                                                        value={query}
                                                        onChange={(e) => setQuery(e.target.value)}
                                                    />
                                                </DialogTitle>
                                                <DialogContent>
                                                    <DialogContentText>
                                                        <div className="md:flex md:justify-between lg:flex-col">
                                                            <div className="md:flex md:justify-between gap-1 lg:flex-col">
                                                                {loading && <p>Loading...</p>}
                                                                {results.length > 0 && (

                                                                    <ul>
                                                                        {results.map((blog) => (
                                                                            <Link onClick={() => navigateToServiceDetail(blog._id)} href="#" className="flex p-2 flex-col bg-white shadow  rounded pb-8 lg:mb-3 lg:flex-row lg:[border-bottom:1px_solid_rgb(236,_236,_236)]">
                                                                                <img src={blog.photourl} alt="" className="inline-block rounded h-60 w-full object-cover md:h-36 lg:h-32 lg:w-32" />
                                                                                <div className="flex flex-col items-start pt-1 lg:px-8">
                                                                                    <div className="mb-2 rounded-md bg-[#f2f2f7] px-2 py-1.5">
                                                                                        <p className="text-sm font-semibold text-[#6574f8]">{blog.category}</p>
                                                                                    </div>
                                                                                    <p className="mb-1 text-sm font-bold text-green-500 sm:text-base md:text-xl">{blog.title}</p>
                                                                                    <hr className='w-full' />
                                                                                    <div className="flex flex-col items-start">
                                                                                        <div className="flex flex-col mt-1 text-sm text-[#636262] sm:text-base lg:flex-row lg:items-center">
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
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </Link>
                                                                        ))}
                                                                    </ul>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </DialogContentText>

                                                </DialogContent>
                                                <DialogActions>
                                                    <Button onClick={handleClose}>Close</Button>
                                                </DialogActions>
                                            </Dialog>
                                        </React.Fragment>
                                    </div>
                                </>

                            )}


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
                <BlogMain />
            </div>

            {/* <div>

                <section>

                    <div className="mx-auto w-full max-w-7xl px-5 py-5 md:px-10 md:py-24 lg:py-32">

                        <div className="mx-auto   grid gap-8 lg:grid-cols-2">
                            <div className="md:flex md:justify-between gap-4 lg:flex-col">
                                {
                                    currentBlogsSection1.map((blog) => (
                                        // eslint-disable-next-line jsx-a11y/anchor-is-valid
                                        <a onClick={() => navigateToServiceDetail(blog._id)} href="#" className="flex bg-white flex-col gap-4 px-2 py-2 shadow rounded-md [grid-area:1/1/4/2] lg:pr-8">
                                            <img src={blog.photourl} alt="" className="inline-block h-72 rounded-t w-full object-cover" />
                                            <div className="flex flex-col items-start py-1">
                                                <div className="mb-2 rounded-md bg-[#f2f2f7] px-3 py-1.5">
                                                    <p className="text-sm font-semibold text-[#6574f8]">{blog.category}</p>
                                                </div>
                                                <p className="mb-2 text-xl font-bold md:text-2xl  lg:text-3xl">{blog.title}</p>
                                                <div className="flex flex-col text-sm text-[#636262] lg:flex-row">
                                                    <p>{blog.date}</p>

                                                </div>
                                                <hr className='w-full fa-dot-circle' />

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
                                                    >

                                                    </p>


                                                </div>

                                            </div>
                                        </a>
                                    ))
                                }
                            </div>


                            <div className="md:flex md:justify-between lg:flex-col">
                                <div className="md:flex md:justify-between gap-1 lg:flex-col">
                                    {
                                        currentBlogsSection2.slice(2).map((blog) => (

                                            // eslint-disable-next-line jsx-a11y/anchor-is-valid
                                            <a onClick={() => navigateToServiceDetail(blog._id)} href="#" className="flex p-2 flex-col bg-white shadow  rounded pb-8 lg:mb-3 lg:flex-row lg:[border-bottom:1px_solid_rgb(236,_236,_236)]">
                                                <img src={blog.photourl} alt="" className="inline-block rounded h-60 w-full object-cover md:h-36 lg:h-32 lg:w-32" />
                                                <div className="flex flex-col items-start pt-1 lg:px-8">
                                                    <div className="mb-2 rounded-md bg-[#f2f2f7] px-2 py-1.5">
                                                        <p className="text-sm font-semibold text-[#6574f8]">{blog.category}</p>
                                                    </div>
                                                    <p className="mb-1 text-sm font-bold sm:text-base md:text-xl">{blog.title}</p>
                                                    <hr className='w-full' />
                                                    <div className="flex flex-col items-start">
                                                        <div className="flex flex-col mt-1 text-sm text-[#636262] sm:text-base lg:flex-row lg:items-center">
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
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>))}

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div> */}
            {/* <div className='flex items-center text-center justify-center mt-14 mb-4'>
                <Stack spacing={2}>
                    <Pagination
                        count={Math.ceil(blogs.length / itemsPerPageSection1)} // or use the larger itemsPerPageSection2
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

export default Blogs;