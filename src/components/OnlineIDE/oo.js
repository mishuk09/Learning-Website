// Inside your React component (UpdateBlogPost.js)
import { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
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
                const response = await fetch(`http://localhost:5000/blog/blogs/${id}`);
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
            const response = await fetch(`http://localhost:5000/blog/update/${id}`, {
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
    const modules = {
        toolbar: [
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
            ['link', 'image'],
            ['clean']
        ],
    };
    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
    ];
    const [value, setValue] = useState('');
    return (
        <div>
            {id}
            <h2>Edit Blog Post</h2>
            <label>
                Title:
             
                    <input 
                     name="title"
                     value={blogData.title}
                     onChange={handleInputChange} className="text-black rounded p-2  mt-10   w-full bg-white shadow border" type="text" placeholder="Blog Title" />



            </label>
            <label>
                Content:
                <textarea
                    name="content"
                    value={blogData.content}
                    onChange={handleInputChange}
                />
                <ReactQuill  name="content"
                    value={blogData.content}
                    onChange={handleInputChange} theme="snow" formats={formats} modules={modules} value={value} className='bg-white   h-[300px]' onChange={setValue} />

            </label>
            <label>
                Photo URL:
                
                    <input  name="photourl"
                    value={blogData.photourl}
                    onChange={handleInputChange} placeholder="Photo URL" className="text-black rounded p-2   mb-2 w-full bg-white shadow border " type="text"/>

            </label>
            <label>
                Category:
                
                <input
                    name="category"
                    value={blogData.category}
                    onChange={handleInputChange} className="text-black rounded p-2 mt-10   w-full bg-white shadow border" type="text" placeholder="Category" />
            </label>
            <button onClick={handleUpdate}>Update Blog Post</button>
        </div>
    );
};

export default Edit;

