import { Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { plugin_data } from '../pluginData'
import ProjectCard from './ProjectCard'

const Plugins = () => {
  return (
    <Stack alignItems="center">
      <Stack direction="row" alignItems="baseline" spacing={2} mb={5} mt={2}>
        <Typography variant="h3" sx={{fontWeight:300}}>
          plug-ins
        </Typography>
        <Typography variant="h4" color = "textSecondary" sx={{fontWeight:300}}>
          VST3/AU
        </Typography>
      </Stack>
      <Grid container justifyContent="center" paddingLeft={12} paddingRight={12}>
        {plugin_data.map((_, index) => (
          <Grid item key={index} padding={1}>
            <ProjectCard
              name={_.name}
              img={_.thumbnail}
              info={_.type}
              destination={_.name}
            />
          </Grid>
        ))}
      </Grid>

    </Stack>
  ) 
}

export default Plugins