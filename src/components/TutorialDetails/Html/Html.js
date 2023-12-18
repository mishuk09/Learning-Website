import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import html from './img/html.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import library from './img/library.png';
import { Link } from 'react-router-dom';
import HtmlObject from './HtmlObject';
import ArticleComponent from '../TutorialsDetailsComponent/ArticleComponent/ArticleComponent';
import DescriptionComponent from '../TutorialsDetailsComponent/DescriptionComponent/DescriptionComponent';
import TutorialHeadlineFormat from '../TutorialsDetailsComponent/TutorialHeadlineFormat/TutorialHeadlineFormat';

const Html = () => {
    return (
        <div className='container flex mt-10 gap-3 rounded'>
            <div className='w-[20%] bg-slate-900 rounded h-full     '>
                <TutorialHeadlineFormat></TutorialHeadlineFormat>
                <div className='mt-2'>
                    {
                        HtmlObject.map((data) => (
                            <Accordion key={data.id}>
                                <AccordionSummary

                                    style={{ backgroundColor: '#1E293B', color: '#fff' }}
                                    expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography className='flex  '> <img className='w-6 me-2' src={library} alt="" /> {data.title}</Typography>
                                </AccordionSummary>
                                <AccordionDetails  style={{ backgroundColor: '#1E293A', color: '#fff', }}>
                                    <Typography>
                                        <div className='flex flex-col bg-slate-700 w-full p-1'>
                                            {
                                                data.links.map((link) => (
                                                    <Link to={link.to} className='border-b border-dotted p-1 hover:bg-green-500 duration-300'>  <FontAwesomeIcon className='me-2' icon={faArrowRight} /> {link.text}</Link>
                                                ))
                                            }
                                        </div>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        ))
                    }
                </div>
            </div>
            <DescriptionComponent />
            <ArticleComponent />
        </div>
    );
};

export default Html;