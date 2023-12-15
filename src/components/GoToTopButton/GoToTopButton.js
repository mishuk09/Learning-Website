import React, { useState, useEffect } from 'react';

const GoToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        const showButtonAt = 200;

        if (currentScrollY > showButtonAt) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-5 right-5 bg-blue-500 text-white px-4 py-2 rounded-full ${isVisible ? 'visible' : 'hidden'
                }`}
        >
            <img
                src="/path/to/your-logo.png"
                alt="Logo"
                className="w-6 h-6"
            />
        </button>
    );
};

export default GoToTopButton;
