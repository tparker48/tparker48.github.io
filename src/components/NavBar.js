import React from 'react'
import { AppBar, Box, Button, IconButton, ListItemButton, Toolbar, Typography } from '@mui/material'
import { styled } from '@mui/system';
import { CloudCircle, GitHub, LinkedIn } from '@mui/icons-material';

const StyledToolbar = styled(Toolbar)({
  display:"flex",
  justifyContent:"space-between",
});


const Icons = styled(Box)(({theme}) => ({
  display:"none",
  gap:"20px",
  alignItems:"center",
  [theme.breakpoints.up("sm")]:{
    display:"flex"
  }
}));


const Navbar = () => {
  return (
    <AppBar color="secondary" mb={2} position="sticky">
        <StyledToolbar>
            <Typography
                component="a"
                noWrap
                href="/"
                variant='h6'
                sx={{
                    mr: 2,
                    fontFamily: 'roboto',
                    fontWeight: 200,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
            >
                Thomas Parker
            </Typography>
            <Icons>
                <IconButton color="secondary">
                    <LinkedIn />
                </IconButton>
                <IconButton color="secondary">
                    <GitHub />
                </IconButton>
                <IconButton color="secondary">
                    <CloudCircle />
                </IconButton>
            </Icons>
        </StyledToolbar>
    </AppBar>
  )
}

export default Navbar