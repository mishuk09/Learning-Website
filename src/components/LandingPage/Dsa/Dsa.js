import React from 'react';
import Headline from '../../Otherscomponent/Headline';
import array from './img/array.png';
import stack from './img/stack.png';
import queue from './img/queue.png';
import linkedlist from './img/linkedlist.png';
import graph from './img/graph.png';
import tree from './img/tree.png';
import { Link } from 'react-router-dom';

const Dsa = () => {
    const dsaData = [
        { id: 1, img: array },
        { id: 2, img: linkedlist },
        { id: 3, img: stack },
        { id: 4, img: queue },
        { id: 5, img: graph },
        { id: 6, img: tree },
    ];

    return (
        <div className='container mt-14' style={{ width: '100%', overflowX: 'auto' }}>
            <Headline parent='DSA' child='Tutorial' short='Data Structure' showSeemore={true}></Headline>
            <div className='   ' >
                {dsaData.map((data) => (
                    <a href=""
                        className='flex'
                    >
                        <img src={data.img} alt="" />
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Dsa;
