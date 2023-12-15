import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
    const buttonStyle = {
        position: 'fixed',
        bottom: '20px',
        right: '10px',
        zIndex: '999',
        backgroundColor: '#007bff',
        borderRadius: '5px',
        paddingTop: '5px',
        paddingBottom: '5px',
        paddingLeft: '8px',
        paddingRight: '8px',

        cursor: 'pointer'
    };

    return (
        <button
            style={buttonStyle}
            onClick={scrollToTop}
            className={`fixed    ${isVisible ? 'visible' : 'hidden'
                }`}
        >
            <FontAwesomeIcon icon={faChevronUp} />
        </button>
    );
};

export default GoToTopButton;
