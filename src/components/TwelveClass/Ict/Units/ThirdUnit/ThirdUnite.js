import React from 'react';
import TutorialHeadlineFormat from '../../../../TutorialDetails/TutorialsDetailsComponent/TutorialHeadlineFormat/TutorialHeadlineFormat';
import ThirdUniteObject from './ThirdUniteObject';
import TutorialDetilsFormat from '../../../../TutorialDetails/TutorialsDetailsComponent/TutorialDetilsFormat/TutorialDetilsFormat';
import DescriptionComponent from '../../../../TutorialDetails/TutorialsDetailsComponent/DescriptionComponent/DescriptionComponent';
import ArticleComponent from '../../../../TutorialDetails/TutorialsDetailsComponent/ArticleComponent/ArticleComponent';
import third from '../../img/third.png';
const ThirdUnite = () => {
    return (
        <div className='container flex mt-10 gap-3 rounded font-noto-sans-bengali '>
            <div className='w-[20%] bg-slate-900 rounded h-full'>
                <TutorialHeadlineFormat logo={third} name='সংখ্যা পদ্ধতি ও ডিজিটাল ডিভাইস' description=' অনুশীলমূলক পাঠ্য বই ' />
                <div className='mt-2'>
                    {ThirdUniteObject.map((data) => (
                        <TutorialDetilsFormat key={data.id} title={data.title} icon={data.icon} links={data.links} />
                    ))}
                </div>
            </div>
            <DescriptionComponent />
            <ArticleComponent />
        </div>
    );
};

export default ThirdUnite;