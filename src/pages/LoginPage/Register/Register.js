import { Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink,useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [registerData, setRegisterData]=useState({});
    const {registerUser,user,signInWithGoogle}=useAuth();
    const history=useHistory();
    const handleOnBlur=e=>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData={...registerData};
        newLoginData[field]=value;
        // console.log(registerData);
        setRegisterData(newLoginData);
        console.log(newLoginData);
    }

    const handleRegister = e => {
        if(registerData.password!==registerData.password2){
            alert('your password did not match');
        }
        registerUser(registerData.email,registerData.password,registerData.name,history)
        e.preventDefault();
    }
    return (
        <Container>
        <Grid container spacing={2}>
                <Grid mt={5} item xs={12} md={6}>
                    <Typography variant='body1' gutterBottom>
                        Register here
                    </Typography>
                    <form onSubmit={handleRegister}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            label="User name"
                            type="text"
                            id="standard-size-small"
                            name='name'
                            onBlur={handleOnBlur}
                            size="small"
                            variant="standard"
                        />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            label="Your email"
                            type="email"
                            id="standard-size-small"
                            name='email'
                            onBlur={handleOnBlur}
                            size="small"
                            variant="standard"
                        />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            label="Your password"
                            type='password'
                            id="standard-size-small"
                            name='password'
                            onBlur={handleOnBlur}
                            size="small"
                            variant="standard"
                        />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            label="Retype password"
                            type='password'
                            id="standard-size-small"
                            name='password2'
                            onBlur={handleOnBlur}
                            size="small"
                            variant="standard"
                        />
                        <NavLink style={{textDecoration:'none', display:'block'}} to='/login'>Allready register? Please Signin</NavLink>
                        <Button variant='contained' type='submit' sx={{display:'block', ml:'auto',mr:'auto', mt:2}} >Register</Button>
                    </form>
                    <Button onClick={signInWithGoogle} variant='contained' sx={{display:'block', background:'green', color:'white', ml:'auto',mr:'auto', mt:2}}>Google signin</Button> 
                    {/* {!user.email&&<CircularProgress/>} */}
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%', }} src="https://i.ibb.co/2PCQpYc/login.png" alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;