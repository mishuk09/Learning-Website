import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const BlogDetails = () => {
    const { blogid } = useParams();
    const navigate = useNavigate();
    const [blog, setBlog] = useState({});
    const [prevBlog, setPrevBlog] = useState(null);
    const [nextBlog, setNextBlog] = useState(null);
    const [getblog, setGetblog] = useState([]);

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
    useEffect(() => {
        const url = 'http://localhost:5000/blog/read';
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                return res.json();
            })
            .then(dat => setGetblog(dat))
            .catch(error => console.error('Error fetching blog list:', error));
    }, []);

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
                    <div className='w-[20%] flex flex-col xs:hidden md:block md:w-[40%] lg:w-[30%] border bg-white rounded h-auto p-2'>
                        {/* Sidebar with other blogs */}
                        {
                            getblog.map((unite) => (
                                // <Link key={unite._id} to={`/blogsdetails/${unite._id}`} className='w-[100%] flex h-32 hover:shadow border-b' onClick={(e) => { e.preventDefault(); navigateToServiceDetail(unite._id); }}>
                                <Link key={unite._id} to={`/blogsdetails/${unite._id}`} className='w-[100%] flex h-32 hover:shadow border-b' onClick={(e) => { e.preventDefault(); navigateToServiceDetail(unite._id); }}>
                                    <div className='w-[40%] h-32 flex items-center'>
                                        <img className='w-full rounded' src={unite.photourl} alt="" />
                                    </div>
                                    <div className='ps-2 w-[60%] font-bold flex items-center'>
                                        {unite.title}
                                    </div>
                                </Link>

                            ))
                        }
                    </div>
                    <div className='w-[60%] xs:w-[100%] md:w-[60%] border bg-white rounded h-auto p-2'>
                        {/* Main content of the selected blog */}
                        <p className='font-verdina font-bold text-4xl mt-6 tracking-wide'>{blog.title}</p>
                        <p className='mt-1 text-slate-600 text-sm'>Date: <span>{blog.date}</span></p>
                        <img className='w-full rounded mt-4' src={blog.photourl} alt="" />
                        <div className='text-justify pt-10 font-nunito text-xl' dangerouslySetInnerHTML={{ __html: blog.content }} />
                        {/* Navigation to previous and next blogs */}
                        {prevBlog && <Link to={`/blogsdetails/${prevBlog._id}`}>Previous Blog</Link>}
                        {nextBlog && <Link to={`/blogsdetails/${nextBlog._id}`}>Next Blog</Link>}
                    </div>
                    <div className='w-[20%] border lg:block xs:hidden bg-white rounded h-[400px]'></div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;
