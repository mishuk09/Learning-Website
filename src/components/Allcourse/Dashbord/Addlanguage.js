import React, { useRef, useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import JoditEditor from 'jodit-react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import thumsup from '../../Blog/img/thumsup.png';
import { styled } from '@mui/material/styles';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

function AddLanguage() {
    const editor = useRef(null);
    const [content, setContent] = useState('');
    const [languageData, setLanguageData] = useState({
        title: '',

        details: [{
            id: 1,
            pychild: '',
            pydetails: [{
                title: '',
                content: '',
                photourl: '',
                date: '',
            }]
        }]
    }); 
    const [success, setSuccess] = useState(false);

    const handleAddChild = () => {
        setLanguageData(prevState => ({
            ...prevState,
            details: [...prevState.details, {
                id: prevState.details.length + 1,
                pychild: '',
                pydetails: [{
                    title: '',
                    content: '',
                    photourl: '',
                    date: '',
                }]
            }]
        }));
    };

    const handleAddDetail = (index) => {
        setLanguageData(prevState => ({
            ...prevState,
            details: prevState.details.map((childObj, i) =>
                i === index ? {
                    ...childObj,
                    pydetails: [...childObj.pydetails, {
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
            const response = await axios.post('http://localhost:5000/language/create', languageData);
            console.log('Language created:', response.data);
            setLanguageData({
                title: '',

                details: [{
                    id: 1,
                    pychild: '',
                    pydetails: [{
                        title: '',
                        content: '',
                        photourl: '',
                        date: '',
                    }]
                }]
            });
            setSuccess(true);
        } catch (error) {
            console.error('Error creating language:', error);
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
                        <input className="text-black rounded p-2 mt-2 w-full bg-white shadow border" type="text" name="title" value={languageData.title} onChange={(e) => setLanguageData(prevState => ({ ...prevState, title: e.target.value }))} required />
                    </div>

                </div>

                {languageData.details.map((child, index) => (
                    <div key={index}>
                        <div className='mt-20 grid grid-cols-3 gap-3'>
                            <div>
                                <label>Child {index + 1} Title:</label>
                                <input className="text-black rounded p-2 mt-2 mb-2 w-full bg-white shadow border" type="text" value={child.pychild} onChange={(e) => setLanguageData(prevState => ({ ...prevState, details: prevState.details.map((childObj, i) => i === index ? { ...childObj, pychild: e.target.value } : childObj) }))} />
                            </div>
                        </div>
                        {child.pydetails.map((detail, detailIndex) => (
                            <div key={detailIndex}>
                                <div className='mt-20 grid grid-cols-3 gap-3'>
                                    <div>
                                        <label>Detail {detailIndex + 1} Title:</label>
                                        <input className="text-black rounded p-2 mt-2 mb-2 w-full bg-white shadow border" type="text" value={detail.title} onChange={(e) => setLanguageData(prevState => ({ ...prevState, details: prevState.details.map((childObj, i) => i === index ? { ...childObj, pydetails: childObj.pydetails.map((detailObj, j) => j === detailIndex ? { ...detailObj, title: e.target.value } : detailObj) } : childObj) }))} />
                                    </div>
                                    <div>
                                        <label>Content:</label>
                                        <JoditEditor
                                            ref={editor}
                                            value={detail.content}
                                            tabIndex={1}
                                            onBlur={(newContent) => setLanguageData(prevState => ({ ...prevState, details: prevState.details.map((childObj, i) => i === index ? { ...childObj, pydetails: childObj.pydetails.map((detailObj, j) => j === detailIndex ? { ...detailObj, content: newContent } : detailObj) } : childObj) }))}
                                            onChange={(newContent) => setLanguageData(prevState => ({ ...prevState, details: prevState.details.map((childObj, i) => i === index ? { ...childObj, pydetails: childObj.pydetails.map((detailObj, j) => j === detailIndex ? { ...detailObj, content: newContent } : detailObj) } : childObj) }))}
                                        />
                                    </div>
                                    <div>
                                        <label>Photo URL:</label>
                                        <input className="text-black rounded p-2 mt-2 mb-2 w-full bg-white shadow border" type="text" value={detail.photourl} onChange={(e) => setLanguageData(prevState => ({ ...prevState, details: prevState.details.map((childObj, i) => i === index ? { ...childObj, pydetails: childObj.pydetails.map((detailObj, j) => j === detailIndex ? { ...detailObj, photourl: e.target.value } : detailObj) } : childObj) }))} />
                                    </div>
                                    <div>
                                        <label>Date:</label>
                                        <input className="text-black rounded p-2 mt-2 mb-2 w-full bg-white shadow border" type="date" value={detail.date} onChange={(e) => setLanguageData(prevState => ({ ...prevState, details: prevState.details.map((childObj, i) => i === index ? { ...childObj, pydetails: childObj.pydetails.map((detailObj, j) => j === detailIndex ? { ...detailObj, date: e.target.value } : detailObj) } : childObj) }))} />
                                    </div>
                                </div>
                            </div>
                        ))}
                        <button type="button" className='border font-bold w-100 p-2 mt-3 rounded bg-green-500 text-white' onClick={() => handleAddDetail(index)}>Add Detail</button>
                    </div>
                ))}
                <button type="button" className='border w-100 font-bold p-2 mt-3 rounded bg-green-500 text-white' onClick={handleAddChild}>Add Child</button>
                <button type="submit" className="text-white rounded p-2 mt-3 font-bold border w-full bg-blue-500 mb-20">Submit</button>
            </form>
        </div>
    );
}

export default AddLanguage;
