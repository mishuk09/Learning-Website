import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Allblogs from './ManageBlog/Allblogs';

import Editblog from './ManageBlog/Editblog';
import Deleteblog from './ManageBlog/Deleteblog';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePen, faLayerGroup, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import AddBlog from './ManageBlog/Addblog';

const ManageBlog = () => {
   
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
            title: 'Add Blog'
        },
        {
            id: 3,
            icon: <FontAwesomeIcon icon={faFilePen} />,
            title: 'Edit Blog'
        },
        {
            id: 4,
            icon: <FontAwesomeIcon icon={faTrash} />,
            title: 'Delete Blog'
        }

    ]

    const handleClick = (id) => {
        setShow(id);

    }
    return (
        <div className='bg-slate-50 flex min-h-screen'>

            <div
                className="sidebar  mt-1 bottom-0 lg:left-0 p-2 w-[20%] h-auto overflow-y-auto text-center bg-gray-950"
            >
                <div className="text-gray-100 text-xl">
                    <div className="p-2.5 mt-1 flex items-center">

                        <h1 className="font-bold text-gray-200 text-3xl ml-3">Blogs Dashbord</h1>
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
                    show === 1 ? <Allblogs /> : show === 2 ? <AddBlog /> : show === 3 ? <Editblog /> : <Deleteblog />
                }

            </div>

        </div>
    );
};

export default ManageBlog;