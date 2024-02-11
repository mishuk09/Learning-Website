// Dsaproblems.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableVirtuoso } from 'react-virtuoso';
import { TablePagination } from '@mui/material';
import Headline from '../../Otherscomponent/Headline';
import { Link } from 'react-router-dom';


const columns = [
    { id: 'name', label: 'ID', minWidth: 100 },
    { id: 'code', label: 'INDEX', minWidth: 100 },
    {
        id: 'population',
        label: 'NAME',
        minWidth: 300,
        align: 'center',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'size',
        label: 'TYPE',
        minWidth: 170,
        align: 'center',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'density',
        label: 'POINT',
        minWidth: 170,
        align: 'center',
        format: (value) => value.toFixed(2),
    },
    {
        id: 'density',
        label: 'RATING',
        minWidth: 170,
        align: 'center',
        format: (value) => value.toFixed(2),
    },
    {
        id: 'density',
        label: 'TYPE',
        minWidth: 170,
        align: 'center',
        format: (value) => value.toFixed(2),
    },
];

function createData(name, code, population, size) {
    const density = population / size;
    return { name, code, population, size, density };
}


const Dsaproblems = () => {
    const [problems, setProblems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    useEffect(() => {
        const fetchProblems = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/problems');
                setProblems(response.data.result.problems);
            } catch (error) {
                console.error('Error:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProblems();
    }, []);

    if (loading) {
        return <p>Loading problems...</p>;
    }


    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <div className='container mt-14 bg-white rounded-sm py-6'>
            <Headline parent='DSA' child='Problemset' short='Data Structure' showSeemore={false}></Headline>

            <Paper className='mt-4' sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead className="cursor-pointer ">
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>

                        <TableBody className='font-nunito'>
                            {problems
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                    return (

                                        <TableRow
                                            component="a"
                                            href="https://codeforces.com/problemset"
                                            target="_blank"
                                            className="cursor-pointer "
                                            hover
                                            role="checkbox"
                                            tabIndex={-1}
                                            key={row.index}
                                        >
                                            <TableCell>{row.contestId}</TableCell>
                                            <TableCell>{row.index}</TableCell>
                                            <TableCell className="text-green-500 font-bold">{row.name}</TableCell>
                                            <TableCell>{row.type}</TableCell>
                                            <TableCell>{row.points}</TableCell>
                                            <TableCell>{row.rating}</TableCell>
                                            <TableCell>{row.tags.join(', ')}</TableCell>
                                        </TableRow>


                                    );
                                })}
                        </TableBody>

                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={problems.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>

        </div>
    );
};

export default Dsaproblems;
