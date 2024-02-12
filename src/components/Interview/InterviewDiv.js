import React, { useEffect, useRef, useState } from 'react';
import './InterviewDiv.css'
import HomePage from '../Otherscomponent/HomePage/HomePage';
import interviewimg from './img/interviewimg.png';
import Interview from '../LandingPage/Interview/Interview';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpenReader, faCode, faHandPointer, faMagnifyingGlass, faPeopleArrows, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import InterviewObject from './InterviewObject';
import Courses from '../Allcourse/Courses';
import Dsa from '../LandingPage/Dsa/Dsa';
import Library from '../LandingPage/Library/Library';
import Article from '../LandingPage/Article/Article';
import Dsaproblems from '../LandingPage/Dsaproblems/Dsaproblems';

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
// import BlogMain from './BlogMain';



const InterviewDiv = () => {

    const inputRef = useRef(null);
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState([]);



    useEffect(() => {
        const placeholderText = 'Search Desired Interview Topic...';
        let index = 0;
        const intervalId = setInterval(() => {
            index = (index + 1) % (placeholderText.length + 1);
            inputRef.current.placeholder = placeholderText.slice(0, index);
        }, 150);

        return () => clearInterval(intervalId);
    }, []);


    const handleSearch = async () => {
        setLoading(true);
        try {
            const response = await fetch(`http://localhost:5000/interview/search/${query}`);
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


    useEffect(() => {
        if (query.trim() !== '') {
            handleSearch();
        } else {
            setResults([]);
        }
    }, [query]);

    const navigate = useNavigate();

    const navigateToServiceDetail = (title) => {
        navigate(`/interview/${title}`);
    };

    return (
        <div>
            <div className=' pb-10 bg-slate-950 '>
                <div className='container flex flex-col items-center pt-4 justify-center text-left'>
                    <FontAwesomeIcon className='text-white my-3' icon={faCode} size='xl' beat />
                    <h1 className='text-white text-5xl font-bold font-nunito'>Interview Questions <span className='text-green-500'>For All</span> </h1>
                    <div className='flex mt-4 items-center justify-center sm:mt-2 lg:mt-0 w-[70%]'>
                        <input
                            type="text"
                            id="searchInput"
                            ref={inputRef}
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            className='rounded w-[50%] h-9 px-2 me-2 outline-none'
                            placeholder='Search Desired Interview Topic...'
                        />


                        <button
                            className='rounded bg-white text-black text-sm h-9 px-4  '
                        >
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                    <div className='text-slate-700 w-[36%] font-bold  overflow-y-auto  rounded font-nunito absolute bg-white top-[300px]  h-auto'>
                        {loading && <p>Loading...</p>}
                        {results.length > 0 && (
                            <>
                                <ul>
                                    {results.slice(0, 5).map((blog) => (
                                        <p onClick={() => navigateToServiceDetail(blog.title)} className='px-3 h-8  flex items-center  hover:text-green-600 duration-200 cursor-pointer hover:rounded hover:bg-slate-100' key={blog._id}><FontAwesomeIcon className='me-1' icon={faMagnifyingGlass} />{blog.title}</p>
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
                                                {/* <input
                                                        type="text"
                                                        className='rounded  bg-slate-100 w-[50%] h-9 px-2 me-2 outline-none'
                                                        value={query}
                                                        onChange={(e) => setQuery(e.target.value)}
                                                    /> */}
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
                        <div className='me-3 hover:-translate-y-1 hover:scale-105 transition duration-100 hover:bg-green-700 rounded bg-green-600 px-2 py-1 text-gray-200'><FontAwesomeIcon className='pe-2  ' icon={faHandPointer} />Select</div>
                        <div className='me-3 hover:-translate-y-1 hover:scale-110 transition duration-100 hover:bg-green-700 rounded bg-green-600 px-2 py-1 text-gray-200'><FontAwesomeIcon className='pe-1' icon={faBookOpenReader} />Read</div>
                        <div className='me-3 hover:-translate-y-1 hover:scale-110 transition duration-100 hover:bg-green-700 rounded bg-green-600 px-2 py-1 text-gray-200'><FontAwesomeIcon className='pe-1' icon={faPeopleArrows} />Intervies</div>
                        <div className='me-3 hover:-translate-y-1 hover:scale-110 transition duration-100 hover:bg-green-700 rounded bg-green-600 px-2 py-1 text-gray-200   '><FontAwesomeIcon className='pe-1' icon={faThumbsUp} />Get Job</div>

                    </div>
                    <p className='text-slate-300 w-[50%] text-justify font-nunito mt-3'>Find interview questions on any topic. Choose, read, and prepare for your job interview hassle-free</p>

                </div>
            </div>
            <div className='   mt-10   container    flex flex-col items-center justify-center   h-auto'>
                <InterviewObject />
            </div>



            <Courses />
            <Dsa />
            <Library />
            <Article />
            <Dsaproblems />

        </div>
    );
};

export default InterviewDiv;