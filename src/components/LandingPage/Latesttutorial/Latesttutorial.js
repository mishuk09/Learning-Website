/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Seemore from '../../Otherscomponent/Seemore';
import Headline from '../../Otherscomponent/Headline';
import Tutorials from '../../Otherscomponent/Tutorials/Tutorials';
import { Link, useNavigate } from 'react-router-dom';

const Latesttutorial = () => {
    const navigate = useNavigate();

    const handleChange = (name, img) => {
        navigate(`/language/${name}`, { state: { img } })
    }

    return (
        <div className=' mt-14 bg-white py-6 px-2 rounded'>
            <Headline className='w-[100%]' parent="Latest" child="Tutorial" short="Code" to="/allcourse" showSeemore={true}></Headline>
            <div className="inline-grid grid-cols-6 gap-3 mt-4">
                {
                    Tutorials.slice(0, 12).map((tutorial) => (

                        // eslint-disable-next-line jsx-a11y/anchor-has-content

                        <div
                            key={tutorial.id}
                            // to={tutorial.link}
                            onClick={() => handleChange(tutorial.title, tutorial.img)}
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

                        </div>


                    ))
                }
            </div>
        </div>
    );
};

export default Latesttutorial;



