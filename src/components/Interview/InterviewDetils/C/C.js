import React, { useEffect, useState } from 'react';
import TutorialHeadlineFormat from '../../../TutorialDetails/TutorialsDetailsComponent/TutorialHeadlineFormat/TutorialHeadlineFormat';
import c from '../../img/c.svg';
import ArticleComponent from '../../../TutorialDetails/TutorialsDetailsComponent/ArticleComponent/ArticleComponent';
import CObject from './CObject';
import TutorialDetilsFormat from '../../../TutorialDetails/TutorialsDetailsComponent/TutorialDetilsFormat/TutorialDetilsFormat';
import { useParams, useLocation, Link } from 'react-router-dom';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import library from '../../img/library.png';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faArrowDown, faUpDown } from '@fortawesome/free-solid-svg-icons';
import {
    FacebookShareButton
} from "react-share";
import Share from './Share';

const C = ({ url, title }) => {
    const { name } = useParams();
    const location = useLocation();
    const { state } = location;
    const img = state ? state.img : null;
    const photourl = state ? state.photourl : null;
    const [interviews, setInterviews] = useState([]);

    useEffect(() => {
        const fetchInterviews = async () => {
            try {
                const url = 'http://localhost:5000/interview/get';
                const response = await fetch(url);
                const data = await response.json();
                const filteredInterviews = data.filter(interview => interview.title.toLowerCase() === name.toLowerCase());
                setInterviews(filteredInterviews);
            } catch (error) {
                console.error('Error fetching interviews:', error);
            }
        };

        fetchInterviews();
    }, [name]);



    return (
        <div className='container flex mt-10 gap-3 rounded'>
            <div className='w-[20%] bg-slate-900 rounded h-full'>
                <TutorialHeadlineFormat logo={photourl || img || c} name={name} description='Interview Question' />
                <div className='mt-2'>
                    {interviews.map(interview => (
                        interview.childObjects.map((data, index) => (
                            <Accordion key={index}>
                                <AccordionSummary
                                    style={{ backgroundColor: '#1E293B', color: '#fff' }}
                                    expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography className='flex items-center justify-center'>
                                        <img className='w-6 h-6 me-2' src={library} alt="" />
                                        {data.title}
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails style={{ backgroundColor: '#1E293A', color: '#fff' }}>
                                    <Typography>
                                        <div className='flex flex-col text-slate-200 bg-slate-800 w-full'>
                                            {data.links.map((link, index) => (
                                                <Link to={link.to} key={index} className='border-b hover:text-green-500 font-nunito mb-3 border-dotted py-1 hover:bg-slate-800 duration-300'>
                                                    {link.text}
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
                {interviews.map((interview) => (
                    <div key={interview._id}>
                        <div className='flex justify-between border-b-2 pb-2 border-dotted'>
                            <div>
                                <p>
                                    <p className='text-4xl font-bold mt-4 text-gray-800'> {interview.title.toUpperCase()} Interview Question </p>
                                    <small> Last Update:-{interview.date}</small>
                                </p>
                                <p className='mt-3'>
                                    <FontAwesomeIcon className='text-blue-500 me-2' icon={faFacebook} size='xl' />
                                    <FontAwesomeIcon className='text-blue-600 me-2' icon={faLinkedin} size='xl' />
                                    <FontAwesomeIcon className='text-blue-500 me-2' icon={faTwitter} size='xl' />
                                    <FontAwesomeIcon className='text-green-500 me-2' icon={faWhatsapp} size='xl' />
                                </p>

                            </div>

                            <div>
                                <button className='mt-8 border text-sm font-nunito bg-blue-50 rounded px-4 py-2'>Download PDF  <FontAwesomeIcon className='  ms-2  ' icon={faArrowDown} /></button>
                            </div>
                        </div>

                        <div className='text-justify pt-4 text-xl  font-nunito' dangerouslySetInnerHTML={{ __html: interview.content }} />
                    </div>
                ))}
            </div>
            <ArticleComponent />
        </div>
    );
};

export default C;
