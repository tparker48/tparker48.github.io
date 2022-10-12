import React from 'react'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material'
import { Article, ContactMail, GraphicEq, Headset, Home} from '@mui/icons-material'

const Sidebar = () => {
  return (
    <Box
      flex={1}
      p={2} 
      sx={{ display: {xs: "none", sm:"block"} }}
    >
        <Box position="fixed">
            <List>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#home">
                        <ListItemIcon>
                            <Home />
                        </ListItemIcon>
                        <ListItemText primary="home" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#home">
                        <ListItemIcon>
                            <GraphicEq />
                        </ListItemIcon>
                        <ListItemText primary="plug-ins" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#home">
                        <ListItemIcon>
                            <Headset />
                        </ListItemIcon>
                        <ListItemText primary="music" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#home">
                        <ListItemIcon>
                            <Article />
                        </ListItemIcon>
                        <ListItemText primary="resume" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#home">
                        <ListItemIcon>
                            <ContactMail />
                        </ListItemIcon>
                        <ListItemText primary="contact" />
                    </ListItemButton>
                </ListItem>
                
            </List>
        </Box>
    </Box>
  )
}

export default Sidebar