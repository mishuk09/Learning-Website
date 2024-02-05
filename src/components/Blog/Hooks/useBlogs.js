import React, { useEffect, useState } from 'react';

const useBlogs = (blogid) => {
    const [blogs, setBlogs] = useState();
    const [categoriesWithCount, setCategoriesWithCount] = useState([]);
    // const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);



    //get blog.......
    useEffect(() => {
        const url = 'http://localhost:5000/blog/read';
        fetch(url)
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, [blogid]);
    //get blog with categorywise...
    useEffect(() => {
        // const fetchCategories = async () => {
        //     try {
        //         const response = await fetch('http://localhost:5000/blog/categories');
        //         if (response.ok) {
        //             const data = await response.json();
        //             setCategories(data);
        //         } else {
        //             console.error('Error fetching categories');
        //         }
        //     } catch (error) {
        //         console.error('Error:', error);
        //     } finally {
        //         setLoading(false);
        //     }
        // };

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

        // fetchCategories();
        fetchCategoriesWithCount();
    }, [blogid]);
    return { blogs, setBlogs, categoriesWithCount, loading };
};

export default useBlogs;