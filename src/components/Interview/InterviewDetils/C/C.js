import React, { useEffect, useState } from 'react';
import TutorialHeadlineFormat from '../../../TutorialDetails/TutorialsDetailsComponent/TutorialHeadlineFormat/TutorialHeadlineFormat';
import c from '../../img/c.svg';
import ArticleComponent from '../../../TutorialDetails/TutorialsDetailsComponent/ArticleComponent/ArticleComponent';
import CObject from './CObject';
import TutorialDetilsFormat from '../../../TutorialDetails/TutorialsDetailsComponent/TutorialDetilsFormat/TutorialDetilsFormat';
import { useParams, useLocation } from 'react-router-dom';


const C = () => {
    const { name } = useParams();
    const location = useLocation();
    const { state } = location;
    const img = state ? state.img : null;
    const [interviews, setInterviews] = useState([]);

    useEffect(() => {
        const fetchInterviews = async () => {
            try {
                const url = 'http://localhost:5000/interview/get';
                const response = await fetch(url);
                const data = await response.json();
                // Filter interviews based on matching name and title
                const filteredInterviews = data.filter(interview => interview.title === name);
                setInterviews(filteredInterviews);
            } catch (error) {
                console.error('Error fetching interviews:', error);
            }
        };

        fetchInterviews();
    }, [name]); // Dependency array with 'name'

    return (
        <div className='container flex mt-10 gap-3 rounded'>
            <div className='w-[20%] bg-slate-900 rounded h-full'>
                <TutorialHeadlineFormat logo={img || c} name={name} description='Interview Question' />
                <div className='mt-2'>
                    {CObject.map((data) => (
                        <TutorialDetilsFormat key={data.id} title={data.title} icon={data.icon} links={data.links} />
                    ))}
                </div>
            </div>

            <div className='w-[60%] h-full p-2 bg-slate-50 border-1 rounded'>
                {interviews.map((interview) => (
                    <>
                        <div key={interview.id}>{interview.title}</div>
                        <div className='text-justify pt-10 font-nunito text-xl' dangerouslySetInnerHTML={{ __html: interview.content }} />

                    </>

                ))}
            </div>
            <ArticleComponent />
        </div>
    );
};

export default C;
