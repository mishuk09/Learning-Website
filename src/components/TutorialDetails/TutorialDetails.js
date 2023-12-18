import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { RoundedCorner } from '@mui/icons-material';
import html from './img/html.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faBookSkull, faCube } from '@fortawesome/free-solid-svg-icons';
import library from './img/library.png';
import article from './img/article.svg';
import { Link } from 'react-router-dom';

const TutorialDetails = () => {
    

    return (
        <div className='container flex mt-10 gap-3 rounded'>
            <div className='w-[20%] bg-slate-900 rounded h-full     '>
                <div className='py-6 w-full bg-slate-900 h-full rounded-t  text-center flex flex-col justify-center items-center'>
                    <img className='w-[100px]' src={html} alt="" />
                    <p className='text-slate-100 font-nunito font-bold text-2xl'>HTML</p>
                    <p className='text-slate-100  bg-slate-800 w-full h-10 mt-4 text-center items-center justify-center flex font-nunito'>Programming Language</p>
                </div>

                <div className='mt-2'>
                    <Accordion>
                        <AccordionSummary

                            style={{ backgroundColor: '#1E293B', color: '#fff' }}
                            expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className='flex  '> <img className='w-6 me-2' src={library} alt="" />Introduction</Typography>
                        </AccordionSummary>
                        <AccordionDetails
                            style={{ backgroundColor: '#1E293A', color: '#fff', }}>
                            <Typography>
                                <div className='flex flex-col bg-slate-700 w-full p-1'>
                                    <Link href="#" className='border-b border-dotted p-1 hover:bg-green-500 duration-300'>  <FontAwesomeIcon className='me-2' icon={faArrowRight} />What is HTML?</Link>
                                    <Link href="#" className='border-b border-dotted p-1 hover:bg-green-500 duration-300'>  <FontAwesomeIcon className='me-2' icon={faArrowRight} />What is HTML?</Link>
                                    <Link href="#" className='border-b border-dotted p-1 hover:bg-green-500 duration-300'>  <FontAwesomeIcon className='me-2' icon={faArrowRight} />What is HTML?</Link>
                                    <Link href="#" className='border-b border-dotted p-1 hover:bg-green-500 duration-300'>  <FontAwesomeIcon className='me-2' icon={faArrowRight} />What is HTML?</Link>

                                </div>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary

                            style={{ backgroundColor: '#1E293B', color: '#fff' }}
                            expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className='flex  '> <img className='w-6 me-2' src={library} alt="" />Introduction</Typography>
                        </AccordionSummary>
                        <AccordionDetails
                            style={{ backgroundColor: '#1E293A', color: '#fff', }}>
                            <Typography>
                                <div className='flex flex-col bg-slate-700 w-full p-1'>
                                    <Link href="#" className='border-b border-dotted p-1 hover:bg-green-500 duration-300'>  <FontAwesomeIcon className='me-2' icon={faArrowRight} />What is HTML?</Link>
                                    <Link href="#" className='border-b border-dotted p-1 hover:bg-green-500 duration-300'>  <FontAwesomeIcon className='me-2' icon={faArrowRight} />What is HTML?</Link>
                                    <Link href="#" className='border-b border-dotted p-1 hover:bg-green-500 duration-300'>  <FontAwesomeIcon className='me-2' icon={faArrowRight} />What is HTML?</Link>
                                    <Link href="#" className='border-b border-dotted p-1 hover:bg-green-500 duration-300'>  <FontAwesomeIcon className='me-2' icon={faArrowRight} />What is HTML?</Link>

                                </div>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary

                            style={{ backgroundColor: '#1E293B', color: '#fff' }}
                            expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className='flex  '> <img className='w-6 me-2' src={library} alt="" />Introduction</Typography>
                        </AccordionSummary>
                        <AccordionDetails
                            style={{ backgroundColor: '#1E293A', color: '#fff', }}>
                            <Typography>
                                <div className='flex flex-col bg-slate-700 w-full p-1'>
                                    <Link href="#" className='border-b border-dotted p-1 hover:bg-green-500 duration-300'>  <FontAwesomeIcon className='me-2' icon={faArrowRight} />What is HTML?</Link>
                                    <Link href="#" className='border-b border-dotted p-1 hover:bg-green-500 duration-300'>  <FontAwesomeIcon className='me-2' icon={faArrowRight} />What is HTML?</Link>
                                    <Link href="#" className='border-b border-dotted p-1 hover:bg-green-500 duration-300'>  <FontAwesomeIcon className='me-2' icon={faArrowRight} />What is HTML?</Link>
                                    <Link href="#" className='border-b border-dotted p-1 hover:bg-green-500 duration-300'>  <FontAwesomeIcon className='me-2' icon={faArrowRight} />What is HTML?</Link>

                                </div>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>



                </div>
            </div>
            <div className='w-[60%]  h-full   bg-slate-100 border-1 rounded'>Detils</div>
            <div className='w-[20%]  h-full    border-1 rounded'>
                <div className='py-6 w-full bg-slate-900 text-slate-200  h-full rounded-t  text-center flex flex-col justify-center items-center'>
                    <img className='w-[100px]' src={article} alt="" />
                    <p className=' font-nunito font-bold text-2xl'>Articles</p>
                    <p className='text-slate-100  bg-slate-800 w-full h-10 mt-4 text-center items-center justify-center flex font-nunito'>Technology & Coding</p>
                </div>
                <div className='w-full border-b h-[100px]'> </div>
                <div className='w-full border-b h-[100px]'> </div>
                <div className='w-full border-b h-[100px]'> </div>
                <div className='w-full border-b h-[100px]'> </div>
            </div>

        </div>
    );
};

export default TutorialDetails;

