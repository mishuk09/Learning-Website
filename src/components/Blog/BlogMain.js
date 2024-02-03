import React, { useEffect, useState } from 'react';

const BlogMain = ({onSelectCategory}) => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

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

        fetchCategories();
    }, []);

    if (loading) {
        return <p>Loading categories...</p>;
    }

    return (
        <div className='  bg-slate-200'>
            <div className='container  '>
                <div className='flex gap-3 w-full pt-6'>
                    <div className='bg-white w-[20%] p-2 h-full rounded'>
                        <h2 className='text-2xl font-nunito font-bold'>Category</h2>
                        <ul>
                            {categories.map(category => (
                                <li key={category}>
                                    <button onClick={() => onSelectCategory(category)}>{category}</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='bg-white w-[60%] h-full rounded'>hdfsgdfsgdfsgi</div>
                    <div className='bg-white w-[20%] h-full rounded'>hifdsgfdgfd</div>
                </div>


            </div>
        </div>
    );
};

export default BlogMain;