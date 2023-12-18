import React from 'react';
import article from './img/article.svg';

const ArticleComponent = () => {
    return (
        <div className='w-[20%]  h-full    border-1 rounded'>
            <div className='py-6 w-full bg-slate-900 text-slate-200  h-full rounded-t  text-center flex flex-col justify-center items-center'>
                <img className='w-[100px]' src={article} alt="" />
                <p className=' font-nunito font-bold text-2xl'>Articles</p>
                <p className='text-slate-100  bg-slate-800 w-full h-10 mt-4 text-center items-center justify-center flex font-nunito'>Technology & Coding</p>
            </div>
            <div className='w-full border-b h-[100px]'> </div>
            <div className='w-full border-b h-[100px]'> </div>
            <div className='w-full border-b h-[100px]'> </div>
            <div className='w-full border-b h-[100px]'> </div>
        </div>

    );
};

export default ArticleComponent;