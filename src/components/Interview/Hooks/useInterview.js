import React, { useEffect, useState } from 'react';

const useInterview = () => {
    const [interview, setInterview] = useState();
    useEffect(() => {
        const url = 'http://localhost:5000/interview/get';
        fetch(url)
            .then(res => res.json())
            .then(data => setInterview(data));
    }, []);

    return { interview };
};

export default useInterview;