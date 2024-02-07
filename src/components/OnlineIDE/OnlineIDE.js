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


            <div className='bg-slate-950 pb-10'>
                <div className='container flex flex-col items-center pt-4 justify-center text-left'>
                    <FontAwesomeIcon className='text-white my-3' icon={faCode} size='xl' beat />
                    <h1 className='text-white text-5xl font-bold font-nunito'>Online Coding <span className='text-green-500'>Compilers</span> </h1>
                    <div className='flex mt-4 items-center justify-center sm:mt-2   w-[70%]'>
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
                    </div>
                    <div className='text-slate-700 w-[36%] font-bold  overflow-y-auto  rounded font-nunito absolute bg-white top-[300px]  h-auto'>

                        {showSearchList &&
                            products.map((product) => (
                                <div className='px-3 h-8  flex items-center  hover:text-green-600 duration-200 cursor-pointer hover:rounded hover:bg-slate-100' key={product.title}>
                                    <a onClick={() => handleNavigatePage(product.value)} className='flex items-center text-center justify-center' ><FontAwesomeIcon className='me-1' icon={faMagnifyingGlass} />{product.title}</a>
                                </div>
                            ))}

                    </div>
                    <div className='flex items-center text-center justify-center  container mt-5 font-nutino text-slate-600'>
                        <div className='me-3 hover:-translate-y-1 hover:scale-105 transition duration-100 hover:bg-green-700 rounded bg-green-600 px-2 py-1 text-gray-200'><FontAwesomeIcon className='pe-2  ' icon={faCode} />Code</div>
                        <div className='me-3 hover:-translate-y-1 hover:scale-110 transition duration-100 hover:bg-green-700 rounded bg-green-600 px-2 py-1 text-gray-200'><FontAwesomeIcon className='pe-1' icon={faGear} />Run</div>
                        <div className='me-3 hover:-translate-y-1 hover:scale-110 transition duration-100 hover:bg-green-700 rounded bg-green-600 px-2 py-1 text-gray-200'><FontAwesomeIcon className='pe-1' icon={faBug} />Find Bug</div>
                        <div className='me-3 hover:-translate-y-1 hover:scale-110 transition duration-100 hover:bg-green-700 rounded bg-green-600 px-2 py-1 text-gray-200   '><FontAwesomeIcon className='pe-1' icon={faThumbsUp} />Get Output</div>

                    </div>
                    <p className='text-slate-300 w-[50%] text-justify font-nunito mt-3'>Access a powerful online IDE directly on our learning platform, enabling seamless coding without any software installations.</p>

                </div>




            </div>
            <div className='container mt-10'>

                {/* <p className='font-nutino text-md text-blue-500'>Compiler</p>
                    <div className='flex justify-between relative items-center pe-2   '> <h1 className='text-slate-200 font-nunito   font-bold text-5xl  '>Compiler For<span className='text-green-500  '> Coder </span>  </h1>  </div>
                    */}
                <Headline parent='Online' child=' Compiler' short='Compiler' showSeemore={false}></Headline>

                <div className='px-5 my-10   relative  '>
                    <div className='  grid grid-flow-col auto-cols-max gap-3 mt-4 overflow-hidden  ' ref={interviewRef}>

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
                        className='absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-200 text-black p-2 rounded-full'
                        onClick={() => scroll(-500)}
                    >
                        {'<'}
                    </button>
                    <button
                        className='absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-200 text-black p-2 rounded-full'
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