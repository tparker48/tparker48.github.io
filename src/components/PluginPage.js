import { Apple, Pause, PauseCircle, PauseCircleFilled, PlayArrow, PlayArrowOutlined, PlayArrowRounded, PlayArrowTwoTone, PlayCircle, WindowSharp } from '@mui/icons-material'
import { Box, Button, getIconButtonUtilityClass, IconButton, Paper, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useState } from 'react'
import ReactPlayer from "react-player"

const ProjectPage = (props) => {
    const [playing, setPlaying] = useState(false);

    const getIcon = () => {
        if (playing) return <PauseCircle sx={{width:50, height:50}} />
        else return <PlayCircle sx={{width:50, height:50}} />
    }
    
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
                    src={props.plugin.img}
                />
                <Stack alignItems="center" spacing={1} padding={1}>
                    <Typography variant="body" >
                        {props.plugin.name}
                    </Typography>
                    <Typography noWrap variant="h3" sx={{fontSize:{xs: '10vw', md:60}, fontWeight:200}}>
                        {props.plugin.type}
                    </Typography>
                    <Typography color="textSecondary">
                        {props.plugin.price}
                    </Typography>
                    <Typography variant="body" sx={{fontWeight:200, fontSize:20}}>
                        Download
                    </Typography>
                    <Stack direction="row" spacing={2}>
                        <Button variant="outlined" color="error" href={props.plugin.download_windows}>
                            <WindowSharp ></WindowSharp>
                        </Button>
                        <Button variant="outlined" color="error" href={props.plugin.download_apple}>
                            <Apple ></Apple>
                        </Button>
                    </Stack>
                </Stack>
            </Stack>
            </Paper>

            
            <Box width={{xs:'.9', md:800}} mt={3} mb={3}>
                <Typography mt={2} variant="h4" sx={{fontSize:30, fontWeight:300}}>
                    {props.plugin.tagline}
                </Typography>
                <Typography sx={{fontSize:20, fontWeight:200}}>
                    {props.plugin.description}
                </Typography>
            </Box>
        </Stack>
    )
}

export default ProjectPage