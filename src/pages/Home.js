import React, { useEffect } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getApiData, getAPiDelete } from '../action/action';


const Home = () => {
    const navigate=useNavigate();
    const dispatch=useDispatch();


    useEffect(()=>{
        dispatch(getApiData());
    },[]);
    const values=useSelector((state)=>state.candidateRed.candidateValue);
    console.log('VALUES',values);
    const handleEdit=(id)=>{
      navigate(`/candidate/${id}`);
      // setActive
    }

  return (
    <div>
    <div style={{margin:'20px 0',display:'flex',justifyContent:'center',alignItems:'center'}}>
        <Button onClick={()=>navigate('/candidate')} variant="contained">Add Candidate</Button>
    </div>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="center">NAME</TableCell>
            <TableCell align="center">EMAIL</TableCell>
            <TableCell align="center">PHONE</TableCell>
            <TableCell align="center">DELETE</TableCell>
            <TableCell align="center">UPDATE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {values.map((items) => (
            <TableRow
              key={items.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center" component="th" scope="row">
                {items.name}
              </TableCell>
              <TableCell align="center">{items.email}</TableCell>
              <TableCell align="center">{items.phone}</TableCell>
              <TableCell align="center"><Button onClick={(()=>dispatch(getAPiDelete(items.id)))} style={{backgroundColor:'red'}} variant="contained">Delete</Button></TableCell>
              <TableCell align="center"><Button onClick={()=>handleEdit(items.id)} style={{backgroundColor:'green'}} variant="contained">Edit</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default Home