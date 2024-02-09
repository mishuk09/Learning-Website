import React, { useState } from 'react';
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

const Addinterview = () => {
    const { register, handleSubmit, reset } = useForm();
    const [value, setValue] = useState('');
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

    const onSubmit = (data) => {
        const url = `http://localhost:5000/interview/create`;
        data.content = value;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                setSuccess("Blog added successfully..");
                setValue('');
                reset();
            });
    };

    const handleCloseDialog = () => {
        setSuccess(false);
    };

    return (
        <div className='bg-slate-50'>
            <h1 className='text-5xl font-bold font-verdina text-center pt-10'>Add Blog</h1>
            {success && (
                <BootstrapDialog onClose={handleCloseDialog} aria-labelledby="customized-dialog-title" open={success}>
                    <DialogTitle sx={{ m: 0, p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }} id="customized-dialog-title">
                        <img className="w-[200px]" src={thumsup} alt="" />
                        Blog Added Successfully...
                    </DialogTitle>
                </BootstrapDialog>
            )}
            <form className="container   mt-6" onSubmit={handleSubmit(onSubmit)}>
                <div className='grid grid-cols-2 gap-3 mb-6'>
                    <input {...register("category")} className="text-black rounded p-2 mt-10   w-full bg-white shadow border" type="text" placeholder="Category" />
                    <input {...register("title")} className="text-black rounded p-2  mt-10   w-full bg-white shadow border" type="text" placeholder="Blog Title" />
                    <input placeholder="Photo URL" className="text-black rounded p-2   mb-2 w-full bg-white shadow border " type="text" {...register("photourl", { required: true })} />
                    <input className="text-black rounded p-2   mb-2 w-full bg-white shadow border" type="date" {...register("date", { required: true })} />
                </div>
                <ReactQuill theme="snow" formats={formats} modules={modules} value={value} className='bg-white   h-[300px]' onChange={setValue} />

                <input type="submit" className="text-white rounded p-2 mt-20 font-bold border w-full bg-blue-500 mb-20" value='Submit' />
            </form>
        </div>
    );
};

export default Addinterview;
