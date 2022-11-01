import React from 'react'
import { AppBar, Box, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Toolbar, Typography } from '@mui/material'
import { styled } from '@mui/system';
import { Article, Light, Person, Power} from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const LightText = styled(Typography)(({ theme }) => ({
  fontSize:22,
  fontWeight:200,
  textDecoration:"none",
  color:theme.palette.text.primary,
}));

const StyledToolbar = styled(Toolbar)({
  display:"flex",
  justifyContent:"space-between",
});

const buttons = [
  {name: <LightText>Plug-Ins</LightText>, route:"/plugins", icon:<Power/>},
  {name: <LightText>Resume</LightText>, route:"/resume", icon:<Article/>},
  {name: <LightText>About</LightText>, route:"/about", icon:<Person/>}
];

const Navbar = () => {
  const [state, setState] = React.useState({
    right: false
  });

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, "right": open });
  };

  const list = (
    <Box
      sx={{ width: 200 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      mt={0}
    >
      <List>
        {buttons.map((button, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton component={Link} to={button.route}>
              <ListItemText primary={button.name} />
            </ListItemButton>
        </ListItem>
        ))}
          
      </List>
    </Box>
  );

  return (
    <AppBar  color="secondary" mb={2} position="sticky">
      <StyledToolbar>
        <Stack m="auto" sx={{width:{xs:"100vw", md:"80vw"}}} direction="row" justifyContent="space-between" alignItems="center">
          <LightText
            sx={{fontSize:{xs:24, sm:28}}}
            component="a"
            href="/#"
            color="textPrimary"
          >
            Thomas Parker
          </LightText>

          <IconButton 
            color="primary" 
            onClick={toggleDrawer(true)}
            sx={{display:{xs:"block", md:"none"}}}
          >
            <MenuIcon />
          </IconButton>
          

          <Stack display={{xs:"none", md:"flex"}} direction="row" spacing={8}>
            <LightText component="a" href="/#/plugins">Plug-Ins</LightText>
            <LightText component="a" href="/#/resume">Resume</LightText>
            <LightText component="a" href="/#/about">About</LightText>
          </Stack>

        </Stack>
        <Drawer
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer(false)}
        >
          {list}
        </Drawer>
      </StyledToolbar>
      
    </AppBar>
  )
}

export default Navbar