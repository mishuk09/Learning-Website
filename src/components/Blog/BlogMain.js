import { faClock, faList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useBlogs from './Hooks/useBlogs';

const BlogMain = ({ onSelectCategory }) => {
    const { blogs } = useBlogs();
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [categoriesWithCount, setCategoriesWithCount] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch('http://localhost:5000/blog/categories');
                if (response.ok) {
                    const data = await response.json();
                    setCategories(data);
                } else {
                    console.error('Error fetching categories');
                }
            } catch (error) {
                console.error('Error:', error);
            } finally {
                setLoading(false);
            }
        };

        const fetchCategoriesWithCount = async () => {
            try {
                const response = await fetch('http://localhost:5000/blog/categoriesWithCount');
                if (response.ok) {
                    const data = await response.json();
                    setCategoriesWithCount(data);
                } else {
                    console.error('Error fetching categories with count');
                }
            } catch (error) {
                console.error('Error:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchCategories();
        fetchCategoriesWithCount();
    }, []);


    if (loading) {
        return <p>Loading categories...</p>;
    }

    return (
        <div className='bg-slate-200'>
            <div className='container'>
                <div className='flex gap-3 w-full pt-6'>
                    <div className='  w-[25%] p-2 h-full rounded'>
                        <div className='bg-white   p-2 h-full rounded'>


                            <h2 className='text-1xl font-nunito font-bold'>Category</h2>
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
                        <div className='bg-white p-2 mt-4 rounded'>
                            <h2 className='text-1xl mb-3 font-nunito font-bold'>Random Blog</h2>
                            {blogs.slice(0, 5).map((blog) => (
                                <div className="flex p-2  h-20 bg-white shadow cursor-pointer rounded pb-8 lg:mb-1 lg:flex-row lg:[border-bottom:1px_solid_rgb(236,_236,_236)]">
                                    <img src={blog.photourl} alt="" className="inline-block rounded object-cover w-20" />
                                    <div className="flex flex-col items-start   ps-2">
                                        {blog.title.split(' ').slice(0, 5).join(' ')}...
                                        <p className='  text-xs text-slate-500'>
                                        <FontAwesomeIcon className='me-1' icon={faClock} />  {blog.date}
                                        </p>
                                    </div>

                                </div>
                            ))}
                        </div>

                    </div>
                    <div className='bg-white w-[60%] h-full rounded'>hdfsgdfsgdfsgi</div>
                    <div className='bg-white w-[20%] h-full rounded'>hifdsgfdgfd</div>
                </div>
            </div>
        </div>
    );
};

export default BlogMain;
