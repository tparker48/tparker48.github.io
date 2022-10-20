import { Apple, WindowSharp } from '@mui/icons-material'
import { Box, Button, Paper, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'

const ProjectPage = (props) => {
  return (
    <Stack padding={2} alignItems="center">
        <Paper sx={{background:'#2a2a2a'}}>
        <Stack 
            direction={{xs:"column", md:"row"}}
            alignItems="center"
            justifyContent="center"
            spacing={2}
            padding={{xs:2, md:8}}
        >
            <Box
                component="img"
                sx={{
                    width: {xs: '.8', md:'.45'},
                }}
                src={props.img}
            />
            <Stack alignItems="center" spacing={1} padding={1}>
                <Typography variant="body" >
                    {props.name}
                </Typography>
                <Typography noWrap variant="h3" sx={{fontSize:{xs: '10vw', md:60}, fontWeight:200}}>
                    {props.type}
                </Typography>
                <Typography color="textSecondary">
                    {props.price}
                </Typography>
                <Typography variant="body" sx={{fontWeight:200, fontSize:20}}>
                    Download
                </Typography>
                <Stack direction="row" spacing={2}>
                    
                    <Button variant="outlined" color="error">
                        <WindowSharp ></WindowSharp>
                    </Button>
                    <Button variant="outlined" color="error">
                        <Apple ></Apple>
                    </Button>
                </Stack>
            </Stack>
        </Stack>
        </Paper>
        <Box width={{xs:'.9', md:800}} mt={3}>
            <Typography mt={2} variant="h4" sx={{fontSize:30, fontWeight:300}}>
                {props.tagline}
            </Typography>
            <Typography sx={{fontSize:20, fontWeight:200}}>
                {props.description}
            </Typography>
        </Box>
    </Stack>
  )
}

// The LV-1 is a flute and winds synthesizer with a warm but distinctly digital quality.
// With an unlabled interface, the LV-1 is a subject of exploration as well as a tool for sound crafting.

export default ProjectPage