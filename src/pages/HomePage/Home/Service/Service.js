import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

const Service = ({service}) => {
    const {name,img,desc}=service;
    console.log(name)
    return (
        <Card sx={{ minWidth: 275,border:0,boxShadow:0 }}>
            <CardMedia
        component="img"
        style={{width:'auto',height:"65px",margin:"auto"}}
        height="140"
        image={img}
        alt="green iguana"
      />
        <CardContent>
          <Typography variant="h5" component="div">
           {name}
          </Typography>
          <Typography variant="body2">
          {desc}
          </Typography>
        </CardContent>
      </Card>
  
    );
};

export default Service;