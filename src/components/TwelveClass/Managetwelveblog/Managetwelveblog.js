import { faFilePen, faLayerGroup, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Abouttwelvedata from './Abouttwelvedata';
import Adddata from './Adddata';
import Editdata from './Editdata';
import Deletedata from './Deletedata';

const Managetwelveblog = () => {
    const [show, setShow] = useState(1);
    const blogitems = [
        {
            id: 1,
            icon: <FontAwesomeIcon icon={faLayerGroup} />,
            title: 'All About'
        },
        {
            id: 2,
            icon: <FontAwesomeIcon icon={faPlus} />,
            title: 'Add Data'
        },
        {
            id: 3,
            icon: <FontAwesomeIcon icon={faFilePen} />,
            title: 'Edit Data'
        },
        {
            id: 4,
            icon: <FontAwesomeIcon icon={faTrash} />,
            title: 'Delete Data'
        }

    ]

    const handleClick = (id) => {
        setShow(id);

    }
    return (
        <div className='bg-slate-50 flex'>

            <div
                className="sidebar  mt-1 bottom-0 lg:left-0 p-2 w-[20%] h-[500px] overflow-y-auto text-center bg-gray-900"
            >
                <div className="text-gray-100 text-xl">
                    <div className="p-2.5 mt-1 flex items-center">

                        <h1 className="font-bold text-gray-200 text-3xl ml-3">12 Class Dashbord</h1>
                        <i
                            className="bi bi-x cursor-pointer ml-28 lg:hidden"
                            onclick="openSidebar()"
                        ></i>
                    </div>
                    <div className="my-2 bg-gray-600 h-[1px]"></div>
                </div>

                {
                    blogitems.map((item) => (
                        <Link
                            key={item.id}
                            onClick={() => handleClick(item.id)}
                            className={`p-2.5 mt-1 flex items-center rounded-md px-4 duration-300 bg-gray-700 cursor-pointer hover:bg-blue-600 text-white ${show === item.id ? 'active-tab' : ''}`}
                        >
                            {item.icon}
                            <span className="text-[15px] ml-4 text-gray-200 font-bold">{item.title}</span>
                        </Link>
                    ))
                }


            </div>
            <div className='w-[80%] '>
                {
                    show === 1 ? <Abouttwelvedata/> : show === 2 ? <Adddata /> : show === 3 ? <Editdata /> : <Deletedata />
                }

            </div>

        </div>
    );
};

export default Managetwelveblog;