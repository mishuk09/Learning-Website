import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
 
import { Link } from 'react-router-dom';
 

const TutorialDetilsFormat = (props) => {
    const { title, icon, links } = props;
    return (
        <Accordion>
            <AccordionSummary
                style={{ backgroundColor: '#1E293B', color: '#fff' }}
                expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography className='flex'>
                    <img className='w-6  me-2' src={icon} alt="" />
                    {title}
                </Typography>
            </AccordionSummary>
            <AccordionDetails style={{ backgroundColor: '#1E293A', color: '#fff' }}>
                <Typography>
                    <div className='flex flex-col bg-slate-700 w-full p-1'>
                        {links.map((link, index) => (
                            <Link to={link.to} key={index} className='border-b border-dotted p-1 hover:bg-green-500 duration-300'>
                                <FontAwesomeIcon className='me-2' icon={faArrowRight} />
                                {link.text}
                            </Link>
                        ))}
                    </div>
                </Typography>
            </AccordionDetails>
        </Accordion>

    );
};

export default TutorialDetilsFormat;