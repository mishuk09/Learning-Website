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
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
            ['link', 'image'],
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/interview/create', interviewData);
            console.log('Interview created:', response.data);
            // Reset form after successful submission if needed
            setInterviewData({
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
            setSuccess(true);
        } catch (error) {
            console.error('Error creating interview:', error);
        }
    };

    const handleCloseDialog = () => {
        setSuccess(false);
    };

    return (
        <div>
            <h2>Create Interview</h2>
            {success && (
                <BootstrapDialog onClose={handleCloseDialog} aria-labelledby="customized-dialog-title" open={success}>
                    <DialogTitle sx={{ m: 0, p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }} id="customized-dialog-title">
                        <img className="w-[200px]" src={thumsup} alt="" />
                        Interview Added Successfully...
                    </DialogTitle>
                </BootstrapDialog>
            )}
            <form onSubmit={handleSubmit}>
                <label>Main Title:</label>
                <input type="text" name="title" value={interviewData.title} onChange={(e) => setInterviewData(prevState => ({ ...prevState, title: e.target.value }))} required />
                <label>Content:</label>
                <label>Photo URL:</label>
                <input type="text" name="photourl" value={interviewData.photourl} onChange={(e) => setInterviewData(prevState => ({ ...prevState, photourl: e.target.value }))} />
                <label>Date:</label>
                <input type="text" name="date" value={interviewData.date} onChange={(e) => setInterviewData(prevState => ({ ...prevState, date: e.target.value }))} />
                <ReactQuill theme="snow" formats={formats} modules={modules} value={interviewData.content} onChange={handleChange} className='bg-white h-[300px]' />

                {interviewData.childObjects.map((child, index) => (
                    <div className='mt-20' key={index}>
                        <label>Child {index + 1} Title:</label>
                        <input type="text" name={`title-${index}`} value={child.title} onChange={(e) => setInterviewData(prevState => ({ ...prevState, childObjects: prevState.childObjects.map((childObj, i) => i === index ? { ...childObj, title: e.target.value } : childObj) }))} />
                        {child.links.map((link, childIndex) => (
                            <div key={childIndex}>
                                <label>Link Text:</label>
                                <input type="text" name="text" value={link.text} onChange={(e) => setInterviewData(prevState => ({ ...prevState, childObjects: prevState.childObjects.map((childObj, i) => i === index ? { ...childObj, links: childObj.links.map((linkObj, j) => j === childIndex ? { ...linkObj, text: e.target.value } : linkObj) } : childObj) }))} />
                            </div>
                        ))}
                        <button type="button" onClick={() => handleAddLink(index)}>Add Link</button>
                    </div>
                ))}
                <button type="button" onClick={handleAddChild}>Add Child</button>
                <button type="submit">Create Interview</button>
            </form>
        </div>
    );
}

export default AddInterview;
