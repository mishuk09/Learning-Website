import { faArrowLeftLong, faArrowRightLong, faClock, faList, faTags, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import useBlogs from "./Hooks/useBlogs";
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const BlogDetails = () => {
    const { blogid } = useParams();
    const { blogs, categoriesWithCount, categories, loading } = useBlogs();
    const navigate = useNavigate();
    const [blog, setBlog] = useState({});
    const [prevBlog, setPrevBlog] = useState(null);
    const [nextBlog, setNextBlog] = useState(null);
    // const [blogs, setGetblogs] = useState([]);

    useEffect(() => {
        const fetchBlogDetails = async () => {
            try {
                const response = await fetch(`http://localhost:5000/blog/blogs/${blogid}`);
                if (response.ok) {
                    const data = await response.json();
                    setBlog(data);
                } else {
                    console.error('Failed to fetch blog details');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchBlogDetails();
    }, [blogid]);

    useEffect(() => {
        const fetchBlogList = async () => {
            try {
                const response = await fetch('http://localhost:5000/blog/read');
                if (response.ok) {
                    const data = await response.json();
                    const currentIndex = data.findIndex(b => b._id === blogid);
                    setPrevBlog(currentIndex > 0 ? data[currentIndex - 1] : null);
                    setNextBlog(currentIndex < data.length - 1 ? data[currentIndex + 1] : null);
                } else {
                    console.error('Failed to fetch blog list');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchBlogList();
    }, [blogid]);
    // useEffect(() => {
    //     const url = 'http://localhost:5000/blog/read';
    //     fetch(url)
    //         .then(res => {
    //             if (!res.ok) {
    //                 throw new Error(`HTTP error! Status: ${res.status}`);
    //             }
    //             return res.json();
    //         })
    //         .then(dat => setGetblogs(dat))
    //         .catch(error => console.error('Error fetching blog list:', error));
    // }, []);

    const navigateToServiceDetail = id => {
        navigate(`/blogsdetails/${id}`);
    };

    if (!blog._id) {
        return <div>Loading...</div>;
    }

    return (
        <div className='bg-slate-50 pb-10'>
            <div className='container'>
                <div className='flex gap-2 pt-4'>
                    <div className='w-[25%] flex flex-col xs:hidden md:block   border bg-white rounded h-auto p-2'>
                        <div className='bg-white   p-2 h-full rounded-sm'>
                            <h2 className='text-1xl font-nunito font-bold border-b-2 border-dotted pb-1 mb-2'>Category</h2>
                            <ul>
                                {categoriesWithCount.map(category => (
                                    <li key={category.name} className='border-b cursor-pointer hover:text-green-500  border-dotted mt-1 border-slate-900 font-nunito font-bold text-sm'>
                                        <Link to={`/category/${category.name}`}>
                                            <div className='justify-between flex items-center text-center'>
                                                <p><FontAwesomeIcon className='me-2' icon={faList} />
                                                    {category.name}
                                                </p>
                                                <p> ({category.count})</p>
                                            </div>
                                        </Link>

                                    </li>
                                ))}
                            </ul>

                        </div>
                        <div className='bg-white p-2 mt-4 rounded-sm'>
                            <h2 className='text-1xl mb-3 font-nunito font-bold border-b-2 border-dotted pb-1'>Random Blog</h2>
                            {blogs && blogs.slice(0, 5).map((blog) => (
                                <div onClick={() => navigateToServiceDetail(blog._id)} className="flex p-2  h-20 bg-white shadow cursor-pointer rounded pb-8 lg:mb-1 lg:flex-row lg:[border-bottom:1px_solid_rgb(236,_236,_236)]">
                                    <img src={blog.photourl} alt="" className="inline-block rounded object-cover w-20" />
                                    <div className="flex flex-col items-start   ps-2">
                                        <p className='hover:text-green-600 leading-6 duration-200'>
                                            {blog.title.split(' ').slice(0, 5).join(' ')}...
                                        </p>
                                        <p className='  text-xs text-slate-500'>
                                            <FontAwesomeIcon className='me-1' icon={faClock} />  {blog.date}
                                        </p>
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='w-[50%]   border bg-white rounded h-auto p-2'>
                        {/* Main content of the selected blog */}
                        <p className='font-verdina font-bold text-4xl mt-6 tracking-wide'>{blog.title}</p>
                        <p className='mt-1 text-slate-600 text-sm'>Date: <span>{blog.date}</span></p>
                        <hr />
                        <img className='w-full rounded mt-4' src={blog.photourl} alt="" />
                        <div className='text-justify pt-10 font-nunito text-xl' dangerouslySetInnerHTML={{ __html: blog.content }} />
                        {/* Navigation to previous and next blogs */}
                        <div className="flex justify-between mt-10 mb-3">
                            <div className="rounded-full bg-green-500 text-white px-3 py-1">
                                {prevBlog && <Link to={`/blogsdetails/${prevBlog._id}`}><FontAwesomeIcon className="me-2" icon={faArrowLeftLong} />Prev</Link>}
                            </div>
                            <div className="rounded-full bg-green-500 text-white px-3 py-1">
                                {nextBlog && <Link to={`/blogsdetails/${nextBlog._id}`}>Next <FontAwesomeIcon className="ms-2" icon={faArrowRightLong} /></Link>}
                            </div>

                        </div>

                    </div>
                    <div className='w-[25%] border lg:block xs:hidden bg-white rounded h-[400px]'>
                        <div className='grid grid-cols-2 gap-2 font-nunito'>
                            <Link className='w-full flex cursor-pointer  text-white items-center ps-2 h-10 rounded-sm bg-blue-600'>
                                <div className='w-[20%] '>
                                    <FontAwesomeIcon className='me-1  text-white' icon={faFacebook} size='xl' />
                                </div>
                                <div className='w-[70%]'>
                                    Facebook
                                </div>
                            </Link>
                            <Link className='w-full flex cursor-pointer ps-2 h-10 rounded-sm text-white items-center bg-black'>
                                <div className='w-[20%] '>
                                    <FontAwesomeIcon className='me-1  text-white' icon={faX} size='xl' />
                                </div>
                                <div className='w-[70%]'>
                                    Twitter
                                </div>
                            </Link>
                            <Link className='w-full flex cursor-pointer ps-2 h-10 rounded-sm text-white items-center bg-blue-600'>
                                <div className='w-[20%] '>
                                    <FontAwesomeIcon className='me-1  text-white' icon={faLinkedin} size='xl' />
                                </div>
                                <div className='w-[70%]'>
                                    Linkedin
                                </div>
                            </Link>
                            <Link className='w-full flex cursor-pointer ps-2 h-10 rounded-sm text-white items-center bg-gradient-to-r from-pink-500 to-purple-500'>
                                <div className='w-[20%] '>
                                    <FontAwesomeIcon className='me-1  text-white' icon={faInstagram} size='xl' />
                                </div>
                                <div className='w-[70%]'>
                                    Instagram
                                </div>
                            </Link>
                        </div>

                        <div className='h-full mt-4 grid grid-rows-1 gap-2 relative rounded-sm'>
                            <h2 className='text-2xl mb-2 border-b-2 border-dotted text-green-600 font-nunito font-bold'>AI Blogs</h2>
                            {blogs &&
                                blogs.slice(0, 1).map((blog) => (
                                    <div onClick={() => navigateToServiceDetail(blog._id)} key={blog.id} className='cursor-pointer relative rounded-sm'>
                                        <div className='relative'>
                                            <img className='w-full rounded-sm h-[150px]' src={blog.photourl} alt="" />
                                            <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black'></div>
                                        </div>

                                        <div className='absolute text-white ps-3 bottom-3'>
                                            <p style={{ backgroundColor: '#263e57' }} className='text-sm p-1 mt-1 w-20 text-center rounded-sm'>{blog.category}</p>
                                            <p className='mt-2 font-bold font-sans text-1xl'>{blog.title}</p>
                                            <p className='text-sm mt-2 text-slate-300 font-nunito'> <FontAwesomeIcon className='me-1' icon={faClock} />  {blog.date}</p>
                                        </div>
                                    </div>
                                ))}
                        </div>
                        <div className='bg-white font-nunito  mt-2 rounded-sm'>

                            {blogs && blogs.slice(0, 3).map((blog) => (
                                <div onClick={() => navigateToServiceDetail(blog._id)} className="flex p-2  h-20 bg-white shadow cursor-pointer rounded pb-8 lg:mb-1 lg:flex-row lg:[border-bottom:1px_solid_rgb(236,_236,_236)]">
                                    <img src={blog.photourl} alt="" className="inline-block rounded object-cover w-20" />
                                    <div className="flex flex-col items-start   ps-2">
                                        <p className='hover:text-green-600 leading-6 duration-200'>
                                            {blog.title.split(' ').slice(0, 5).join(' ')}...
                                        </p>
                                        <p className='  text-xs text-slate-500'>
                                            <FontAwesomeIcon className='me-1' icon={faClock} />  {blog.date}
                                        </p>
                                    </div>

                                </div>
                            ))}
                        </div>
                        <div className='bg-white mt-4   p-2 h-full rounded-sm'>


                            <h2 className='text-2xl font-nunito  font-bold border-b-2 border-dotted text-green-500 pb-1 mb-2'>Tag</h2>
                            <ul className='grid grid-cols-3 gap-2 items-center text-center justify-center'>
                                {categoriesWithCount.map(category => (
                                    <li onClick={() => navigateToServiceDetail(categoriesWithCount._id)} key={category.name} className='border flex items-center text-center justify-center cursor-pointer hover:text-green-500    p-1 rounded border-slate-900 font-nunito font-bold text-sm'>
                                        <Link to={`/category/${category.name}`}>
                                            <div className='justify-between flex items-center text-center'>
                                                <p><FontAwesomeIcon className='me-2 text-green-600' icon={faTags} />
                                                    {category.name}
                                                </p>

                                            </div>
                                        </Link>

                                    </li>
                                ))}
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;
