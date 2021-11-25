import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'; 
import { Button, Typography } from '@mui/material';

const bannerBg={
    background:'url(https://i.ibb.co/LZCy4sC/bg.png)',
    backgroundSize:'cover',
}
const verticalCenter={
    // marginLeft:'100px',
    display:'flex',
    alignItems:'center',

}
const Banner = () => {
    return (
        <Box style={bannerBg} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item style={{...verticalCenter,textAlign:'left'}} xs={12} md={7}>
            <Box style={{marginLeft:"80px"}}>
            <Typography variant="h3">
                Your new smile <br />
                starts here
            </Typography>
            <Typography variant="h6" sx={{color:"gray", fontSize:"14px", fontWeight:"300"}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam eius voluptatem, vero, commodi alias reiciendis eveniet assumenda quo itaque accusantium ex, culpa officia eum modi? Omnis dolor sit nam neque ab doloribus. Dolorem molestias placeat
            </Typography>
            <Button variant="contained">
                Get Appoinment
            </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={5}  style={{...verticalCenter, textAlign:'center'}}>
          <img style={{height:"300px"}} src="https://i.ibb.co/hXzxkWd/chair.png" alt="" />
          </Grid>
         
        </Grid>
      </Box>
    );
};

export default Banner;