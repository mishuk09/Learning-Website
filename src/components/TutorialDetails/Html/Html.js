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
import TutorialDetilsFormat from '../TutorialsDetailsComponent/TutorialDetilsFormat/TutorialDetilsFormat';

const Html = () => {
    return (
        <div className='container flex mt-10 gap-3 rounded'>
            <div className='w-[20%] bg-slate-900 rounded h-full'>
               <TutorialHeadlineFormat logo={html} name='HTML' description='Programming Language'/>
                <div className='mt-2'>
                    {HtmlObject.map((data) => (
                        <TutorialDetilsFormat key={data.id} title={data.title} icon={data.icon} links={data.links} />
                    ))}
                </div>  
            </div>
            <DescriptionComponent />
            <ArticleComponent />
        </div>
    );
};

export default Html;