import React from 'react'
import { AppBar, Box, IconButton, ListItemIcon, Menu, MenuItem, Stack, Toolbar, Typography } from '@mui/material'
import { styled } from '@mui/system';
import { Article, Email, GitHub, Home, LinkedIn, MusicNote, Power} from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const StyledToolbar = styled(Toolbar)({
  display:"flex",
  justifyContent:"space-between",
});

const Icons = styled(Box)(({theme}) => ({
  display:"flex",
  gap:"20px",
  alignItems:"center",
}));

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar  color="secondary" mb={2} position="sticky">
      <StyledToolbar>
        <Stack direction="row" spacing={2} alignItems="center">
          <IconButton onClick={handleClick} >
            <MenuIcon />
          </IconButton>
          <Typography
            sx={{fontSize:21, fontWeight:300, textDecoration:"none"}}
            component="a"
            href="/"
            color="textPrimary"
          >
            Thomas Parker
          </Typography>
        </Stack>
          <Icons>
            <IconButton onClick={()=>{window.open('https://www.linkedin.com/in/thomas-parker-793749171/', "_blank", "noopener noreferrer")}}>
                <LinkedIn />
            </IconButton>
            <IconButton onClick={()=>{window.open('https://github.com/tparker48', "_blank", "noopener noreferrer")}}>
                <GitHub />
            </IconButton>
          </Icons>
      </StyledToolbar>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose} component={Link} to="/">
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          Home
        </MenuItem>
        <MenuItem onClick={handleClose} component={Link} to="/plugins">
          <ListItemIcon>
            <Power />
          </ListItemIcon>
          Plugins
        </MenuItem>
        <MenuItem onClick={handleClose} component={Link} to="/resume">
          <ListItemIcon>
            <Article />
          </ListItemIcon>
          Resume
        </MenuItem>
        <MenuItem onClick={handleClose} component={Link} to="/contact">
          <ListItemIcon>
            <Email />
          </ListItemIcon>
          Contact
        </MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar

// <IconButton onClick={()=>{window.open('https://soundcloud.com/6009', "_blank", "noopener noreferrer")}}>
//   <CloudCircle />
// </IconButton>