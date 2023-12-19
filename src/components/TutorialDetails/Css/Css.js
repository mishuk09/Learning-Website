import React from 'react';
import css from './img/css.png';
import TutorialHeadlineFormat from '../TutorialsDetailsComponent/TutorialHeadlineFormat/TutorialHeadlineFormat';
import TutorialDetilsFormat from '../TutorialsDetailsComponent/TutorialDetilsFormat/TutorialDetilsFormat';
import HtmlObject from '../Html/HtmlObject';
import DescriptionComponent from '../TutorialsDetailsComponent/DescriptionComponent/DescriptionComponent';
import ArticleComponent from '../TutorialsDetailsComponent/ArticleComponent/ArticleComponent';

const Css = () => {
    return (

        <div className='container flex mt-10 gap-3 rounded'>
            <div className='w-[20%] bg-slate-900 rounded h-full'>
                <TutorialHeadlineFormat logo={css} name='CSS' description='Programming Language' />
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

export default Css;