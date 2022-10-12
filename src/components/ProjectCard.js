import {Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'

const ProjectCard = (props) => {
  return (
    <Card elevation={12} variant="elevation" sx={{width: 500}}>
        <CardActionArea onClick={(e)=>{console.log(props.name)}}>
            <CardMedia
                component="img"
                height="250"
                image={props.img}//"https://raw.githubusercontent.com/tparker48/sherpa-synthesizer/master/Images/UI%20final.png"
            />
            <CardContent>
              <Stack direction="row" alignItems="baseline">
                <Typography
                  sx={{
                    mr: 2,
                    fontFamily: 'roboto',
                    fontWeight: 300,
                  }}
                  gutterBottom variant="h5" component="div">
                {props.name}
                </Typography>
                <Typography
                  sx={{
                    mr: 2,
                    fontFamily: 'roboto',
                    fontWeight: 200,
                  }}
                  gutterBottom variant="h6" component="div">
                {props.info}
                </Typography>
              </Stack>
            </CardContent>
        </CardActionArea>
    </Card>
  )
}

export default ProjectCard