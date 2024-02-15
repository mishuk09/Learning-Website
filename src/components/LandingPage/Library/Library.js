import React from 'react';
import Headline from '../../Otherscomponent/Headline';
import ChildHeadline from '../../Otherscomponent/ChildHeadline';
import Tutorials from '../../Otherscomponent/Tutorials/Tutorials';
import Webdevelopment from '../../Otherscomponent/Tutorials/Webdevelopment';
import BasicComputer from '../../Otherscomponent/Tutorials/BasicComputer';

const Library = () => {
    return (
        <div id='library' className='container mt-20 bg-white rounded-sm py-6'>
            <Headline parent="Choose" child='Library' short="Tutorial"></Headline>
            <div className='grid grid-cols-2 gap-2 mt-4'>
                <div className='w-[100%] shadow h-[200px] px-2 py-3 rounded  '>
                    <ChildHeadline parent='Programming Language'></ChildHeadline>
                    <div className='flex flex-nowrap gap-2 justify-start items-center overflow-x-hidden mt-3'>
                        {Tutorials.slice(0, 7).map((tutorial) => (
                            // eslint-disable-next-line jsx-a11y/anchor-is-valid
                            <a
                                key={tutorial.id}
                                href="#"
                                className='whitespace-nowrap  delay-50'
                            >
                                <div className='  w-[80px]   delay-50  bg-slate-900 hover:bg-slate-800 rounded py-2  text-white  flex flex-col items-center  '>
                                    <div>
                                        <img className='w-[50px] h-[50px]' src={tutorial.img} alt="" />
                                    </div>
                                    <div className='  mt-1 font-verdina text-sm'>
                                        {tutorial.title}
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
                <div className='w-[100%] shadow h-[200px] px-2 py-3 rounded   border-slate-400'>
                    <ChildHeadline parent='Web Development'></ChildHeadline>
                    <div className='flex gap-2 flex-nowrap justify-start items-center overflow-x-hidden mt-3'>
                        {Webdevelopment.slice(0, 7).map((tutorial) => (
                            // eslint-disable-next-line jsx-a11y/anchor-is-valid
                            <a
                                key={tutorial.id}
                                href="#"
                                className='whitespace-nowrap '
                            >
                                <div className='  w-[80px]   delay-50  bg-slate-900 hover:bg-slate-800 rounded py-2  text-white  flex flex-col items-center  '>

                                    <div>
                                        <img className='w-[50px] h-[50px]' src={tutorial.img} alt="" />
                                    </div>
                                    <div className=' mt-1 font-verdina text-sm'>
                                        {tutorial.title}
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
                <div className='w-[100%] shadow h-[200px] px-2 py-3 rounded   border-slate-400'>
                    <ChildHeadline parent=' Computer Fundamental'></ChildHeadline>
                    <div className='flex gap-2 flex-nowrap justify-start items-center overflow-x-hidden mt-3'>
                        {BasicComputer.slice(0, 7).map((tutorial) => (
                            // eslint-disable-next-line jsx-a11y/anchor-is-valid
                            <a
                                key={tutorial.id}
                                href="#"
                                className='whitespace-nowrap '
                            >
                                <div className='  w-[80px]   delay-50  bg-slate-900 hover:bg-slate-800 rounded py-2  text-white  flex flex-col items-center  '>

                                    <div>
                                        <img className='w-[50px] h-[50px]' src={tutorial.img} alt="" />
                                    </div>
                                    <div className=' mt-1 font-verdina text-sm'>
                                        {tutorial.title}
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
                <div className='w-[100%] shadow h-[200px] px-2 py-3 rounded   border-slate-400'>
                    <ChildHeadline parent=' Computer Fundamental'></ChildHeadline>
                    <div className='flex gap-2 flex-nowrap justify-start items-center overflow-x-hidden mt-3'>
                        {BasicComputer.slice(0, 7).map((tutorial) => (
                            // eslint-disable-next-line jsx-a11y/anchor-is-valid
                            <a
                                key={tutorial.id}
                                href="#"
                                className='whitespace-nowrap  '
                            >
                                <div className='  w-[80px]   delay-50  bg-slate-900 hover:bg-slate-800 rounded py-2  text-white  flex flex-col items-center  '>

                                    <div>
                                        <img className='w-[50px] h-[50px]' src={tutorial.img} alt="" />
                                    </div>
                                    <div className=' mt-1 font-verdina  text-sm'>
                                        {tutorial.title}
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Library;
