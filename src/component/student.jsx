import React, { useContext, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow, { tableRowClasses } from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import {StudArr} from "./context"

function Student() {
    
    const [student] = useContext(StudArr);
    return (
        <div>
            <div className="heading">
                <h1>Student Details</h1>
                <Link to="/student-Form" ><button id='student-btn'>Add new student</button></Link>
            </div>
            <div className='table'>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Age</TableCell>
                        <TableCell align="right">Course</TableCell>
                        <TableCell align="right">Batch</TableCell>
                        <TableCell align="right">Change</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {student.map((row) => (
                    <TableRow
                        key={row.id}
                        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                        <TableCell component="th" scope="student">
                        {row.name}
                        </TableCell>
                        <TableCell align="right">{row.age}</TableCell>
                        <TableCell align="right">{row.course}</TableCell>
                        <TableCell align="right">{row.batch}</TableCell>
                        <TableCell align="right">
                        {
                            <Link to={`/student/${row.id}`} >Edit</Link>
                        }
                        </TableCell>
                    </TableRow>
                    ))}
                </TableBody>
                </Table>
            </TableContainer>
            </div>
        </div>
    )
}

export default Student;