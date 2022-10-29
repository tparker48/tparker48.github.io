import {Card, CardActionArea, CardContent, CardMedia, Divider, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'

const ProjectCard = (props) => {
  return (
    <Card elevation={12} variant="elevation" sx={{width:300}}>
        <CardActionArea component={Link} to={props.destination}>
            <CardMedia
                component="img"
                height="150"
                image={props.img}
            />
            <CardContent>
              <Stack direction="row" alignItems="baseline">
                <Typography
                  sx={{
                    mr: 2,
                    fontFamily: 'roboto',
                    fontWeight: 300,
                  }}
                  gutterBottom variant="h6" component="div">
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