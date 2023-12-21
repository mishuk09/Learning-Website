import React from 'react';
import four from '../../img/four.png';
import TutorialHeadlineFormat from '../../../../TutorialDetails/TutorialsDetailsComponent/TutorialHeadlineFormat/TutorialHeadlineFormat';
import FourUniteObject from './FourUniteObject';
import TutorialDetilsFormat from '../../../../TutorialDetails/TutorialsDetailsComponent/TutorialDetilsFormat/TutorialDetilsFormat';
import DescriptionComponent from '../../../../TutorialDetails/TutorialsDetailsComponent/DescriptionComponent/DescriptionComponent';
import ArticleComponent from '../../../../TutorialDetails/TutorialsDetailsComponent/ArticleComponent/ArticleComponent';

const FourUnite = () => {
    return (
        <div className='container flex mt-10 gap-3 rounded font-noto-sans-bengali '>
            <div className='w-[20%] bg-slate-900 rounded h-full'>
                <TutorialHeadlineFormat logo={four} name='ওয়েব ডিজাইন পরিচিতি ও HTML' description=' অনুশীলমূলক পাঠ্য বই ' />
                <div className='mt-2'>
                    {FourUniteObject.map((data) => (
                        <TutorialDetilsFormat key={data.id} title={data.title} icon={data.icon} links={data.links} />
                    ))}
                </div>
            </div>
            <DescriptionComponent />
            <ArticleComponent />
        </div>
    );
};

export default FourUnite;