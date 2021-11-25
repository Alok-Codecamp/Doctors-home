import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MakeAddmin = () => {
  const [email,setEmail]=useState('');
  const [success,setSuccess]=useState(false)
  const {token}=useAuth();
  const handleOnBlur=e=>{
    setEmail(e.target.value)
  }

  const handleAdminSubmit=(e)=>{
    const user={email}
      fetch('http://localhost:5000/users/admin',{
        method:'PUT',
        headers:{
          'authorization': `bearer ${token}`,
          'content-type':'application/json'
        },
        body:JSON.stringify(user)
      })
      .then(res=>res.json())
      .then(data=>{
        if(data.modifiedCount){
          setEmail('')
          setSuccess(true)
        }
      })
    e.preventDefault();
  }
    return (
        <div>
          <p>trhhias make admin</p>
          <form onSubmit={handleAdminSubmit}>
          <TextField id="standard-basic" label="email"
           variant="standard" 
          type="email"
          onBlur={handleOnBlur} />

          <Button type="submit" variant="contained">Make admin</Button>
          </form>
          {success&&<Alert severity="success">Made admin successfully</Alert>}
        </div>
    );
};

export default MakeAddmin;