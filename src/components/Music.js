import { Email, GitHub, LinkedIn } from '@mui/icons-material'
import { Avatar, Card, CardActionArea, CardContent, CardMedia, IconButton, Popover, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React from 'react'

const Music = () => {
    const openLink = (link) => {
        window.open(link, "_blank", "noopener noreferrer");
    }

  return (
    <Stack direction={{xs:"column"}} alignItems={{xs:"center"}}>
      
    <Stack
      bgcolor={"#111111"}
      width={"100vw"}
      direction={{xs:"column"}}
      justifyContent="left"
      alignItems={{xs:"center"}}
      paddingLeft={7}
      paddingTop={7}
      paddingRight={7}
      paddingBottom={2}
    >
      
      <Box 
        component="img"
        sx={
          { width:{xs:225, sm: 500}, mb:3}} 
        alt="The house from the offer."
        src="https://raw.githubusercontent.com/tparker48/tparker48.github.io/master/images/zap.png"
      >
      </Box>
    <Typography color="textPrimary" sx={{fontSize:{xs:22, sm:27}, fontWeight:300}}>Street Portraits</Typography> 
    <Typography color="textSecondary" sx={{fontSize:{xs:20, sm:25}, fontWeight:300}}>Tom Parker</Typography> 
    </Stack>
    <Stack
      direction={{xs:"column"}}
      justifyContent="left"
      alignItems={{xs:"left"}}
      spacing={1}
      padding={1}
      mt={5

        
      }
    >

      <Typography
        width={{xs:225, sm: 500}}
        sx={{fontSize:22, fontWeight:300}}
        paddingLeft={1}
        onClick={()=>openLink("https://google.com")}>
        Spotify
      </Typography>

      <Typography 
        width={{xs:225, sm: 500}}
        sx={{fontSize:22, fontWeight:300}}
        paddingLeft={1}
        onClick={()=>openLink("https://google.com")}>
        Apple Music
      </Typography>

      <Typography 
        width={{xs:225, sm: 500}}
        sx={{fontSize:22, fontWeight:300}}
        paddingLeft={1}
        onClick={()=>openLink("https://music.youtube.com/playlist?list=OLAK5uy_mHdv_udIYiU5cpXxtGdcGqqfcE9oYLlFg")}>
        Youtube Music
      </Typography>

      <Typography 
        width={{xs:225, sm: 500}}
        sx={{fontSize:22, fontWeight:300}}
        paddingLeft={1}
        onClick={()=>openLink("https://soundcloud.com/6009/sets/street-portraits")}>
        SoundCloud
      </Typography>

      <Typography 
        width={{xs:225, sm: 500}}
        sx={{fontSize:22, fontWeight:300}}
        paddingLeft={1}
        onClick={()=>openLink("https://tparker.bandcamp.com/album/street-portraits")}>
        BandCamp
      </Typography>
    </Stack>
    </Stack>
  )
}

export default Music