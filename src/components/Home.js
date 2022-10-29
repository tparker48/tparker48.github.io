import { Code, Computer, VolumeUp } from '@mui/icons-material'
import { Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import ReactTyped from 'react-typed'

const BackgroundHead = {
    backgroundImage: `url(${"https://raw.githubusercontent.com/tparker48/tparker48.github.io/master/images/background-blur.jpg"})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
		backgroundSize: "cover",
		backgroundAttachment: "fixed",
    height:'92vh'
  };

const Home = () => {
  return (
    <div style={BackgroundHead}>
      <Stack alignItems="center">
          <Stack direction="row" spacing={2} mt={'20vh'}>
              <Code sx={{height:80, width:80}} />
              <Computer sx={{height:80, width:80}} />
              <VolumeUp sx={{height:80, width:80}} />
          </Stack>
          <Typography variant="h3" sx={{fontSize:{xs:'13vw', sm:80}, fontWeight:300}}>
              Thomas Parker
          </Typography>
          <Typography color="textSecondary" variant="h5" sx={{fontSize:{xs:'6vw', sm:40}, fontWeight:300}}>
              <ReactTyped loop typeSpeed={50} strings={['software engineer', 'plugin developer', 'music maker', 'rock climber', 'guitar strummer', 'video game player']}/>
          </Typography>
      </Stack>
    </div>
  )
}

export default Home