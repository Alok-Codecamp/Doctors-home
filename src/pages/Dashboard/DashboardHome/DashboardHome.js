import React from 'react';
import { Grid, Typography } from '@mui/material';
import Calender from '../../SharedPage/Calender/Calender'
import Appoinments from '../Appointments/Appoinments'
const DashboardHome = ({date,setDate}) => {
    return (
        <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={5}>
          <Typography variant="h5" style={{fontWeight:'600'}}>Today </Typography>
         <Calender
         date={date}
         setDate={setDate}
         ></Calender>
        </Grid>
        <Grid item xs={12} sm={12} md={7}>
        <Appoinments date={date}></Appoinments>
        </Grid>
      </Grid>
    );
};

export default DashboardHome;