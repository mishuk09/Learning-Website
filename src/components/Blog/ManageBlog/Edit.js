import { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useParams } from 'react-router-dom';
import thumsup from '../img/thumsup.png';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { useForm } from 'react-hook-form';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const Edit = () => {
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [success, setSuccess] = useState('');
    const { register, handleSubmit,reset } = useForm();


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
                    setBlogData({
                        title: data.title,
                        content: data.content,
                        photourl: data.photourl,
                        category: data.category,
                    });
                    setIsLoading(false); // Set loading to false after data is fetched
                } else {
                    console.error('Failed to fetch blog post');
                    setIsLoading(false); // Set loading to false in case of an error
                }
            } catch (error) {
                console.error('Error:', error);
                setIsLoading(false); // Set loading to false in case of an error
            }
        };

        fetchBlogPost();
    }, [id]);
    const handleInputChange = (name, value) => {
        setBlogData({
            ...blogData,
            [name]: value,
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
                setSuccess("Blog Edit Successfully...");
                Object.keys(blogData).forEach((name) => {
                    register({ name }).setValue(blogData[name]);});

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
    const handleCloseDialog = () => {
        setSuccess(false);
    };

    return (
        <div className='bg-slate-50 mb-100 '>
            <div className='container '>

                <h1 className='text-5xl font-bold font-verdina text-center pt-10'>Edit Blog</h1>
                {
                    success && (
                        <BootstrapDialog onClose={handleCloseDialog} aria-labelledby="customized-dialog-title" open={success}>
                            <DialogTitle sx={{ m: 0, p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }} id="customized-dialog-title">
                                <img className="w-[200px]" src={thumsup} alt="" />
                                Blog Edit Successfully...
                            </DialogTitle>
                        </BootstrapDialog>
                    )
                }
                {isLoading ? (
                    // Render a loading indicator or message
                    <p>Loading...</p>
                ) : (
                    // Render the component when data is available
                    <>
                        <form className=' grid grid-cols-2 gap-2 mt-6'>
                            <label>
                                Category
                                <input
                                    name="category"
                                    value={blogData.category}
                                    onChange={(e) => handleInputChange('category', e.target.value)}
                                    className="text-black rounded outline-none p-2 mt-2 w-full bg-white shadow border"
                                    type="text"
                                    placeholder="Category"
                                />
                            </label>
                            <label>
                                Title
                                <input
                                    name="title"
                                    value={blogData.title}
                                    onChange={(e) => handleInputChange('title', e.target.value)}
                                    className="text-black outline-none rounded p-2 mt-2 w-full bg-white shadow border"
                                    type="text"
                                    placeholder="Blog Title"
                                />
                            </label>

                            <label className='mt-4'>
                                Photo URL:
                                <input
                                    name="photourl"
                                    value={blogData.photourl}
                                    onChange={(e) => handleInputChange('photourl', e.target.value)}
                                    placeholder="Photo URL"
                                    className="text-black outline-none rounded   p-2 mb-2 w-full bg-white shadow border"
                                    type="text"
                                />
                            </label>
                            <label className='mt-4'>
                                Photo URL
                                <input
                                    name="photourl"
                                    value={blogData.photourl}
                                    onChange={(e) => handleInputChange('photourl', e.target.value)}
                                    placeholder="Photo URL"
                                    className="text-black rounded p-2  mb-2 w-full bg-white shadow border"
                                    type="text"
                                />
                            </label>


                        </form>


                        <label className='mt-4'>
                            Content:
                            <ReactQuill
                                value={blogData.content}
                                onChange={(value) => handleInputChange('content', value)}
                                theme="snow"
                                formats={formats}
                                modules={modules}
                                className='bg-white h-[300px]'
                            />
                        </label>
                        {/* <button onClick={handleUpdate}>Update Blog Post</button> */}
                        <input onClick={handleUpdate} type="submit" className="text-white rounded p-2 mt-20 font-bold border w-full bg-blue-500 mb-20" value='Submit' />

                    </>
                )}

            </div>
        </div>
    );
};

export default Edit;
