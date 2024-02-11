// ArticleComponent.js
import React from 'react';
import article from './img/article.svg';
import useBlogs from '../../../Blog/Hooks/useBlogs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const ArticleComponent = () => {
    const navigate = useNavigate();
    const { blogs, loading } = useBlogs();

    if (loading) {
        return <div>Loading...</div>;
    }

    const navigateToServiceDetail = (id) => {
        navigate(`/blogsdetails/${id}`);
    };

    return (
        <div className='w-[20%] h-full   rounded'>
            <div className='py-6 w-full bg-slate-900 text-slate-200 h-full rounded-t text-center flex flex-col justify-center items-center'>
                <img className='w-[100px]' src={article} alt="" />
                <p className='font-nunito font-bold text-2xl'>Articles</p>
                <p className='text-slate-100 bg-slate-800 w-full h-10 mt-4 text-center items-center justify-center flex font-nunito'>Technology & Coding</p>
            </div>
            {blogs && blogs.slice(0, 10).map((blog) => (
                <div onClick={() => navigateToServiceDetail(blog._id)} className="flex p-2  h-20 bg-white shadow cursor-pointer rounded-sm pb-8 lg:mb-1 lg:flex-row lg:[border-bottom:1px_solid_rgb(236,_236,_236)]">
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
    );
};

export default ArticleComponent;
