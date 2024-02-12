import React, { useState, useEffect } from 'react';


const DeleteInterview = () => {
    const [interviews, setInterviews] = useState([]);
    const [error, setError] = useState(null);

    const fetchInterviews = async () => {
        try {
            const response = await fetch('http://localhost:5000/interview/get');
            if (!response.ok) {
                throw new Error('Failed to fetch interviews');
            }
            const data = await response.json();
            setInterviews(data);
        } catch (error) {
            setError(error.message);
        }
    };

    useEffect(() => {
        fetchInterviews();
    }, []);

    const handleDelete = id => {
        const proceed = window.confirm("Are you sure?");
        if (proceed) {
            fetch(`http://localhost:5000/interview/delete/${id}`, {
                method: 'DELETE'
            })
            .then(res => {
                if (!res.ok) {
                    throw new Error('Failed to delete interview');
                }
                return res.json();
            })
            .then(() => {
                const remaining = interviews.filter(interview => interview._id !== id);
                setInterviews(remaining);
            })
            .catch(error => {
                setError(error.message);
            });
        }
    };

    return (
        <div className='container'>
            <h1 className='text-center font-bold text-5xl mt-5'>Delete Interview</h1>
            <div className='grid grid-cols-3 mt-10 md:grid-cols-3 xs:grid-cols-1 gap-3 mb-10'>
                {error && <div className="text-red-500">{error}</div>}
                {interviews.map(interview => (
                    <div key={interview._id} className='w-[100%] border rounded mx-auto flex'>
                        <div className='w-[30%]  flex items-center'>
                            <img className='w-full rounded' src={interview.photourl} alt="" />
                        </div>
                        <div className='w-[70%] xs:text-sm md:text-lg pt-2 py-2 px-3 font-bold'>
                            {interview.title} <br />
                            <p className='mt-1'>
                                <button className='bg-red-600 text-white font-thin text-sm px-2 py-1 rounded' onClick={() => handleDelete(interview._id)}>Delete Interview</button>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DeleteInterview;
