import { Button, Card, Chip, Divider, Grid, List, ListItemButton, Paper, Typography, withStyles } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React from 'react'

const Resume = () => {
  return (
    <Stack m={'auto'} mt={2} sx={{maxWidth:750}} spacing={4} padding={2}>

      <Box display="flex" justifyContent="center">
        <Typography variant="h3" sx={{fontWeight:300}}>Thomas Parker</Typography>
      </Box>

      <Stack spacing={0.2}>
        <Typography variant="h4" color="textSecondary" sx={{fontWeight:200}}>Skills</Typography>
        <Grid container spacing={1}>
          <Grid item>
            <Chip label="C/C++" variant="outlined" />
          </Grid>
          <Grid item>
            <Chip label="Python" variant="outlined" />
          </Grid>
          <Grid item>
            <Chip label="Javascript" variant="outlined" />
          </Grid>
          <Grid item>
            <Chip label="HTML" variant="outlined" />
          </Grid>
          <Grid item>
            <Chip label="CSS" variant="outlined" />
          </Grid>
          <Grid item>
            <Chip label="C#" variant="outlined" />
          </Grid>
          <Grid item>
            <Chip label="Matlab/Simulink" variant="outlined" />
          </Grid>
        </Grid>

        <Grid container spacing={1}>
          <Grid item>
            <Chip label="React" variant="outlined" />
          </Grid>
          <Grid item>
            <Chip label="MaterialUI" variant="outlined" />
          </Grid>
          <Grid item>
            <Chip label="Bootstrap" variant="outlined" />
          </Grid>
          <Grid item>
            <Chip label="Selenium" variant="outlined" />
          </Grid>
          <Grid item>
            <Chip label="JUCE" variant="outlined" />
          </Grid>
          <Grid item>
            <Chip label="Linux" variant="outlined" />
          </Grid>
          <Grid item>
            <Chip label="Git" variant="outlined" />
          </Grid>
        </Grid>

        <Grid container spacing={1}>
          <Grid item>
            <Chip label="Software Development" variant="outlined" />
          </Grid>
          <Grid item>
            <Chip label="Automation" variant="outlined" />
          </Grid>
          <Grid item>
            <Chip label="Tools" variant="outlined" />
          </Grid>
          <Grid item>
            <Chip label="Unit Testing" variant="outlined" />
          </Grid>
          <Grid item>
            <Chip label="Digital Signal Processing" variant="outlined" />
          </Grid>
        </Grid>
      </Stack>

      <Stack spacing={1.5}>
        <Typography variant="h4" color="textSecondary"  sx={{fontWeight:200}}>Work Experience</Typography>
        <Paper>
          <Box padding={2}>
            <Stack direction={{sm:"row"}} justifyContent="space-between" alignItems={{sm:"center"}}>
              <Typography variant="h6" sx={{fontSize:{xs:'4vw', sm:24}}}>Belcan</Typography>
              <Typography variant="h6" sx={{fontSize:17, fontWeight:200}}>Software Engineer</Typography>
            </Stack>
            <Typography sx={{fontWeight:200}}>May 2021 - Present</Typography>
            <Typography sx={{fontWeight:200}}>
              <ul>
              <li>Translated user requirements into robust unit tests and features for a C++ codebase</li>
                <li>Doubled unit test development speed by automating the process extensively with Python</li>
                <li>Proposed and implemented a build-tracing tool which provides data for product managers</li>
                <li>Designed a tool to identify bottlenecks stemming from software licensing conflicts</li>
                <li>Assisted in maintaining and updating a Python-based unit testing framework</li>
                <li>Aided integration and power engineers in diagnosing and correcting software-related issues</li>
              </ul>
            </Typography>
          </Box>
        </Paper>
        <Paper>
          <Box padding={2}>
            <Stack direction={{sm:"row"}} justifyContent="space-between" alignItems={{sm:"center"}}>
              <Typography variant="h6" sx={{fontSize:{xs:'4vw', sm:24}}}>Northrop Grumman</Typography>
              <Typography variant="h6" sx={{fontSize:17, fontWeight:200}}>Software Engineer Intern</Typography>
            </Stack>
            <Typography sx={{fontWeight:200}}>July - August 2019</Typography>
            <Typography sx={{fontWeight:200}}>
              <ul>
                <li>Developed a 3D route visualization plug-in (DLL) for flight simulation software</li>
                <li>Streamlined the conversion of vehicle flight plans, allowing cross-team use of several tools </li>
                <li>Ported diagnostic software (C++) to a modern web app built with JavaScript and Bootstrap</li>
                <li>Designed unit tests with Selenium for automated black-box testing</li>
                <li>Authored documentation, participated in code reviews, and worked across different teams</li>
                <li>Led presentations to showcase important contributions and progress</li>
              </ul>
            </Typography>
          </Box>
        </Paper>
      </Stack>

      <Stack spacing={1.5}>
        <Typography variant="h4" color="textSecondary"  sx={{fontWeight:200}}>Projects</Typography>
        <Paper>
            <Box padding={2}>
            <Stack direction="row" justifyContent="space-between">
              <Typography component="a" href="https://github.com/tparker48/bitnoise" variant="h6" color="textPrimary" sx={{textDecoration:'none', fontSize:{xs:'4vw', sm:24}}}>Bitnoise</Typography>
                <Typography variant="h6" sx={{fontSize:17, fontWeight:200}}>Python</Typography>
              </Stack>
              <Typography variant="h6" sx={{fontSize:17, fontWeight:200}}>Music Composition Library</Typography>
              <Typography sx={{fontWeight:200}}>
                <ul>
                <li>A Python library which enables developers to create music using code</li>
                <li>Contains all the essential tools for creating electronic music</li>
                <li>Provides audio effects algorithims such as delay, reverb, envelopes, and filters</li>
                <li>Implements a scheduler which uses callbacks to help orchestrate timing</li>
                <li>Renders output to wav file</li>
                </ul>
              </Typography> 
            </Box>
          </Paper>
          <Paper>
            <Box padding={2}>
              <Stack direction="row" justifyContent="space-between">
                <Typography component="a" href="https://github.com/tparker48/Disco-Explorer-Remastered" variant="h6" color="textPrimary" sx={{textDecoration:'none' , fontSize:{xs:'4vw', sm:24}}}>Disco Explorer</Typography>
                <Typography variant="h6" sx={{fontSize:17, fontWeight:200}}>C#</Typography>
              </Stack>
              <Typography variant="h6" sx={{fontSize:17, fontWeight:200}}>Video Game Mod</Typography>
              <Typography sx={{fontWeight:200}}>
                <ul>
                  <li>A project that adds features to the 2019 Role-Playing Game of the Year: Disco Elysium</li>
                  <li>Accomplished by decompiling and analyzing the C#/Unity product</li>
                  <li>Uses DLL hooking and API injection to extend and modify game functionality</li>
                  <li>Adds major features such a fast travel system with discoverable waypoints</li>
                  <li>Continually updated alongside the game's iterations through December 2021</li>
                </ul>
              </Typography>
            </Box>
          </Paper>
          <Paper>
            <Box padding={2}>
            <Stack direction="row" justifyContent="space-between">
              <Typography component="a" href="https://github.com/tparker48/sherpa" variant="h6" color="textPrimary" sx={{textDecoration:'none' , fontSize:{xs:'4vw', sm:24}}}>Sherpa</Typography>
                <Typography variant="h6" sx={{fontSize:17, fontWeight:200}}>C++</Typography>
              </Stack>
              <Typography variant="h6" sx={{fontSize:17, fontWeight:200}}>Software Synthesizer</Typography>
              <Typography sx={{fontWeight:200}}>
                <ul>
                <li>Generates audio in real time by converting images into 2D matrices of audio samples</li>
                <li>Implements interpolation to support playback at a user-controlled frequency</li>
                <li>Provides a responsive UI and support for real-time input from keyboards and MIDI devices</li>
                <li>Interfaces with Digital Audio Workstations on any platform via the VST3 SDK</li>
                </ul>
              </Typography>
            </Box>
          </Paper>
      </Stack>


      <Stack spacing={1}>
        <Typography variant="h4" color="textSecondary"  sx={{fontWeight:200}}>Education</Typography>
        <Paper>
          <Box padding={2}>
            <Stack direction="row" justifyContent="space-between">
              <Typography variant="h6" sx={{fontSize:{xs:'4vw', sm:24}}}>University of California, Santa Barbara</Typography>
              <Typography mb={1} sx={{fontWeight:300}}>3.8 GPA</Typography>
            </Stack>

            <Typography variant="h6" mb={2} sx={{fontSize:20, fontWeight:200}}>Computer Science</Typography>
              
            <Grid container spacing={1}>
            <Grid item>
              <Chip label="Audio Signal Processing" variant="outlined" />
            </Grid>
            <Grid item>
              <Chip label="Graphics" variant="outlined" />
            </Grid>
            <Grid item>
              <Chip label="AI & Machine Learning" variant="outlined" />
            </Grid>
            <Grid item>
              <Chip label="Parallel Programming" variant="outlined" />
            </Grid>
            <Grid item>
              <Chip label="Data Structures & Algorithms" variant="outlined" />
            </Grid>
            <Grid item>
              <Chip label="Networks" variant="outlined" />
            </Grid>
            <Grid item>
              <Chip label="Linear Algebra" variant="outlined" />
            </Grid>
            <Grid item>
              <Chip label="Multivariable Calculus" variant="outlined" />
            </Grid>
            <Grid item>
              <Chip label="Differential Equations" variant="outlined" />
            </Grid>
          </Grid>

          </Box>
        </Paper>
      </Stack>


    </Stack>
  )
}

export default Resume