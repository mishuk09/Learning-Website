import { faClock, faList, faTags, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useBlogs from './Hooks/useBlogs';
import Blogs from './Blogs';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Pagination, Stack } from '@mui/material';
// import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';


const BlogMain = ({ onSelectCategory }) => {
    const { blogs, categoriesWithCount, loading } = useBlogs();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPageSection1 = 5;
    // const [selectedCategory, setSelectedCategory] = useState(null);


    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    const startIndex = (currentPage - 1) * itemsPerPageSection1;
    const endIndex = startIndex + itemsPerPageSection1;
    const displayedBlogs = blogs && blogs.slice(startIndex, endIndex);

    const navigate = useNavigate();

    const navigateToServiceDetail = (id) => {
        navigate(`/blogsdetails/${id}`);
    };

    if (loading) {
        return <p>Loading categories...</p>;
    }



    const handleCategoryClick = (selectedCategory) => {
        // setSelectedCategory(selectedCategory);

        // Navigate to the '/blogbycategory' route with the selected category as a parameter
        navigate(`/blogbycategory/${selectedCategory}`);
    };

    return (
        <div className=''>
            <div className='container'>
                <div className='flex gap-2 w-full pt-6'>
                    <div className='  w-[25%] px-2 h-full rounded'>
                        <div className='bg-white   px-2 py-3 h-full rounded-sm'>
                            <h2 className='text-1xl font-nunito font-bold border-b-2 border-dotted pb-1 mb-2'>Category</h2>
                            <ul>
                                {categoriesWithCount.map(category => (
                                    <li>
                                        <div onClick={() => handleCategoryClick(category.name)} key={category.name} className='border-b cursor-pointer hover:text-green-500  border-dotted mt-1 border-slate-900 font-nunito font-bold text-sm'>
                                            <div>
                                                <div className='justify-between flex items-center text-center'>
                                                    <p><FontAwesomeIcon className='me-2' icon={faList} />
                                                        {category.name}
                                                    </p>
                                                    <p> ({category.count})</p>
                                                </div>
                                            </div>

                                        </div>
                                    </li>
                                ))}
                            </ul>

                        </div>
                        <div className='bg-white p-2 mt-4 rounded-sm'>
                            <h2 className='text-1xl mb-3 font-nunito font-bold border-b-2 border-dotted pb-1'>Random Blog</h2>
                            {blogs && blogs.slice(0, 5).map((blog) => (
                                <div onClick={() => navigateToServiceDetail(blog._id)} className="flex p-2  h-20 bg-white font-nunito   cursor-pointer   pb-8 lg:mb-1 lg:flex-row  border-b ">
                                    <img src={blog.photourl} alt="" className="inline-block rounded object-cover w-20" />
                                    <div className="flex flex-col items-start   ps-2">
                                        <p className='hover:text-green-600 font-bold leading-4 duration-200'>
                                            {blog.title.split(' ').slice(0, 5).join(' ')}...
                                        </p>
                                        <p className=' mt-2  text-xs text-slate-500'>
                                            <FontAwesomeIcon className='me-1' icon={faClock} />  {blog.date}
                                        </p>
                                    </div>

                                </div>
                            ))}
                        </div>

                    </div>

                    <div className=' bg-white p-2  w-[50%] h-full rounded relative'>
                        <div className='h-full    relative rounded-sm'>
                            {
                                blogs && blogs.slice(0, 1).map((blog) => (
                                    <div className='cursor-pointer' onClick={() => navigateToServiceDetail(blog._id)} key={blog.id}>
                                        <div className='relative'>
                                            <img className='w-full rounded-sm h-[350px]' src={blog.photourl} alt="" />

                                            {/* Add the gradient overlay using ::before pseudo-element */}
                                            <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black'></div>
                                        </div>

                                        <div className='absolute text-white ps-3 bottom-3'>
                                            <p style={{ backgroundColor: '#263e57' }} className='text-sm p-1 mt-1 w-20 text-center rounded-sm'>{blog.category}</p>
                                            <p className='mt-2 font-bold hover:text-green-500 duration-200  font-sans text-4xl'>{blog.title}</p>
                                            <p className='text-sm mt-2 text-slate-300 font-nunito'> <FontAwesomeIcon className='me-1' icon={faClock} />  {blog.date}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className=' grid grid-cols-2 gap-2 mt-4'>
                            {
                                blogs && blogs.slice(1, 3).map((blog) => (
                                    <div onClick={() => navigateToServiceDetail(blog._id)} className="flex  bg-white cursor-pointer flex-col gap-3 px-2 py-2 shadow rounded-sm  ">
                                        <img src={blog.photourl} alt="" className="inline-block  rounded-t h-[150px] w-full object-cover" />
                                        <div className="flex flex-col items-start ">
                                            <div className="mb-2 rounded-md bg-[#f2f2f7] px-3 py-1.5">
                                                <p className="text-sm font-semibold text-[#6574f8]">{blog.category}</p>
                                            </div>
                                            <p className="mb-1 leading-6   font-bold   hover:text-green-600 duration-200  text-xl">{blog.title}</p>

                                            <p className='text-sm  text-slate-600 font-nunito'> <FontAwesomeIcon className='me-1' icon={faClock} />  {blog.date}</p>


                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className='mt-6'>
                            <h1 className='font-bold text-2xl pb-1 border-b-2 border-dotted mb-3 text-green-500'>Latest Blogs</h1>
                            {
                                displayedBlogs && displayedBlogs.map((blog) => (

                                    // eslint-disable-next-line jsx-a11y/anchor-is-valid
                                    <div onClick={() => navigateToServiceDetail(blog._id)} className="flex cursor-pointer p-2 flex-col bg-white shadow-sm  rounded pb-8 lg:mb-3 lg:flex-row lg:[border-bottom:1px_solid_rgb(236,_236,_236)]">
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
                    <div className='bg-white w-[25%] p-2  h-full rounded'>
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
                                </div>2
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
                                            <p className='mt-2 font-bold hover:text-green-500 duration-200 font-sans text-1xl'>{blog.title}</p>
                                            <p className='text-sm mt-2 text-slate-300 font-nunito'> <FontAwesomeIcon className='me-1' icon={faClock} />  {blog.date}</p>
                                        </div>
                                    </div>
                                ))}
                        </div>
                        <div className='bg-white font-nunito  mt-2 rounded-sm'>

                            {blogs && blogs.slice(0, 3).map((blog) => (
                                <div onClick={() => navigateToServiceDetail(blog._id)} className="flex p-2  h-20 bg-white    cursor-pointer   pb-8 lg:mb-1 lg:flex-row  border-b ">
                                    <img src={blog.photourl} alt="" className="inline-block rounded object-cover w-20" />
                                    <div className="flex flex-col items-start   ps-2">
                                        <p className='hover:text-green-600 leading-4 font-bold duration-200'>
                                            {blog.title.split(' ').slice(0, 5).join(' ')}...
                                        </p>
                                        <p className=' mt-2  text-xs text-slate-500'>
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
                                    <li onClick={() => handleCategoryClick(category.name)} key={category.name} className='border flex items-center text-center justify-center cursor-pointer hover:text-green-500    py-1 rounded border-slate-900 font-nunito font-bold text-sm'>
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
            <div className='flex items-center text-center justify-center mt-14 pb-20'>
                <Stack spacing={2}>
                    <Pagination
                        // count={Math.ceil(blogs.length / itemsPerPageSection1)}
                        count={Math.ceil((blogs?.length || 0) / itemsPerPageSection1)}
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

export default BlogMain;
