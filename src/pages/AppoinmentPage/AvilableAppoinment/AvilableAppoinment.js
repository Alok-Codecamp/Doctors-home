import React,{useState} from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Booking from '../Booking/Booking';
import { Alert, Button, IconButton, Snackbar, Typography } from '@mui/material';

const bookings = [
    {
        id: 1,
        name: 'Cavity protection',
        time: '11.00 am - 12.00 pm',
        price:10,
        space: 5
    },
    {
        id: 2,
        name: 'Padiatric Dental',
        time: '6.00 pm - 7.00 pm',
        price:15,
        space: 6
    },
    {
        id: 3,
        name: 'Oral Surgery',
        time: '7.00 pm - 8.00 pm',
        price:18,
        space: 11
    },
    {
        id: 4,
        name: 'Teeth Orthodonics',
        time: '8.00 am - 19.00 am',
        price:30,
        space: 16
    },
    {
        id: 5,
        name: 'Cosmetic Dentistry',
        time: '9.00 am - 10.00 pm',
        price:8,
        space: 3
    },
    {
        id: 5,
        name: 'Teeth cleaning',
        time: '10.00 am - 111.00 pm',
        price:24,
        space: 8
    },
]

const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
}


const AvilableAppoinment = ({ date }) => {
    const [bookingSuccess,setBookingSuccess]=useState(false);
      const { vertical, horizontal, open } = bookingSuccess;
    return (
        <div>
            {
                bookingSuccess&&   <Alert onClose={() =>setBookingSuccess(false)}>This is a success alert — check it out!</Alert>
            }
            <Typography variant="h4" mb={4} mt={4} sx={{color:'#1de9b6'}}>Avilable appoinment on {date.toDateString()}</Typography>
            
            <Container>
                <Grid container spacing={2}>
                   {
                       bookings.map(booking=><Booking
                       key={booking.id}
                       booking={booking}
                       date={date}
                       setBookingSuccess={setBookingSuccess}
                       >

                       </Booking>)
                   }
                </Grid>
              
            </Container>
        </div>
    );
};

export default AvilableAppoinment;