import React from 'react';
import TutorialHeadlineFormat from '../../../TutorialDetails/TutorialsDetailsComponent/TutorialHeadlineFormat/TutorialHeadlineFormat';
import c from '../../img/c.svg';
import DescriptionComponent from '../../../TutorialDetails/TutorialsDetailsComponent/DescriptionComponent/DescriptionComponent';
import ArticleComponent from '../../../TutorialDetails/TutorialsDetailsComponent/ArticleComponent/ArticleComponent';
import CObject from './CObject';
import TutorialDetilsFormat from '../../../TutorialDetails/TutorialsDetailsComponent/TutorialDetilsFormat/TutorialDetilsFormat';
const C = () => {
    return (
        <div className='container flex mt-10 gap-3 rounded'>
            <div className='w-[20%] bg-slate-900 rounded h-full'>
                <TutorialHeadlineFormat logo={c} name='C' description='Interview Question' />
                <div className='mt-2'>
                    {CObject.map((data) => (
                        <TutorialDetilsFormat key={data.id} title={data.title} icon={data.icon} links={data.links} />
                    ))} 
                </div>
            </div>
            <DescriptionComponent />
            <ArticleComponent />
        </div>
    );
};

export default C;