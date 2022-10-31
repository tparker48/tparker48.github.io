import { Paper, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React from 'react'

const JobCard = (props) => {
  return (
    <Paper>
        <Box padding={2}>
            <Stack
                direction={{sm:"row"}}
                justifyContent="space-between"
                alignItems={{sm:"center"}}
            >
                <Typography variant="h6" sx={{fontSize:{xs:'4vw', sm:24}}}>
                    {props.job.company}
                </Typography>
                <Typography sx={{fontSize:17, fontWeight:200}}>
                    {props.job.title}
                </Typography>
            </Stack>
            <Typography sx={{fontWeight:200}}>
                {props.job.date_from} - {props.job.date_to}
            </Typography>
                <ul>
                    {props.job.details.map((line, index) => (
                        <Typography key={index} sx={{fontWeight:200}}>
                            <li>{line}</li>
                        </Typography>
                    ))}
                </ul>
        </Box>
    </Paper>
  )
}

export default JobCard