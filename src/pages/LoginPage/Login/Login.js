import { Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink , useLocation, useHistory} from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData]=useState({});
    const {signInUser,signInWithGoogle,isLoading}=useAuth();

    const location=useLocation();
    const history=useHistory();
    const handleOnChange=e=>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData={...loginData};
        newLoginData[field]=value;
        setLoginData(newLoginData);
        // console.log(newLoginData);
    }
    const handleLogin = e => {
        signInUser(loginData.email, loginData.password,history,location)
        e.preventDefault();
    }
    const handleGoogleSignIn=()=>{
        signInWithGoogle(location,history)
    }
    return (
        <Container sx={{textAlign:'center'}}>
            <Grid container spacing={2}>
                <Grid mt={5} item xs={12} md={6}>
                    <Typography variant='body1' gutterBottom>
                        Login
                    </Typography>
                    <form onSubmit={handleLogin}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            label="Your email"
                            id="standard-size-small"
                            name='email'
                            onChange={handleOnChange}
                            size="small"
                            variant="standard"
                        />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            label="Your password"
                            type='password'
                            id="standard-size-small"
                            name='password'
                            onChange={handleOnChange}
                            size="small"
                            variant="standard"
                        />
                        <NavLink style={{textDecoration:'none', display:'block'}} to='/register'>New user? Please Sign up</NavLink>
                        <Button variant='contained' type='submit' sx={{display:'block',ml:'auto',mr:'auto',mt:2}} >Login</Button>

                        {
                            isLoading&&<CircularProgress/>
                        }
                    </form>
                    <p>---------------------</p>
                    <Button onClick={handleGoogleSignIn} variant='contained'>Google SignIn</Button>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%', }} src="https://i.ibb.co/2PCQpYc/login.png" alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;