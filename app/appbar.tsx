
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
import { red, yellow } from '@mui/material/colors';
import { navigate } from 'next/dist/client/components/segment-cache-impl/navigation';

const MyAppBar = () => {
  return (
    <AppBar position="static" sx={{ bgcolor: '#8e9e8e' }}>
      <Toolbar >
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          StockNews
        </Typography>
        <Button component={Link} href="/" color="inherit">Whitehouse.gov</Button>
        <Button component={Link} href="/social" color="inherit" sx={{ flexGrow: .2 }}>TruthSocial</Button>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default MyAppBar;
