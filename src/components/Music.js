import { Email, GitHub, LinkedIn } from '@mui/icons-material'
import { Avatar, Card, CardActionArea, CardContent, CardMedia, IconButton, Popover, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React from 'react'

const Music = () => {
    const openLink = (link) => {
        window.open(link, "_blank", "noopener noreferrer");
    }

  return (
    <div>
    <Stack
      direction={{xs:"column"}}
      justifyContent="center"
      alignItems={{xs:"center"}}
      padding={7}
      spacing={3}
    >
      

      <Card elevation={12} variant="elevation" sx={{width:200, mb:0}}>
            <CardMedia
                component="img"
                height="full"
                image="https://raw.githubusercontent.com/tparker48/tparker48.github.io/master/images/me.jpg"
            />
      </Card>
    </Stack>
      
      <Stack
      direction={{xs:"column"}}
      justifyContent="center"
      alignItems={{xs:"left"}}
      spacing={2}
      paddingLeft={7}
      >

        <Typography 
          sx={{fontSize:30, fontWeight:200}}
          onClick={()=>openLink("https://google.com")}>
          Spotify
        </Typography>

        <Typography 
          sx={{fontSize:30, fontWeight:200}}
          onClick={()=>openLink("https://google.com")}>
          Apple Music
        </Typography>

        <Typography 
          sx={{fontSize:30, fontWeight:200}}
          onClick={()=>openLink("https://google.com")}>
          Youtube Music
        </Typography>

        <Typography 
          sx={{fontSize:30, fontWeight:200}}
          onClick={()=>openLink("https://soundcloud.com/6009/sets/street-portraits")}>
          SoundCloud
        </Typography>

        <Typography 
          sx={{fontSize:30, fontWeight:200}}
          onClick={()=>openLink("https://tparker.bandcamp.com/album/street-portraits")}>
          BandCamp
        </Typography>
      </Stack>
    </div>
  )
}

export default Music