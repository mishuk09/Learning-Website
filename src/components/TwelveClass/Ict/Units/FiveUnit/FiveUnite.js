import React from 'react';
import fifth from '../../img/fifth.svg';
import TutorialHeadlineFormat from '../../../../TutorialDetails/TutorialsDetailsComponent/TutorialHeadlineFormat/TutorialHeadlineFormat';
import FiveUniteObject from './FiveUniteObject';
import TutorialDetilsFormat from '../../../../TutorialDetails/TutorialsDetailsComponent/TutorialDetilsFormat/TutorialDetilsFormat';
import DescriptionComponent from '../../../../TutorialDetails/TutorialsDetailsComponent/DescriptionComponent/DescriptionComponent';
import ArticleComponent from '../../../../TutorialDetails/TutorialsDetailsComponent/ArticleComponent/ArticleComponent';

const FiveUnite = () => {
    return (
        <div className='container flex mt-10 gap-3 rounded font-noto-sans-bengali '>
            <div className='w-[20%] bg-slate-900 rounded h-full'>
                <TutorialHeadlineFormat logo={fifth} name='প্রোগ্রামিং ভাষা ও C Programming' description=' অনুশীলমূলক পাঠ্য বই ' />
                <div className='mt-2'>
                    {FiveUniteObject.map((data) => (
                        <TutorialDetilsFormat key={data.id} title={data.title} icon={data.icon} links={data.links} />
                    ))}
                </div>
            </div>
            <DescriptionComponent />
            <ArticleComponent />
        </div>
    );
};

export default FiveUnite;