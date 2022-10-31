import { Paper, styled, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React from 'react'
import JobCard from './JobCard'
import { coursework_data, job_data, project_data, skills_data } from '../data.js'
import ChipList from './ChipList'
import ProjectCard from './ProjectCard'

const SectionHeader = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontWeight: 200,
}));

const Resume = () => {
  return (
    <Stack m={'auto'} mt={2} sx={{maxWidth:750}} spacing={4} padding={2}>
      <Stack spacing={1}>
        <SectionHeader variant="h4"> Skills </SectionHeader>
        { skills_data.map((skill_list, index) => (<ChipList key={index} divider={(index < 2)} list={skill_list} />)) }
      </Stack>

      <Stack spacing={1.5}>
      <SectionHeader variant="h4"> Work Experience </SectionHeader>
        { job_data.map((job, index) => (<JobCard key={index} job={job}/>)) }
      </Stack>

      <Stack spacing={1.5}>
        <SectionHeader variant="h4"> Recent Projects </SectionHeader>
        { project_data.map((project, index) => (<ProjectCard key={index} project={project} />)) }
      </Stack>

      <Stack spacing={1}>
      <SectionHeader variant="h4"> Education </SectionHeader>
        <Paper>
          <Box padding={2}>
            <Stack direction="row" justifyContent="space-between">
              <Typography variant="h6" sx={{fontSize:{xs:'4vw', sm:24}}}>
                UC Santa Barbara
              </Typography>
              <Typography mb={1} sx={{fontWeight:300}}>3.8 GPA</Typography>
            </Stack>
            <Typography variant="h6" mb={2} sx={{fontSize:20, fontWeight:200}}>
              Computer Science
            </Typography>
            <ChipList list={coursework_data} />
          </Box>
        </Paper>
      </Stack>
    </Stack>
  )
}

export default Resume