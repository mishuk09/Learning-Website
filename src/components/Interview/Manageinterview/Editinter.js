import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import thumsup from '../../Blog/img/thumsup.png';
import { useParams } from 'react-router-dom';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

function Editinter() {
    const { id } = useParams(); // Destructure id from useParams
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
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        fetchInterviewData(id);
    }, [id]);

    const fetchInterviewData = async (id) => {
        try {
            const response = await axios.get(`http://localhost:5000/interview/get/${id}`);
            const data = response.data;
            setInterviewData(data);
        } catch (error) {
            console.error('Error fetching interview data:', error);
        }
    };


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
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const response = await axios.put(`http://localhost:5000/interview/update/${id}`, interviewData); // Correct endpoint URL
    //         console.log('Interview updated:', response.data);
    //         setSuccess(true);
    //     } catch (error) {
    //         console.error('Error updating interview:', error);
    //     }
    // };
    const handleSubmit = async () => {
        try {
            const response = await fetch(`http://localhost:5000/interview/update/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(interviewData),
            });

            if (response.ok) {
                setSuccess("Blog Edit Successfully...");
                Object.keys(interviewData).forEach((name) => {
                    register({ name }).setValue(interviewData[name]);});

            } else {
                console.error('Failed to update blog post');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleCloseDialog = () => {
        setSuccess(false);
    };

    return (
        <div className='container bg-blue-50'>
            <h2 className='text-4xl font-bold text-center mt-6'>Edit Interview</h2>
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

export default Editinter;
