import React, { useEffect, useState } from 'react';

const Deleteblog = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogPosts = async () => {
            try {
                const response = await fetch('http://localhost:5000/blog/read'); // Adjust the URL as needed
                if (response.ok) {
                    const data = await response.json();
                    setBlogs(data);
                } else {
                    console.error('Failed to fetch blog posts');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchBlogPosts();
    }, []);

    const handleDelete = id => {
        const proceed = window.confirm("Are you sure?");
        if (proceed) {
            const url = `http://localhost:5000/blog/delete/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.message === 'Blog deleted successfully') {
                        const remaining = blogs.filter(blog => blog._id !== id);
                        console.log('Remaining:', remaining);
                        setBlogs(remaining);
                    } else {
                        console.error('Error:', data.error);
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        }
    }

    return (
        <div className='container'>
            <h1 className='text-center font-bold text-5xl mt-5'>Delete Blog</h1>
            <div className='grid grid-cols-2 mt-10 md:grid-cols-2 xs:grid-cols-1 gap-3 mb-10'>
                {blogs.map(blog => (
                    <div key={blog._id} className='w-[100%] border rounded mx-auto flex'>
                        <div className='w-[30%] h-32 flex items-center'>
                            <img className='w-full rounded' src={blog.photourl} alt="" />
                        </div>
                        <div className='w-[70%] xs:text-sm md:text-lg pt-6 px-3 font-bold'>
                            {blog.title} <br />
                            <p className='mt-2'>
                                <button className='bg-red-600 text-white font-thin text-sm px-2 py-1 rounded-full' onClick={() => handleDelete(blog._id)}>Delete Post</button>
                            </p>
                        </div>


                    </div>
                ))}
            </div>

        </div>
    );
};

export default Deleteblog;
