import { Email, GitHub, LinkedIn } from '@mui/icons-material'
import { Avatar, IconButton, Popover, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React from 'react'

const About = () => {

    const openLink = (link) => {
        window.open(link, "_blank", "noopener noreferrer");
    }

  return (
    <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        mt={{xs:"7vh", md:"15vh"}}
    >
        <Stack ml={3} mr={3} direction={{xs:"column", md:"row"}} spacing={{xs:0, md:8}} alignItems="center">
            <Stack alignItems="center">
                <Avatar
                    sx={{height:{xs:180, md:250}, width:{xs:180, md:250}}}
                    src="https://raw.githubusercontent.com/tparker48/tparker48.github.io/master/images/me.jpg"
                />
                
                <Stack direction="row" spacing={3} mt={2}>
                    <IconButton onClick={()=>openLink("https://www.linkedin.com/in/thomas-parker-793749170/")}>
                        <LinkedIn/>
                    </IconButton>
                    <IconButton onClick={()=>openLink("https://github.com/tparker48")}>
                        <GitHub/>
                    </IconButton>
                    <IconButton component="a" href="mailto:tfparker256@gmail.com">
                        <Email/>
                    </IconButton>
                </Stack>
                <Typography
                    color="other"
                    mt={1}
                    sx={{
                        fontWeight:200,
                        fontSize:{xs:18, md:22}
                    }}
                >
                    tfparker256@gmail.com
                </Typography>
            </Stack>
            <Box sx={{maxWidth:650}}>
                <Typography
                mt={2}
                color="textSecondary"
                sx={{
                    fontWeight:300,
                    fontSize:{xs:28, md:45}
                }}
                >
                    Hi, how are you?
                </Typography>
                <Typography sx={{fontSize:18, fontWeight:200}} mb={4}>
                    My name is Tom. I'm a software engineer by day and an indie plug-in developer by night.
                    I built my first synthesizer when I was a sophomore in college, and have
                    continued creating audio projects since then.
                    When making an instrument, my focus is on creating something novel,
                    boutiquey, and unconventional. Audio processing is the bedrock of these
                    projects, but I place a great deal of importance on the look and feel of an instrument.
                    My ultimate goal is for artists to interact with my instruments in ways that
                    feel fresh and inspiring.
                </Typography>
            </Box>
        </Stack>
    </Box>
  )
}

export default About