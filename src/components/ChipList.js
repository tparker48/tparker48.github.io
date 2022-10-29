import { Chip, Divider, Grid } from '@mui/material'
import React from 'react'

const ChipList = (props) => {
  return (
    <div>
      <Grid container spacing={1} mb={1}>
          {props.list.map((chip_text) => (
              <Grid item>
                  <Chip label={chip_text} variant="outlined" />
              </Grid>
          ))}
      </Grid>
      {props.divider ? <Divider/> : <div />}
    </div>
  )
}

export default ChipList