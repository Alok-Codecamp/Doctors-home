import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
const Navigation = () => {
  const {user,SignOutUser}=useAuth();
    return (
     <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Link to="appoinment" style={{textDecoration:'none'}}><Button style={{color:'whitesmoke'}}>Appoinment</Button></Link>
         {
           user?.email?
           <Box>
             <NavLink style={{color:'white',textDecoration:'none', fontWeight:'600'}} to='/dashboard'>DASHBOARD</NavLink>
             <Button onClick={SignOutUser} color="inherit">LogOut</Button>
           </Box>
           :
           <NavLink style={{color:'white',textDecoration:'none'}} to='/login'> <Button color="inherit">Login</Button></NavLink>
         }
        </Toolbar>
      </AppBar>
    </Box>
    );
};

export default Navigation;