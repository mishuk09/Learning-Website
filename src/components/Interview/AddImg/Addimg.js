// ImageUploadForm.js

import React, { useState } from 'react';
import axios from 'axios';

const Addimg = () => {
    const [image, setImage] = useState(null);
    const [imageName, setImageName] = useState('');

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleNameChange = (e) => {
        setImageName(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('image', image);
        formData.append('name', imageName);

        try {
            await axios.post('http://localhost:5000/img/addimg', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            alert('Image uploaded successfully');
            // Reset form after successful upload
            setImage(null);
            setImageName('');
        } catch (error) {
            console.error('Error uploading image:', error);
            alert('Failed to upload image');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="file" onChange={handleImageChange} />
            <input type="text" placeholder="Image Name" value={imageName} onChange={handleNameChange} />
            <button type="submit">Upload Image</button>
        </form>
    );
};

export default Addimg;
