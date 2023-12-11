import React from 'react';
import './ShortDetils.css';
import a from './img/a.png';
import b from './img/b.png';
import c from './img/c.png';
import d from './img/d.png';

const ShortDetils = () => {

    const shortData = [
        {
            id: 1,
            img: a,
            name: "LEARNING",
            detils: "DSA, Development"
        },
        {
            id: 2,
            img: b,
            name: "PRACTICE",
            detils: "Online IDE,DSA,  Mock"
        },
        {
            id: 3,
            img: c,
            name: "INTERVIEW",
            detils: "DSA,Development"
        },
        {
            id: 4,
            img: d,
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
        <div>
            <div className='flex container'>
                {shortData.map((data, index) => (
                    // eslint-disable-next-line jsx-a11y/anchor-is-valid
                    <a
                        key={data.id}
                        href="#"
                        className='flex relative shadow-md  px-1   items-center duration-200    m-2 w-[100%] '
                        style={{ ...borderRadiusStyles[index], backgroundColor: bgColors[index]?.bgColor }}

                        onMouseEnter={(e) => { e.currentTarget.style.top = '-10px'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.top = '0'; }}


                    >
                        <div><img className='p-1 mx-0 left-0 w-[100px] ' src={data.img} alt="" /></div>
                        <div className='ms-2   '>
                            <p className='font-bold font-serif'>{data.name} </p>
                            <p className='text-sm mt-1'> {data.detils}</p>
                        </div>

                    </a>
                ))}
            </div>

        </div >
    );
};

export default ShortDetils;