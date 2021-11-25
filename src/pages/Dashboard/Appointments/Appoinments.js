import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAuth from '../../../hooks/useAuth';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';


const Appoinments = ({date}) => {
    const {user}=useAuth();
    const[appoinments,setAppoinments]=useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/appoinments?email=${user.email}&date=${date.toLocaleDateString()}`)
        .then(res=>res.json())
        .then(data=>setAppoinments(data))
    },[date])
    return (
        <div>
            <h2>Appoinments {appoinments.length}</h2>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="Appoinment table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Time</TableCell>
            <TableCell align="right">Service</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {appoinments.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row?.patientName}
              </TableCell>
              <TableCell align="right">{row?.time}</TableCell>
              <TableCell align="right">{row?.serviceName}</TableCell>
              <TableCell align="right">{row.payment?"paid":<Link to={`/dashboard/payment/${row?._id}`}><button>Pay</button></Link>
              }</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

        </div>
    );
};

export default Appoinments;