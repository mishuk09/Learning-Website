import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import thumsup from '../../Blog/img/thumsup.png';
import Prism from 'prismjs'; // Import Prism for syntax highlighting
import 'prismjs/themes/prism-okaidia.css'; // Import Prism theme

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

function AddInterview() {
    const [interviewData, setInterviewData] = useState({
        title: '',
        content: '',
        photourl: '',
        date: '',
        childObjects: [{
            id: 1,
            title: '',
            links: [{ text: '' }]
        }]
    });
    const { register, reset } = useForm();
    const [success, setSuccess] = useState('');


    const modules = {
        toolbar: [

            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
            ['link', 'image'],
            ['clean'],
            [{ 'bold': 'bold' }, { 'italic': 'italic' }, { 'underline': 'underline' }, { 'strike': 'strike' }],        // toggled buttons
            ['blockquote', 'code-block'],
            // [{ 'header': 1 }, { 'header': 2 }],               // custom button values
            // [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
            [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
            [{ 'direction': 'rtl' }],                         // text direction
            // [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
            [{ 'font': [] }],
            [{ 'align': [] }],
            ['clean']
        ]
    };



    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image', 'code-block' // Include 'code-block' in formats
    ];

    const handleChange = (value) => {
        setInterviewData(prevState => ({ ...prevState, content: value }));
    };

    const handleAddChild = () => {
        setInterviewData(prevState => ({
            ...prevState,
            childObjects: [...prevState.childObjects, {
                id: prevState.childObjects.length + 1,
                title: '',
                links: [{ text: '' }]
            }]
        }));
    };

    const handleAddLink = (index) => {
        setInterviewData(prevState => ({
            ...prevState,
            childObjects: prevState.childObjects.map((childObj, i) =>
                i === index ? {
                    ...childObj,
                    links: [...childObj.links, { text: '' }]
                } : childObj
            )
        }));
    };

    // Inside your form component
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setInterviewData(prevState => ({ ...prevState, file }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('file', interviewData.file); // Append the PDF file to the form data
            formData.append('title', interviewData.title);
            formData.append('content', interviewData.content);
            formData.append('photourl', interviewData.photourl);
            formData.append('date', interviewData.date);
            formData.append('childObjects', JSON.stringify(interviewData.childObjects));
    
            const response = await axios.post('http://localhost:5000/interview/create', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            });
            console.log('Interview created:', response.data);
            // Reset form after successful submission if needed
            setInterviewData({
                title: '',
                content: '',
                photourl: '',
                pdf: '', // Reset the PDF field
                date: '',
                childObjects: [{
                    id: 1,
                    title: '',
                    links: [{ text: '' }]
                }]
            });
            setSuccess(true);
        } catch (error) {
            console.error('Error creating interview:', error);
        }
    };
    
    const handleCloseDialog = () => {
        setSuccess(false);
    };

    return (
        <div className='container'>
            <h2 className='text-4xl font-bold text-center mt-6'>Add Interview</h2>
            {success && (
                <BootstrapDialog onClose={handleCloseDialog} aria-labelledby="customized-dialog-title" open={success}>
                    <DialogTitle sx={{ m: 0, p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }} id="customized-dialog-title">
                        <img className="w-[200px]" src={thumsup} alt="" />
                        Interview Added Successfully...
                    </DialogTitle>
                </BootstrapDialog>
            )}
            <form onSubmit={handleSubmit}>
                <div className='grid grid-cols-2 gap-3 mt-6 mb-6'>
                    <div>
                        <label>Main Title:</label>
                        <input className="text-black rounded p-2 mt-2   w-full bg-white shadow border" type="text" name="title" value={interviewData.title} onChange={(e) => setInterviewData(prevState => ({ ...prevState, title: e.target.value }))} required />

                    </div> <div>
                        <label>Photo URL:</label>
                        <input className="text-black rounded p-2 mt-2   w-full bg-white shadow border" type="text" name="photourl" value={interviewData.photourl} onChange={(e) => setInterviewData(prevState => ({ ...prevState, photourl: e.target.value }))} />
                    </div>

                    <div>
                        <label>Photo:</label>
                        <input type="file" accept="image/*" onChange={handleFileChange} className="text-black rounded p-2 mt-2   w-full bg-white shadow border" />
                    </div>

                    <div>
                        <label>Date:</label>
                        <input className="text-black rounded p-2 mt-2   w-full bg-white shadow border" type="date" name="date" value={interviewData.date} onChange={(e) => setInterviewData(prevState => ({ ...prevState, date: e.target.value }))} />
                    </div> </div>
                <label>Content:</label>
                <ReactQuill theme="snow" formats={formats} modules={modules} value={interviewData.content} onChange={handleChange} className='bg-white h-[400px]' />
                {interviewData.childObjects.map((child, index) => (
                    <div> <div className='mt-20 grid grid-cols-3 gap-3' key={index}>
                        <div>
                            <label>Child {index + 1} Title:</label>
                            <input className="text-black rounded p-2 mt-2  mb-2 w-full bg-white shadow border" type="text" name={`title-${index}`} value={child.title} onChange={(e) => setInterviewData(prevState => ({ ...prevState, childObjects: prevState.childObjects.map((childObj, i) => i === index ? { ...childObj, title: e.target.value } : childObj) }))} />

                        </div>
                        {child.links.map((link, childIndex) => (
                            <div key={childIndex} className=' '>
                                <div>
                                    <label>Question</label>
                                    <input className="text-black rounded p-2 mt-2   w-full bg-white shadow border" type="text" name="text" value={link.text} onChange={(e) => setInterviewData(prevState => ({ ...prevState, childObjects: prevState.childObjects.map((childObj, i) => i === index ? { ...childObj, links: childObj.links.map((linkObj, j) => j === childIndex ? { ...linkObj, text: e.target.value } : linkObj) } : childObj) }))} />
                                </div>
                            </div>
                        ))}
                    </div>
                        <button type="button" className='border font-bold w-100 p-2 mt-3 rounded bg-green-500 text-white' onClick={() => handleAddLink(index)}>Add Question</button>
                    </div>
                ))}
                <button type="button" className='border w-100 font-bold p-2 mt-3 rounded bg-green-500 text-white' onClick={handleAddChild}>Add Child</button>
                <button type="submit" className="text-white rounded p-2 mt-3 font-bold border w-full bg-blue-500 mb-20" >Submit</button>
            </form>
        </div>
    );
}

export default AddInterview;
