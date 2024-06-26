import React from 'react';
// import './ShortDetils.css';
import a from './img/a.png';
import b from './img/b.png';
import c from './img/c.png';
import d from './img/d.png';
import { Link } from 'react-router-dom';

const ShortDetailsBlogs = () => {

    const shortData = [
        {
            id: 1,
            img: a,
            link: 'allcourse',
            name: "AI",
            detils: "ChatGPT, Robotics"
        },
        {
            id: 2,
            img: b,
            link: 'practice',
            name: "BUSINESS",
            detils: "Business,Idea,  Grow"
        },
        {
            id: 3,
            img: c,
            link: 'interview',
            name: "DATA SCIENCE",
            detils: "Py,Machine Learn"
        },
        {
            id: 4,
            img: d,
            link: 'jobs',
            name: "TECHNOLOGY",
            detils: "Update,Latest "
        }
    ];

    const bgColors = [
        {
            bgColor: '#FEF6E0',
        },

        {
            bgColor: '#E8EBED',
        },

        {
            bgColor: '#F0ECF9 ',
        },

        {
            bgColor: '#D5E8DA',
        },

    ];

    // const borderRadiusStyles = [
    //     { borderTopRightRadius: '20px', borderBottomLeftRadius: '20px' },
    //     { borderTopRightRadius: '20px', borderBottomLeftRadius: '20px' },
    //     { borderTopRightRadius: '20px', borderBottomLeftRadius: '20px' },
    //     { borderTopRightRadius: '20px', borderBottomLeftRadius: '20px' },
    // ];

    return (
        <div className='container flex  justify-center items-center '>
            <div style={{ backgroundColor: '#f2f0fe' }} className='absolute container   py-4  rounded-sm shadow mt-1'>
                <div className='flex container'>
                    {shortData.map((data, index) => (
                        // eslint-disable-next-line jsx-a11y/anchor-is-valid
                        <Link
                            key={data.id}
                            
                            className='flex relative shadow-md px-1 items-center rounded duration-200 mx-2 w-[100%]'
                            style={{ backgroundColor: '#ffffff' }}
                            // bgColors[index]?.bgColor
                            onMouseEnter={(e) => { e.currentTarget.style.top = '-10px'; }}
                            onMouseLeave={(e) => { e.currentTarget.style.top = '0'; }}


                        >
                            <div><img className='p-1 mx-0 left-0 w-[100px]' src={data.img} alt="" /></div>
                            <div className='ms-2 text-black pb-2'>
                                <p className='font-bold font-source-sans-2'>{data.name} </p>
                                <p className='text-sm font-nunito mt-1'> {data.detils}</p>
                            </div>

                        </Link>
                    ))}
                </div>

            </div >
        </div>
    );
};

export default ShortDetailsBlogs;
