import { Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { plugin_data } from '../data'
import PluginCard from './PluginCard'

const Plugins = () => {
  return (
    <Stack alignItems="center" mt={2}>
      <Stack direction="row" alignItems="baseline" spacing={2} mb={5} mt={2}>
        <Typography variant="h3" sx={{fontWeight:300}}>
          Plug-Ins
        </Typography>
        <Typography variant="h4" color = "textSecondary" sx={{fontWeight:300}}>
          VST3/AU
        </Typography>
      </Stack>
      <Grid container justifyContent="center" paddingLeft={12} paddingRight={12}>
        {plugin_data.map((_, index) => (
          <Grid item key={index} padding={1}>
            <PluginCard
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