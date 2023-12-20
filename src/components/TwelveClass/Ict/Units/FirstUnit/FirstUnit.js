import React from 'react';
import first from './img/first.png';
import TutorialHeadlineFormat from '../../../../TutorialDetails/TutorialsDetailsComponent/TutorialHeadlineFormat/TutorialHeadlineFormat';
import TutorialDetilsFormat from '../../../../TutorialDetails/TutorialsDetailsComponent/TutorialDetilsFormat/TutorialDetilsFormat';
import FristUnitObject from './FristUnitObject';
import DescriptionComponent from '../../../../TutorialDetails/TutorialsDetailsComponent/DescriptionComponent/DescriptionComponent';
import ArticleComponent from '../../../../TutorialDetails/TutorialsDetailsComponent/ArticleComponent/ArticleComponent';

const FirstUnit = () => {
    return (
        <div className='container flex mt-10 gap-3 rounded font-noto-sans-bengali '>
            <div className='w-[20%] bg-slate-900 rounded h-full'>
                <TutorialHeadlineFormat logo={first} name='তথ্য ও যোগাযোগ প্রযুক্তি' description=' অনুশীলমূলক পাঠ্য বই ' />
                <div className='mt-2'>
                    {FristUnitObject.map((data) => (
                        <TutorialDetilsFormat key={data.id} title={data.title} icon={data.icon} links={data.links} />
                    ))}
                </div>
            </div>
            <DescriptionComponent />
            <ArticleComponent />
        </div>
    );
};

export default FirstUnit;       