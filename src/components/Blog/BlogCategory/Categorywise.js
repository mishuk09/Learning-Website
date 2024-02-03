import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Categorywise = () => {
    const { categoryName } =  useParams();
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlogsByCategory = async () => {
            try {
                const response = await fetch(`http://localhost:5000/blog/category/${categoryName}`);
                if (response.ok) {
                    const data = await response.json();
                    setBlogs(data);
                } else {
                    console.error('Error fetching blogs by category');
                }
            } catch (error) {
                console.error('Error:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogsByCategory();
    }, [categoryName]);

    if (loading) {
        return <p>Loading blogs...</p>;
    }

    return (
        <div>
            <h2>Blogs in Category: {categoryName}</h2>
            {blogs.map(blog => (
                <div key={blog._id}>
                    <h3>{blog.title}</h3>
                    <p>{blog.content}</p>
                </div>
            ))}
        </div>
    );
};

export default Categorywise;
