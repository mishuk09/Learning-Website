// Inside your React component (UpdateBlogPost.js)
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Edit = () => {
    const { id } = useParams();
    // const history = useHistory();
    const [blogData, setBlogData] = useState({
        title: '',
        content: '',
        photourl: '',
        category: '',
    });

    useEffect(() => {
        const fetchBlogPost = async () => {
            try {
                const response = await fetch(`http://localhost:5000/blogs/read/${id}`);
                if (response.ok) {
                    const data = await response.json();
                    // Set the state with the fetched blog post data
                    setBlogData({
                        title: data.title,
                        content: data.content,
                        photourl: data.photourl,
                        category: data.category,
                    });
                } else {
                    console.error('Failed to fetch blog post');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchBlogPost();
    }, [id]);

    const handleInputChange = (e) => {
        setBlogData({
            ...blogData,
            [e.target.name]: e.target.value,
        });
    };

    const handleUpdate = async () => {
        try {
            const response = await fetch(`http://localhost:5000/blogs/update/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(blogData),
            });

            if (response.ok) {
                const updatedPost = await response.json();
                console.log('Updated Blog Post:', updatedPost);
                // history.push(`/blogs/${id}`);
            } else {
                console.error('Failed to update blog post');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            {id}
            <h2>Edit Blog Post</h2>
            <label>
                Title:
                <input
                    type="text"
                    name="title"
                    value={blogData.title}
                    onChange={handleInputChange}
                />
            </label>
            <label>
                Content:
                <textarea
                    name="content"
                    value={blogData.content}
                    onChange={handleInputChange}
                />
            </label>
            <label>
                Photo URL:
                <input
                    type="text"
                    name="photourl"
                    value={blogData.photourl}
                    onChange={handleInputChange}
                />
            </label>
            <label>
                Category:
                <input
                    type="text"
                    name="category"
                    value={blogData.category}
                    onChange={handleInputChange}
                />
            </label>
            <button onClick={handleUpdate}>Update Blog Post</button>
        </div>
    );
};

export default Edit;
