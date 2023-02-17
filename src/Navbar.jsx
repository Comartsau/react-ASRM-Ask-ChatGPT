import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

function Navbar() {
  return (
    <AppBar position="static" sx={{ elevation: 3 , marginBottom:3 }} >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Travel App
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
