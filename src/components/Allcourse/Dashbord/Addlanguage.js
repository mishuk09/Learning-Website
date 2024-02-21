import React, { useMemo, useRef, useState } from 'react';
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
import JoditEditor from 'jodit-react';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

function Addlanguage() {
    const editor = useRef(null);
    const [content, setContent] = useState('');
    const [interviewData, setInterviewData] = useState({

        title: '',
        pythonSchema: [{
            id: 1,
            pychild: '',
            pythonDetails: [{
                title: '',
                content: '',
                photourl: '',
                date: '',
            }]
        }]
    });
    const [success, setSuccess] = useState('');




    const handleChange = (value) => {
        setInterviewData(prevState => ({ ...prevState, content: value }));
    };

    const handleAddChild = () => {
        setInterviewData(prevState => ({
            ...prevState,
            pythonDetails: [...prevState.pythonDetails, {
                id: prevState.pythonDetails.length + 1,
                pychild: '',
                pythonDetails: [{
                    title: '',
                    content: '',
                    photourl: '',
                    date: '',
                }]
            }]
        }));
    };

    const handleAddLink = (index) => {
        setInterviewData(prevState => ({
            ...prevState,
            pythonDetails: prevState.pythonDetails.map((childObj, i) =>
                i === index ? {
                    ...childObj,
                    pythonDetails: [...childObj.pythonDetails, {
                        title: '',
                        content: '',
                        photourl: '',
                        date: '',
                    }]
                } : childObj
            )
        }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/language/create', interviewData);
            console.log('Interview created:', response.data);
            // Reset form after successful submission if needed
            setInterviewData({

                title: '',
                pythonSchema: [{
                    id: 1,
                    pychild: '',
                    pythonDetails: [{
                        title: '',
                        content: '',
                        photourl: '',
                        date: '',
                    }]
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
            <h2 className='text-4xl font-bold text-center mt-6'>Add Language</h2>
            {success && (
                <BootstrapDialog onClose={handleCloseDialog} aria-labelledby="customized-dialog-title" open={success}>
                    <DialogTitle sx={{ m: 0, p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }} id="customized-dialog-title">
                        <img className="w-[200px]" src={thumsup} alt="" />
                        Language Added Successfully...
                    </DialogTitle>
                </BootstrapDialog>
            )}
            <form onSubmit={handleSubmit}>
                <div className='grid grid-cols-2 gap-3 mt-6 mb-6'>
                    <div>
                        <label>Language Title:</label>
                        <input className="text-black rounded p-2 mt-2   w-full bg-white shadow border" type="text" name="title" value={interviewData.title} onChange={(e) => setInterviewData(prevState => ({ ...prevState, title: e.target.value }))} required />

                    </div>

                    {/* <div>
                        <label>Photo URL:</label>
                        <input className="text-black rounded p-2 mt-2   w-full bg-white shadow border" type="text" name="photourl" value={interviewData.photourl} onChange={(e) => setInterviewData(prevState => ({ ...prevState, photourl: e.target.value }))} />
                    </div> */}


                    {/* <div>
                        <label>Date:</label>
                        <input className="text-black rounded p-2 mt-2   w-full bg-white shadow border" type="date" name="date" value={interviewData.date} onChange={(e) => setInterviewData(prevState => ({ ...prevState, date: e.target.value }))} />
                    </div> */}
                </div>
                {/* <label>Content:</label>
                <JoditEditor
                    ref={editor}
                    value={content}
                    // config={config}
                    tabIndex={1} // tabIndex of textarea
                    onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                    // value={interviewData.content}
                    onChange={handleChange}
                /> */}

                {interviewData.pythonSchema.map((child, index) => (
                    <div> <div className='mt-20 grid grid-cols-3 gap-3' key={index}>
                        <div>
                            <label>Child {index + 1} Title:</label>
                            <input className="text-black rounded p-2 mt-2  mb-2 w-full bg-white shadow border" type="text" name={`title-${index}`} value={child.title} onChange={(e) => setInterviewData(prevState => ({ ...prevState, childObjects: prevState.childObjects.map((childObj, i) => i === index ? { ...childObj, title: e.target.value } : childObj) }))} />

                        </div>
                        {child.pythonDetails.map((link, childIndex) => (
                            <div key={childIndex} className=''>
                                <div>
                                    <label>Question</label>
                                    <input className="text-black rounded p-2 mt-2   w-full bg-white shadow border" type="text" name="text" value={link.text} onChange={(e) => setInterviewData(prevState => ({ ...prevState, childObjects: prevState.childObjects.map((childObj, i) => i === index ? { ...childObj, links: childObj.links.map((linkObj, j) => j === childIndex ? { ...linkObj, text: e.target.value } : linkObj) } : childObj) }))} />
                                    <div>
                                        <label>Photo URL:</label>
                                        <input className="text-black rounded p-2 mt-2   w-full bg-white shadow border" type="text" name="photourl" value={interviewData.photourl} onChange={(e) => setInterviewData(prevState => ({ ...prevState, photourl: e.target.value }))} />
                                    </div>


                                    <div>
                                        <label>Date:</label>
                                        <input className="text-black rounded p-2 mt-2   w-full bg-white shadow border" type="date" name="date" value={interviewData.date} onChange={(e) => setInterviewData(prevState => ({ ...prevState, date: e.target.value }))} />
                                    </div>

                                    <label>Content:</label>
                                    <JoditEditor
                                        ref={editor}
                                        value={content}
                                        // config={config}
                                        tabIndex={1} // tabIndex of textarea
                                        onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                                        // value={interviewData.content}
                                        onChange={handleChange}
                                    />

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

export default Addlanguage;
