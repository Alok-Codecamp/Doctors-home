import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { width } from '@mui/system';
import useAuth from '../../../hooks/useAuth';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const BookingModal = ({setBookingSuccess,date,openBooking,handleBookingClose,booking}) => {
    const {name,time,space,price}=booking;
    const {user}=useAuth();
    const initialInfo={patientName:user.displayName,email:user.email,phone:''}
    const[bookingInfo,setBookingInfo]=useState(initialInfo);
    const handleOnBlur=e=>{
        const field=e.target.name;
        const value=e.target.value;
        const newInfo={...bookingInfo};
        newInfo[field]=value;
        setBookingInfo(newInfo)
        console.log(bookingInfo);
    }
    const handleBookingSubmit=e=>{
        const appoinment={
          ...bookingInfo,
          time,
          date:date.toLocaleDateString(),
          serviceName:name,
          price,
        }
        console.log(appoinment)
        //post  data in database
        fetch('http://localhost:5000/appoinments',{
          method:"POST",
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(appoinment)
        })
        .then(res=>res.json())
        .then(data=>{
        if(data?.insertedId){
          setBookingSuccess(true);
          handleBookingClose();
        }
        })
        e.preventDefault();
    }
    return (
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openBooking}
        onClose={handleBookingClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openBooking}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {name}
            </Typography>
           <form onSubmit={handleBookingSubmit}>
           <TextField
           disabled
           sx={{width:'90%',margin:'2%'}}
          label="Time"
          id="outlined-size-small"
          defaultValue={time}
          size="small"
        />
           <TextField
           sx={{width:'90%',margin:'2%'}}
          label="Name"
          onBlur={handleOnBlur}
          name="patientName"
          id="outlined-size-small"
          defaultValue={user.displayName}
          size="small"
        />
           <TextField
           sx={{width:'90%',margin:'2%'}}
          label="Phone"
          onBlur={handleOnBlur}
          name="phone"
          id="outlined-size-small"
          defaultValue='Your your phone'
          size="small"
        />
           <TextField
           sx={{width:'90%',margin:'2%'}}
          label="Email"
          onBlur={handleOnBlur}
          id="outlined-size-small"
          name="email"
          defaultValue={user.email}
          size="small"
        />
            <TextField
           sx={{width:'90%',margin:'2%'}}
          label="Date"
          onBlur={handleOnBlur}
          id="outlined-size-small"
          name="date"
          defaultValue={date.toLocaleDateString()}
          size="small"
        />
        <Button type='submit' sx={{backgroundColor:'#1de9b6', color:'black'}} variant="contained">Save</Button>
           </form>
          </Box>
        </Fade>
      </Modal>
    );
};

export default BookingModal;