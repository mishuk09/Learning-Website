import { faBookOpen, faBug, faCode, faFilePdf, faGear, faMagnifyingGlass, faNewspaper, faRunning, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef, useState } from 'react';
import Headline from '../Otherscomponent/Headline';
import OnlineIDEObject from './OnlineIDEObject';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Tutorials from '../Otherscomponent/Tutorials/Tutorials';
import Courses from '../Allcourse/Courses';
import Dsa from '../LandingPage/Dsa/Dsa';
import Library from '../LandingPage/Library/Library';
import Dsaproblems from '../LandingPage/Dsaproblems/Dsaproblems';
import Article from '../LandingPage/Article/Article';
import GoToTopButton from '../LandingPage/GoToTopButton/GoToTopButton';

const OnlineIDE = () => {

    // const languageList = [
    //     { title: 'C Compiler', link: '/c', value: 'c' },
    //     { title: 'C++ Compiler', link: '/cpp', value: 'cpp' },
    //     { title: 'Java Compiler', link: '/java', value: 'java' },
    //     { title: 'Python Compiler', link: '/python3', value: 'python3' },
    //     { title: 'Ruby Compiler', link: '/ruby', value: 'ruby' },
    //     { title: 'C# Compiler', link: '/csharp', value: 'csharp' },
    //     { title: 'PHP Compiler', link: '/php', value: 'php' },
    //     { title: 'Swift Compiler', link: '/swift', value: 'swift' },
    //     { title: 'JavaScript Compiler', link: '/javascript', value: 'javascript' },
    //     { title: 'TypeScript Compiler', link: '/typescript', value: 'typescript' },
    //     { title: 'HTML Compiler', link: '/html', value: 'html' },
    //     { title: 'CSS Compiler', link: '/css', value: 'css' },
    //     { title: 'SCSS Compiler', link: '/scss', value: 'scss' },
    //     { title: 'Bash Compiler', link: '/bash', value: 'bash' },
    //     { title: 'Go Compiler', link: '/go', value: 'go' },
    //     { title: 'Kotlin Compiler', link: '/kotlin', value: 'kotlin' },
    //     { title: 'Rust Compiler', link: '/rust', value: 'rust' },
    //     { title: 'Scala Compiler', link: '/scala', value: 'scala' },
    //     { title: 'Perl Compiler', link: '/perl', value: 'perl' },
    //     { title: 'Lua Compiler', link: '/lua', value: 'lua' },
    // ];


    const [products, setProducts] = useState(OnlineIDEObject);
    const [searchVal, setSearchVal] = useState("");
    const [showSearchList, setShowSearchList] = useState(false);

    const handleSearch = () => {
        if (searchVal === "") {
            setProducts(OnlineIDEObject);
            setShowSearchList(false);
        } else {
            const filterBySearch = OnlineIDEObject.filter((item) =>
                item.title.toLowerCase().includes(searchVal.toLowerCase())
            );
            setProducts(filterBySearch);
            setShowSearchList(true);
        }
    };

    const handleInputChange = (e) => {
        setSearchVal(e.target.value);
        if (e.target.value === "") {
            setShowSearchList(false);
        } else {
            handleSearch();
        }
    };

    const interviewRef = useRef(null);

    const inputRef = useRef(null);

    useEffect(() => {
        const placeholderText = 'Search Desired Coding Compiler...';
        let index = 0;
        const intervalId = setInterval(() => {
            index = (index + 1) % (placeholderText.length + 1);
            inputRef.current.placeholder = placeholderText.slice(0, index);
        }, 150);

        return () => clearInterval(intervalId);
    }, []);


    const scroll = (scrollOffset) => {
        if (interviewRef.current) {
            const container = interviewRef.current;
            const start = container.scrollLeft;

            const startTime = performance.now();
            const duration = 500; // Adjust the duration as needed

            const animateScroll = (currentTime) => {
                const elapsedTime = currentTime - startTime;
                const scroll = easeInOutQuad(elapsedTime, start, scrollOffset, duration);
                container.scrollLeft = scroll;

                if (elapsedTime < duration) {
                    requestAnimationFrame(animateScroll);
                }
            };

            requestAnimationFrame(animateScroll);
        }
    };
    // Easing function for smooth scroll animation
    const easeInOutQuad = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    const navigate = useNavigate();

    const handleNavigatePage = (id) => {
        navigate(`/ideformat/${id}`);
    };
    const handleNavigatePagee = (id) => {
        navigate(`/ideformat/${id}`);
    };

    return (
        <div>


            <div style={{ backgroundColor: '#0e1117' }} className='  relative pb-20 h-[530px]'>

                <div className=' flex flex-col items-center justify-center  text-center'>
                    <h1 className='pt-16 text-center text-slate-300 text-5xl font-bold font-sans'>Online Coding Compiler
                    </h1>
                    <p className='mt-4 mx-3 font-nunito text-1xl text-slate-300   text-center'>Access a powerful online IDE directly on our learning platform,  enabling seamless<br /> coding without any software installations.</p>

                    <div className='flex items-center justify-center  text-center sm:mt-2 lg:mt-6 w-[60%]'>
                        <input
                            type="text"
                            id="searchInput"
                            ref={inputRef}
                            onChange={handleInputChange}
                            placeholder='Search Desire Coding Compiler...'
                            className='  w-[50%] h-10 px-2  rounded-l outline-none'
                        />
                        <button
                            onClick={handleSearch}
                            className='  bg-blue-600 text-slate-300 text-sm h-10 px-4 w-28 rounded-r items-center text-center justify-center'
                        >
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                    {/* <div className='flex mt-4 items-center justify-center sm:mt-2   w-[70%]'>
                        <input
                            type="text"
                            // onChange={e => setSearchVal(e.target.value)}
                            onChange={handleInputChange}
                            id="searchInput"
                            ref={inputRef}
                            className='rounded w-[50%] h-9 px-2 me-2 outline-none'
                            placeholder='Search Desire Coding Compiler...'
                        />

                        <button
                            onClick={handleSearch}
                            className='rounded bg-white text-black text-sm h-9 px-4'
                        >
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div> */}
                    <div className='text-slate-700 w-[36%] font-bold  overflow-y-auto  rounded font-nunito absolute bg-white top-[250px]  h-auto'>

                        {showSearchList &&
                            products.map((product) => (
                                <div className='px-3 h-8  flex items-center  hover:text-green-600 duration-200 cursor-pointer hover:rounded hover:bg-slate-100' key={product.title}>
                                    <a onClick={() => handleNavigatePage(product.value)} className='flex items-center text-center justify-center' ><FontAwesomeIcon className='me-1' icon={faMagnifyingGlass} />{product.title}</a>
                                </div>
                            ))}

                    </div>
                    <div className='grid grid-cols-2 text-start mt-3 gap-2'>
                        <Link to='/allcourse' className='w-[200px] flex items-center text-center px-2 font-bold border-2 rounded py-2  border-purple-400 hover:border-3 hover:border-white duration-100 hover:rounded-full text-white h-auto'> <FontAwesomeIcon icon={faCode} className=' me-2 bg-white p-2 rounded-full  coding-icon34 text-blue-500' size='1xl' /> Code</Link>
                        <Link to='/practice' className='w-[200px] flex items-center text-center px-2 font-bold border-2 rounded py-2  border-purple-400 hover:border-3 hover:border-white duration-100 hover:rounded-full text-white h-auto'> <FontAwesomeIcon icon={faGear} className=' me-2 bg-white p-2 rounded-full  coding-icon34 text-blue-500' size='1xl' /> Run</Link>
                        <Link to='/interview' className='w-[200px] flex items-center text-center px-2 font-bold border-2 rounded py-2  border-purple-400 hover:border-3 hover:border-white duration-100 hover:rounded-full text-white h-auto'> <FontAwesomeIcon icon={faBug} className=' me-2 bg-white p-2 rounded-full  coding-icon34 text-blue-500' size='1xl' /> Find Bug</Link>
                        <Link to='/onlineide' className='w-[200px] flex items-center text-center px-2 font-bold border-2 rounded py-2  border-purple-400 hover:border-3 hover:border-white duration-100 hover:rounded-full text-white h-auto'> <FontAwesomeIcon icon={faThumbsUp} className=' me-2 bg-white p-2 rounded-full  coding-icon34 text-blue-500' size='1xl' />Get Output</Link>
                    </div>


                </div>




            </div>
            <div className='container flex  justify-center items-center mb-[150px] '>
                <div style={{ backgroundColor: '#f2f0fe' }} className='absolute container   py-4  px-10  rounded-sm shadow mt-1'>
                    <div className='  grid grid-flow-col   gap-3 my-2 overflow-hidden  ' ref={interviewRef}>

                        {
                            OnlineIDEObject.map((tutorial) => (

                                // eslint-disable-next-line jsx-a11y/anchor-has-content

                                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                                <a
                                    key={tutorial.id}
                                    to={tutorial.link}
                                    onClick={() => handleNavigatePagee(tutorial.value)}
                                    className='shadow-sm rounded  transition ease-in-out delay-50'
                                >
                                    <div className='w-[130px] h-36 rounded bg-slate-900 hover:bg-slate-800 flex flex-col items-center justify-center'>
                                        <div>
                                            <img className='w-[70px] h-[70px]' src={tutorial.img} alt="" />
                                        </div>
                                        <div className='text-white mt-2 font-nunito  '>
                                            {tutorial.title}
                                        </div>
                                    </div>

                                </a>


                            ))
                        }
                    </div>
                    <button
                        className='absolute top-1/2 left-2 transform -translate-y-1/2 bg-green-500 text-black p-2 rounded-full'
                        onClick={() => scroll(-500)}
                    >
                        {'<'}
                    </button>
                    <button
                        className='absolute top-1/2 right-2 transform -translate-y-1/2 bg-green-500 text-black p-2 rounded-full'
                        onClick={() => scroll(500)}
                    >
                        {'>'}
                    </button>
                </div>
            </div>
            <Courses />
            <Dsa />
            <Library />
            <Article />
            <Dsaproblems />

        </div>
    );
};

export default OnlineIDE;