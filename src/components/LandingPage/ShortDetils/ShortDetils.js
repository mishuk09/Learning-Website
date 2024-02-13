import React from 'react';
import './ShortDetils.css';
import a from './img/a.png';
import b from './img/b.png';
import c from './img/c.png';
import d from './img/d.png';
import { Link } from 'react-router-dom';

const ShortDetils = () => {

    const shortData = [
        {
            id: 1,
            img: a,
            link: 'allcourse',
            name: "LEARNING",
            detils: "DSA, Development"
        },
        {
            id: 2,
            img: b,
            link: 'practice',
            name: "PRACTICE",
            detils: "Online IDE,DSA,  Mock"
        },
        {
            id: 3,
            img: c,
            link: 'interview',
            name: "INTERVIEW",
            detils: "DSA,Development"
        },
        {
            id: 4,
            img: d,
            link: 'jobs',
            name: "JOBS",
            detils: "SDE,Developer "
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

    const borderRadiusStyles = [
        { borderTopRightRadius: '20px', borderBottomLeftRadius: '20px' },
        { borderTopRightRadius: '20px', borderBottomLeftRadius: '20px' },
        { borderTopRightRadius: '20px', borderBottomLeftRadius: '20px' },
        { borderTopRightRadius: '20px', borderBottomLeftRadius: '20px' },
    ];

    return (
        <div className='  mt-[-50px] mx-auto'>
            <div className='flex container'>
                {shortData.map((data, index) => (
                    // eslint-disable-next-line jsx-a11y/anchor-is-valid
                    <Link
                        key={data.id}
                        to={data.link}
                        className='flex relative shadow-md  px-1   items-center duration-200    mx-3 w-[100%] '
                        style={{ ...borderRadiusStyles[index], backgroundColor: bgColors[index]?.bgColor }}

                        onMouseEnter={(e) => { e.currentTarget.style.top = '-10px'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.top = '0'; }}


                    >
                        <div><img className='p-1 mx-0 left-0 w-[100px] ' src={data.img} alt="" /></div>
                        <div className='ms-2 text-black pb-2  '>
                            <p className='font-bold font-source-sans-2'>{data.name} </p>
                            <p className='text-sm font-nunito mt-1'> {data.detils}</p>
                        </div>

                    </Link>
                ))}
            </div>

        </div >
    );
};

export default ShortDetils;