// ImageDisplay.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ImageDisplay = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await axios.get('http://localhost:5000/img/getimg');
                setImages(response.data);
            } catch (error) {
                console.error('Error fetching images:', error);
            }
        };

        fetchImages();
    }, []);

    return (
        <div>
            {images.map((image) => (
                <img key={image._id} src={`data:image/jpeg;base64,${image.data}`} alt={image.name} />
            ))}
        </div>
    );
};

export default ImageDisplay;
