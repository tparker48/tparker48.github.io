import { Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { plugin_data } from '../data'
import PluginCard from './PluginCard'

const Plugins = () => {
  return (
    <Stack alignItems="center" mt={2}>
      <Stack direction="row" alignItems="baseline" spacing={2} mb={2} mt={2}>
        <Typography sx={{fontSize:40, fontWeight:200}}>
          Plug-Ins
        </Typography>
        <Typography color = "textSecondary" sx={{fontSize:25, fontWeight:300}}>
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