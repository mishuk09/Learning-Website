import React, { useEffect, useState } from 'react';

const useBlogs = () => {
    const [blogs, setBlogs] = useState();
    useEffect(() => {
        const url = 'http://localhost:5000/blog/read';
        fetch(url)
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, [])
    return { blogs, setBlogs};
};

export default useBlogs;