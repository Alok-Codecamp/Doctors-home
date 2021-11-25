import React, { useEffect, useState } from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from '../Service/Service';
import Typography from '@mui/material/Typography';



const Services = () => {
    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch('./fakeData.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    console.log(services)
    return (
        <Box sx={{ flexGrow: 1 }}>
       <Container>
 
          <Typography sx={{fontWeight:500, color:'success.main'}}  variant="h6" component="div">
                Our services
          </Typography>
          <Typography variant="h4">
                services we provided          
          </Typography>
  
       <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs:4, sm: 8, md: 12 }}>
          {services.map((service, index) => (
            <Grid item xs={4} sm={4} md={4} key={index}>
              <Service
              service={service}
              ></Service>
            </Grid>
          ))}
        </Grid>
       </Container>
      </Box>
    );
};

export default Services;