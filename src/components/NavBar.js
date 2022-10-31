import React from 'react'
import { AppBar, Box, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Toolbar, Typography } from '@mui/material'
import { styled } from '@mui/system';
import { Article, Email, GitHub, Home, LinkedIn, Power} from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const buttons = [
  {name: "Home", route:"/", icon:<Home/>},
  {name: "Plug-Ins", route:"/plugins", icon:<Power/>},
  {name: "Resume", route:"/resume", icon:<Article/>},
  {name: "Contact", route:"/contact", icon:<Email/>}
];

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
  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, "left": open });
  };

  const list = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {buttons.map((button, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton component={Link} to={button.route}>
              <ListItemIcon>
                {button.icon}
              </ListItemIcon>
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
        <Stack direction="row" spacing={2} alignItems="center">
          <IconButton onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Typography
            sx={{
              fontSize:{xs:18, sm:21},
              fontWeight:300,
              textDecoration:"none"}}
            component="a"
            href="/"
            color="textPrimary"
            display={{xs:"none", sm:"block"}}
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
          <Drawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer(false)}
          >
            {list}
          </Drawer>
      </StyledToolbar>
      
    </AppBar>
  )
}

export default Navbar