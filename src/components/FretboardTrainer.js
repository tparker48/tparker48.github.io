import { Button, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React, { useEffect } from 'react'
import { useState } from 'react';

const notes = ['E', 'F', 'F# Gf', 'G', 'G# Af', 'A', 'A# Bf', 'B', 'C', 'C# Df', 'D', 'D# Ef']


const FretboardTrainer = () => {
  const [active_string, setActiveString] = useState(6);
  const [target_note, setTargetNote] = useState('E');
  const [feedback, setFeedback] = useState(false);

  useEffect(() => {
    console.log(feedback);
  }, [feedback]);

  const get_random_note = () => {
    return notes[Math.floor(Math.random() * notes.length)];
  }

  const register_fret = (string, fret) => { 
    let note = notes[(notes.indexOf(string)+fret)%(notes.length)];
    if (note === target_note) {
      setFeedback(true);
      setTargetNote(get_random_note());
    }
    else {
      setFeedback(false)
    }
  }

  const get_fret_color = (string, fret) => {
    let magnitude = 1.0
    magnitude = magnitude * 1/(string+3)
    if (fret===0) {
      magnitude *= 0.6;
    }

    let rgb = magnitude * 255;
    return `rgb(${rgb*0.7},${rgb*1.0},${rgb*0.9})`
  }

  const get_fret_text = (string, fret) => {
    if (string === 3){
      if (fret === 3 || fret === 5 || fret === 7 || fret === 9 || fret == 12){
        return "*"
      }
    }
    return ""
  }

  return (
    <Stack direction={"row"} bgcolor={"#111111"}>
    <Typography variant={'h5'} width={40} margin={1} color={feedback? "green": "red"}>{target_note}</Typography>
    <Stack>
      {[0,1,2,3,4,5,6,7,8,9,10,11,12].map((fret)=>{
        return (
          <div>
          <Stack
            direction={'horizontal'} justifyContent={"center"}>
            <Box alignContent={"center"} sx={{ borderBottom: 2,  borderColor: '#888888', bgcolor: get_fret_color(6, fret)}} width={"5.0vh"} height={"6.8vh"}  onClick={()=>{register_fret('E', fret)}}>{get_fret_text(6, fret)}</Box>
            <Box alignContent={"center"} sx={{ borderBottom: 2,  borderColor: '#888888', bgcolor: get_fret_color(5, fret)}} width={"5.0vh"} height={"6.8vh"}  onClick={()=>{register_fret('A', fret)}}>{get_fret_text(5, fret)}</Box>
            <Box alignContent={"center"} sx={{ borderBottom: 2,  borderColor: '#888888', bgcolor: get_fret_color(4, fret)}} width={"5.0vh"} height={"6.8vh"}  onClick={()=>{register_fret('D', fret)}}>{get_fret_text(4, fret)}</Box>
            <Box alignContent={"center"} sx={{ borderBottom: 2,  borderColor: '#888888', bgcolor: get_fret_color(3, fret)}} width={"5.0vh"} height={"6.8vh"}  onClick={()=>{register_fret('G', fret)}}>{get_fret_text(3, fret)}</Box>
            <Box alignContent={"center"} sx={{ borderBottom: 2,  borderColor: '#888888', bgcolor: get_fret_color(2, fret)}} width={"5.0vh"} height={"6.8vh"}  onClick={()=>{register_fret('B', fret)}}>{get_fret_text(2, fret)}</Box>
            <Box alignContent={"center"} sx={{ borderBottom: 2,  borderColor: '#888888', bgcolor: get_fret_color(1, fret)}} width={"5.0vh"} height={"6.8vh"}  onClick={()=>{register_fret('E', fret)}}>{get_fret_text(1, fret)}</Box>
          </Stack>
          </div>
        )
      })}
    </Stack>    
  </Stack>
  )
}

export default FretboardTrainer