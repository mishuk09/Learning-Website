import React from 'react';
import Headline from '../Otherscomponent/Headline';
import Allcourses from '../Otherscomponent/Allcourses';

const Courses = () => {
    return (
        <div className='container mt-28'>
            <Headline className='w-[100%]' parent="Start" child="Learning" short="Course" showSeemore={false}></Headline>
            <div className=" flex flex-wrap gap-3 mt-4">
                {
                    Allcourses.map((tutorial) => (
                        // eslint-disable-next-line jsx-a11y/anchor-is-valid
                        <a key={tutorial.id}
                            href="#"
                            className='shadow-sm rounded  transition ease-in-out delay-50  hover:-translate-y-2 hover:scale-40  duration-400 '
                        >
                            <div className='w-[130px] h-36 rounded bg-slate-100 hover:bg-slate-200 flex flex-col items-center justify-center'>
                                <div>
                                    <img className='w-[70px] h-[70px]' src={tutorial.img} alt="" />
                                </div>
                                <div className='text-black mt-1 font-verdina text-sm'>
                                    {tutorial.title}
                                </div>
                            </div>
                        </a>
                    ))}
            </div>
        </div>
    );
};

export default Courses;