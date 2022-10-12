import { Card, CardContent, Stack, Typography } from '@mui/material'
import React from 'react'
import ProjectCard from './ProjectCard'

const Plugins = () => {
  return (
    <Stack direction="row" justifyContent="center">
      <Stack spacing={3} mt={7} mb={5}>
        <Stack direction="row" alignItems="baseline" spacing={2} mb={3}>
          <Typography variant="h3" sx={{fontWeight:300}}>
            plug-ins
          </Typography>
          <Typography variant="h4" color = "textSecondary" sx={{fontWeight:300}}>
            VST3/AU
          </Typography>
        </Stack>
        <ProjectCard
          name="DR-1"
          img="https://raw.githubusercontent.com/tparker48/DR-1/main/Images/ui_sc.png"
          info=" Drone Synthesizer"
          destination=""
        />
        <ProjectCard
          name="LV-1"
          img="https://raw.githubusercontent.com/tparker48/LV-1/main/Images/ui_real.png"
          info=" Winds/Flute Synthesizer "
          destination=""
        />
        <ProjectCard
          name="Sherpa"
          img="https://raw.githubusercontent.com/tparker48/sherpa-synthesizer/master/Images/UI%20final.png"
          info=" Topograhpic Synthesizer "
          destination=""
        />
      </Stack>
    </Stack>
  )
}

export default Plugins