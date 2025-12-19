import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
import { red, yellow } from '@mui/material/colors';

const MyAppBar = () => {
  return (
    <AppBar position="static" sx={{bgcolor: '#8e9e8e'}}>
      <Toolbar >
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          StockNews
        </Typography>
        <Button  color="inherit">Whitehouse.gov</Button>
        {/* put in context */}
        <Button color="inherit" sx = {{flexGrow: .2}}>TruthSocial</Button>

        {/* <Button component = {Link} to = "/social"color="inherit" sx = {{flexGrow: .2}}>TruthSocial</Button> */}
        
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default MyAppBar;
