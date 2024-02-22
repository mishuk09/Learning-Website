import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import ArticleComponent from './TutorialsDetailsComponent/ArticleComponent/ArticleComponent';
import TutorialHeadlineFormat from './TutorialsDetailsComponent/TutorialHeadlineFormat/TutorialHeadlineFormat';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const TutorialDetails = () => {
    const { name } = useParams();
    const [interviews, setInterviews] = useState([]);
    const location = useLocation();
    const { state } = location;
    const img = state ? state.img : null;
    const [selectedPyDetails, setSelectedPyDetails] = useState(null);

    useEffect(() => {
        const fetchInterviews = async () => {
            try {
                const url = 'http://localhost:5000/language/read';
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Failed to fetch interviews');
                }
                const data = await response.json();
                const filteredInterviews = data.filter(interview => interview.title.toLowerCase() === name.toLowerCase());
                setInterviews(filteredInterviews);
            } catch (error) {
                console.error('Error fetching interviews:', error);
            }
        };

        fetchInterviews();
    }, [name]);

    const handlePyDetailsClick = (pyDetails) => {
        setSelectedPyDetails(pyDetails);
    };

    return (
        <div className='container interview-div flex mt-10 gap-3 rounded'>
            <div className='w-[20%] bg-slate-900 rounded h-full'>
                <TutorialHeadlineFormat logo={img} description={`${name} Tutorial`} />

                <div className='mt-2'>
                    {interviews.map(interview => (
                        interview.details.map((data, index) => (
                            <Accordion key={index}>
                                <AccordionSummary
                                    style={{ backgroundColor: '#1E293B', color: '#fff' }}
                                    expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography className='flex items-center justify-center' onClick={() => handlePyDetailsClick(data.pydetails)}>
                                        {data.pychild}
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails style={{ backgroundColor: '#1E293A', color: '#fff' }}>
                                    <Typography>
                                        <div className='flex flex-col text-slate-200 bg-slate-800 w-full'>
                                            {data.pydetails.map((link, index) => (
                                                <Link to={link.to} key={index} className='border-b hover:text-green-500 font-nunito mb-3 border-dotted py-1 hover:bg-slate-800 duration-300'>
                                                    {link.title}
                                                </Link>
                                            ))}
                                        </div>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        ))
                    ))}
                </div>
            </div>

            <div className='w-[60%] h-full p-2 bg-slate-50 border-1 rounded'>
                {selectedPyDetails && (
                    <div className='text-justify pt-4 font-nunito' dangerouslySetInnerHTML={{ __html: selectedPyDetails.content }} />
                )}
            </div>
            <ArticleComponent />
        </div>
    );
};

export default TutorialDetails;
