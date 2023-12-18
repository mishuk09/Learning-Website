import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { RoundedCorner } from '@mui/icons-material';
import html from './img/html.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const TutorialDetails = () => {

    return (
        <div className='container flex mt-10 gap-3 rounded'>
            <div className='w-[20%]  rounded h-full     '>
                <div className='py-6 w-full bg-slate-900 h-full rounded-t  text-center flex flex-col justify-center items-center'>
                    <img className='w-[100px]' src={html} alt="" />
                    <p className='text-slate-100 font-nunito font-bold text-2xl'>HTML</p>
                    <p className='text-slate-100 font-nunito'>Programming Language</p>
                </div>

                <div className='mt-2'>
                    <Accordion>
                        <AccordionSummary

                            style={{ backgroundColor: '#1E293B', color: '#fff' }}
                            expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Accordion 1</Typography>
                        </AccordionSummary>
                        <AccordionDetails
                            style={{ backgroundColor: '#1E293A', color: '#fff' }}>
                            <Typography>
                                <div className='flex flex-col '>
                                    <a href="#">  <FontAwesomeIcon className='me-2' icon={faArrowRight} />What is HTML?</a>
                                    <a href="#">  <FontAwesomeIcon className='me-2' icon={faArrowRight} />What is HTML?</a>
                                    <a href="#">  <FontAwesomeIcon className='me-2' icon={faArrowRight} />What is HTML?</a>
                                    <a href="#">  <FontAwesomeIcon className='me-2' icon={faArrowRight} />What is HTML?</a>

                                </div>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography>Accordion 2</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                </div>
            </div>
            <div className='w-[60%]  h-full   bg-slate-100 border-1 rounded'>Detils</div>
            <div className='w-[20%]  h-full   bg-slate-200 border-1 rounded'>Article</div>

        </div>
    );
};

export default TutorialDetails;

