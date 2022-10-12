import { VolumeOff } from '@mui/icons-material'
import { Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import ReactTyped from 'react-typed'

const Home = () => {
  return (
        <Stack mt={12} alignItems="center" justifyContent="space-between">
            <VolumeOff color='textPrimary' sx={{height:150, width:150}} />
            <Typography variant="h2" sx={{fontWeight:400}}>
                Thomas Parker
            </Typography>
            <Typography color="textSecondary" variant="h5" sx={{fontWeight:300}}>
                <ReactTyped loop typeSpeed={50} strings={['software engineer', 'plugin developer', 'music maker']}/>
            </Typography>
        </Stack>
  )
}

export default Home