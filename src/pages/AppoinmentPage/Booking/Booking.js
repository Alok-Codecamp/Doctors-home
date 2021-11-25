import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({booking,date,setBookingSuccess}) => {
    const {name,time,space,price}=booking;
    const [openBooking, setBookingOpen] = React.useState(false);
    const handleBookingOpen = () => setBookingOpen(true);
    const handleBookingClose = () => setBookingOpen(false);
    return (
       <>
            <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={3} sx={{py:5}}>
                    <Typography sx={{color:'#1de9b6'}} variant="h4" gutterBottom component="div">
                        {name}
                    </Typography>
                    <Typography variant="h6" gutterBottom component="div">
                        {time}
                    </Typography>
                    <Typography variant="h6" gutterBottom component="div">
                        ${price}
                    </Typography>
                    <Typography variant="caption" gutterBottom display="block">
                        {space} spaces avilable
                    </Typography>
                    <Button onClick={handleBookingOpen} variant="contained">Book Appoinment</Button>
                </Paper>
            </Grid>
            <BookingModal
            setBookingSuccess={setBookingSuccess}
            date={date}
            booking={booking}
            handleBookingClose={handleBookingClose}
            openBooking={openBooking}
            ></BookingModal>
       </>
    );
};

export default Booking;