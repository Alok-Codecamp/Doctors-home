import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid'; 
import { Button, Typography } from '@mui/material';


const appoinmentBg={
    background:'url(https://i.ibb.co/LZCy4sC/bg.png)',
    backgroundSize:'cover',
    backgroundColor:'black',
    marginTop:'200px'
}
const AppoinmentBanner = () => {
    return (
        <Box style={appoinmentBg} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <img
            style={{width:'60%',marginTop:'-120px'}}
            src="https://i.ibb.co/vj89VQn/doctor.png" alt="" />
          </Grid>
          <Grid item xs={12} md={6}>
           <Typography sx={{color:'antiquewhite'}} variant="h6">
            Appoinment
           </Typography>
           <Button variant="contained">Learn more</Button>
          </Grid>
        </Grid>
      </Box>
    );
};

export default AppoinmentBanner;