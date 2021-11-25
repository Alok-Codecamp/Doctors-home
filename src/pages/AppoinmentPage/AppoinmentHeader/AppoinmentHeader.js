import { Container, Grid } from '@mui/material';
import React from 'react';
import Calender from '../../SharedPage/Calender/Calender';

const AppoinmentHeader = ({date,setDate}) => {
    return (
        <div>
           <Container>
               <Grid container spacing={2}>
                   <Grid item xs={12} md={6}>
                       <Calender date={date} setDate={setDate}></Calender>
                   </Grid>
                    <Grid item xs={12} md={6}>
                        <img style={{width:'100%'}} src="https://i.ibb.co/hXzxkWd/chair.png" alt="" />
                    </Grid>
               </Grid>
           </Container>
        </div>
    );
};

export default AppoinmentHeader;