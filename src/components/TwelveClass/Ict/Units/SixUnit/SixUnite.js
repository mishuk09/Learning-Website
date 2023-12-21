import React from 'react';
import TutorialHeadlineFormat from '../../../../TutorialDetails/TutorialsDetailsComponent/TutorialHeadlineFormat/TutorialHeadlineFormat';
import six from '../../img/six.png';
import SixUniteObject from './SixUniteObject';
import TutorialDetilsFormat from '../../../../TutorialDetails/TutorialsDetailsComponent/TutorialDetilsFormat/TutorialDetilsFormat';
import DescriptionComponent from '../../../../TutorialDetails/TutorialsDetailsComponent/DescriptionComponent/DescriptionComponent';
import ArticleComponent from '../../../../TutorialDetails/TutorialsDetailsComponent/ArticleComponent/ArticleComponent';
const SixUnite = () => {
    return (
        <div className='container flex mt-10 gap-3 rounded font-noto-sans-bengali '>
            <div className='w-[20%] bg-slate-900 rounded h-full'>
                <TutorialHeadlineFormat logo={six} name=' ডেটাবেজ  ম্যানেজমেন্ট সিস্টেম' description=' অনুশীলমূলক পাঠ্য বই ' />
                <div className='mt-2'>
                    {SixUniteObject.map((data) => (
                        <TutorialDetilsFormat key={data.id} title={data.title} icon={data.icon} links={data.links} />
                    ))}
                </div>
            </div>
            <DescriptionComponent />
            <ArticleComponent />
        </div>
    );
};

export default SixUnite;