import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Contact = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" sx={{height:"60vh"}}>
        <Typography
          color="textSecondary"
          sx={{
            fontWeight:300,
            fontSize:{xs:"7.5vw", sm:45}
          }}
        >
          Contact Me
        </Typography>
          <Typography
            sx={{
              fontWeight:200,
              fontSize:{xs:"08.5vw", sm:51}
            }}
          >
            tfparker256@gmail.com
          </Typography>
    </Box>
  )
}

export default Contact