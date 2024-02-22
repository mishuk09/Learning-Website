import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { Link, useParams } from 'react-router-dom';


const TutorialDetilsFormat = (props) => {
    const { name } = useParams();
    const { title, icon, links } = props;
    return (
        // <div>
        //     {name}
        // </div>
        <Accordion>
            <AccordionSummary
                style={{ backgroundColor: '#1E293B', color: '#fff' }}
                expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography className='flex items-center   justify-center'>
                    <img className='w-6 h-6   me-2' src={icon} alt="" />
                    {title}
                </Typography>
            </AccordionSummary>
            <AccordionDetails style={{ backgroundColor: '#1E293A', color: '#fff' }}>
                <Typography>
                    <div className='flex flex-col text-slate-200 bg-slate-800 w-full  '>
                        {links.map((link, index) => (
                            <Link to={link.to} key={index} className='border-b hover:text-green-500  font-nunito mb-3 border-dotted  py-1 hover:bg-slate-800 duration-300'>
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