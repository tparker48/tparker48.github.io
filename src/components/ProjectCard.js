import { Box, Paper, Stack, Typography } from '@mui/material'
import React from 'react'

const ProjectCard = (props) => {
  return (
    <Paper>
        <Box padding={2}>
            <Stack direction="row" justifyContent="space-between">
                <Typography
                    component="a"
                    href={props.project.link}
                    variant="h6"
                    color="textPrimary"
                    sx={{
                        textDecoration:'none',
                        fontSize:{xs:'4vw', sm:24}
                    }}
                >
                    {props.project.name}
                </Typography>
                <Typography sx={{fontSize:17, fontWeight:200}}>
                {props.project.language}
                </Typography>
            </Stack>
            <Typography sx={{fontSize:17, fontWeight:200}}>
                {props.project.description}
            </Typography>
                <ul>
                    {props.project.details.map((line, index) => (
                        <Typography key={index} sx={{fontWeight:200}}>
                            <li>{line}</li>
                        </Typography>
                    ))}
                </ul>
        </Box>
    </Paper>
  )
}

export default ProjectCard