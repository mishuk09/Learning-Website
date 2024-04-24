import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import useBlogs from './Hooks/useBlogs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faClock, faList, faTags, faX } from '@fortawesome/free-solid-svg-icons';


const BlogBycategory = () => {
    const { blogid } = useParams();
    const { selectedCategory } = useParams();
    const [blogss, setBlogss] = useState([]);
    const [loading, setLoading] = useState(true);
    const {blogs, categoriesWithCount, categories } = useBlogs(blogid);
    const navigate = useNavigate();



    useEffect(() => {
        const fetchBlogsByCategory = async () => {
            try {
                const response = await fetch(`http://localhost:5000/blog/readByCategory?category=${selectedCategory}`);
                if (response.ok) {
                    const data = await response.json();
                    setBlogss(data);
                } else {
                    console.error('Error fetching blogs by category:', response.statusText);
                }
            } catch (error) {
                console.error('Error:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchBlogsByCategory();
    }, [selectedCategory]);

    if (loading) {
        return <p>Loading blogs...</p>;
    }

    const navigateToServiceDetail = (id) => {
        navigate(`/blogsdetails/${id}`);
    };
    const handleCategoryClick = (selectedCategory) => {

        // Navigate to the '/blogbycategory' route with the selected category as a parameter
        navigate(`/blogbycategory/${selectedCategory}`);
    };

    return (
        <div className='bg-slate-50 pb-10'>
            <div className='container'>
                <div className='flex gap-2 pt-4'>
                    <div className='  w-[25%] px-2 h-full rounded'>
                        <div className='bg-white   p-2 h-full rounded-sm'>
                            <h2 className='text-1xl font-nunito font-bold border-b-2 border-dotted pb-1 mb-2'>Category</h2>
                            <ul>
                                {categoriesWithCount.map(category => (
                                    <li key={category.name} className='border-b cursor-pointer hover:text-green-500  border-dotted mt-1 border-slate-900 font-nunito font-bold text-sm'>
                                        <div onClick={() => handleCategoryClick(category.name)}>
                                            <div className='justify-between flex items-center text-center'>
                                                <p><FontAwesomeIcon className='me-2' icon={faList} />
                                                    {category.name}
                                                </p>
                                                <p> ({category.count})</p>
                                            </div>
                                        </div>

                                    </li>
                                ))}
                            </ul>

                        </div>
                        <div className='bg-white p-2 mt-4 rounded-sm'>
                            <h2 className='text-1xl mb-3 font-nunito font-bold border-b-2 border-dotted pb-1'>Random Blog</h2>
                            {blogs && blogs.slice(0, 5).map((blog) => (
                                <div  onClick={() => navigateToServiceDetail(blog._id)} className="flex p-2  h-20 bg-white shadow cursor-pointer rounded pb-8 lg:mb-1 lg:flex-row lg:[border-bottom:1px_solid_rgb(236,_236,_236)]">
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
                    <div className='w-[50%]       bg-white rounded h-auto p-2'>

                        <p className='text-center mt-10 font-bold text-4xl '>
                            {selectedCategory} Blogs
                            <span></span>
                        </p>
                        <hr className='border-b-2 border-dotted mt-2' />
                        <div className='mt-4'>

                            {
                                blogss.map((blog) => (

                                    // eslint-disable-next-line jsx-a11y/anchor-is-valid
                                    <div  onClick={() => navigateToServiceDetail(blog._id)}  className="flex cursor-pointer p-2 flex-col bg-white shadow  rounded pb-8 lg:mb-3 lg:flex-row lg:[border-bottom:1px_solid_rgb(236,_236,_236)]">
                                        <img src={blog.photourl} alt="" className="inline-block rounded h-60 w-full object-cover md:h-36 lg:h-32 lg:w-32" />
                                        <div className="flex flex-col items-start pt-1 lg:px-8">
                                            <div className="mb-2 rounded-md bg-[#f2f2f7] px-2 py-1.5">
                                                <p className="text-sm font-semibold text-[#6574f8]">{blog.category}</p>
                                            </div>
                                            <p className="mb-1 text-sm font-bold  hover:text-green-600 duration-200 sm:text-base md:text-xl">{blog.title}</p>
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
                                    </div>))}
                        </div>




                    </div>
                    <div className='w-[25%]   lg:block xs:hidden bg-white rounded h-[400px]'>
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

                        <div className=' mt-4 grid grid-rows-1 gap-2 relative rounded-sm'>
                            <h2 className='text-2xl  border-b-2 border-dotted text-green-600 font-nunito font-bold'>AI Blogs</h2>
                            {blogs &&
                                blogs.slice(0, 1).map((blog) => (
                                    <div  onClick={() => navigateToServiceDetail(blog._id)} key={blog.id} className='cursor-pointer relative rounded-sm'>
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
                                <div  onClick={() => navigateToServiceDetail(blog._id)} className="flex p-2  h-20 bg-white shadow cursor-pointer rounded pb-8 lg:mb-1 lg:flex-row lg:[border-bottom:1px_solid_rgb(236,_236,_236)]">
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
                        <div className='bg-white mt-4   p-2 h-auto rounded-sm'>


                            <h2 className='text-2xl font-nunito  font-bold border-b-2 border-dotted text-green-500 pb-1 mb-2'>Tag</h2>
                            <ul className='grid grid-cols-3 gap-2 items-center text-center justify-center'>
                                {categoriesWithCount.map(category => (
                                    <li key={category.name} className='border flex items-center text-center justify-center cursor-pointer hover:text-green-500    p-1 rounded border-slate-900 font-nunito font-bold text-sm'>
                                        <div onClick={() => handleCategoryClick(category.name)}>
                                            <div className='justify-between flex items-center text-center'>
                                                <p><FontAwesomeIcon className='me-2 text-green-600' icon={faTags} />
                                                    {category.name}
                                                </p>

                                            </div>
                                        </div>

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

export default BlogBycategory;
