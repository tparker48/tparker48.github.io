import { Button, FormControl, FormControlLabel, FormLabel, RadioGroup, Typography, Radio} from '@mui/material'
import { Box, Stack } from '@mui/system'
import React, { useEffect } from 'react'
import { useState } from 'react';

const notes = ['E', 'F', 'F# Gf', 'G', 'G# Af', 'A', 'A# Bf', 'B', 'C', 'C# Df', 'D', 'D# Ef']


const FretboardTrainer = () => {
  const [active_string, setActiveString] = useState(0);
  const [target_note, setTargetNote] = useState(0);
  const [feedback, setFeedback] = useState(false);

  useEffect(() => {
    console.log(feedback);
  }, [feedback]);

  const get_random_note = () => {
    let new_idx = (Math.floor(Math.random() * notes.length));
    return (new_idx === target_note)  ? ((new_idx+1) % notes.length) : new_idx
  }

  const register_fret = (string, fret) => {
    if (string != active_string  && active_string != 0) {
      return "invalid"
    }
    let string_open_note = {6:"E", 5:"A", 4:"D", 3:"G", 2:"B", 1:"E"}[string]
    let note = notes[(notes.indexOf(string_open_note)+fret)%(notes.length)];
    if (note === notes[target_note]) {
      setFeedback(true);
      setTargetNote(get_random_note());
    }
    else {
      setFeedback(false)
    }
  }

  const get_fret_color = (string, fret) => {
    let magnitude = 1/(string+3)
    if (fret===0) {
      magnitude *= 0.6;
    }

    if (active_string!=0){
      if (string!=active_string){
        magnitude*=0.5;
      }
      else {
        magnitude=0.20;
      }
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

  const handleStringSelect = (e) => {
    console.log(e.target.value)
    setActiveString(e.target.value);
  }

  return (
    <Stack direction={"row"} bgcolor={"#111111"} spacing={1}>
    <Stack direction={"column"} spacing={10} padding={1} alignItems={"center"}>
      <Typography variant={'h3'} width={50} height={50} margin={1} color={feedback? "green": "textSecondary"}>{notes[target_note]}</Typography>
      <FormControl>
        <FormLabel id="radio-string-selector-label" sx={{color:"#FFFFFF"}}>String</FormLabel>
        <RadioGroup
          aria-labeledby="radio-string-selector-label"
          defaultValue={0}
          name="radio-string-selector-group"
          onChange={handleStringSelect}
        >
          <FormControlLabel value={0} control={<Radio sx={{color:"#888888"}}/>} label="Any" />
          <FormControlLabel value={6} control={<Radio sx={{color:"#888888"}}/>} label="6" />
          <FormControlLabel value={5} control={<Radio sx={{color:"#888888"}}/>} label="5" />
          <FormControlLabel value={4} control={<Radio sx={{color:"#888888"}}/>} label="4" />
          <FormControlLabel value={3} control={<Radio sx={{color:"#888888"}}/>} label="3" />
          <FormControlLabel value={2} control={<Radio sx={{color:"#888888"}}/>} label="2" />
          <FormControlLabel value={1} control={<Radio sx={{color:"#888888"}}/>} label="1" />
        </RadioGroup>
      </FormControl>
    </Stack>
    <Stack>
      {[0,1,2,3,4,5,6,7,8,9,10,11,12].map((fret)=>{
        return (
          <div>
          <Stack
            direction={'horizontal'} justifyContent={"center"}>
            <Box alignContent={"center"} sx={{ borderBottom: 2,  borderColor: '#888888', bgcolor: get_fret_color(6, fret)}} width={"5.0vh"} height={"6.2vh"}  onClick={()=>{register_fret(6, fret)}}>{get_fret_text(6, fret)}</Box>
            <Box alignContent={"center"} sx={{ borderBottom: 2,  borderColor: '#888888', bgcolor: get_fret_color(5, fret)}} width={"5.0vh"} height={"6.2vh"}  onClick={()=>{register_fret(5, fret)}}>{get_fret_text(5, fret)}</Box>
            <Box alignContent={"center"} sx={{ borderBottom: 2,  borderColor: '#888888', bgcolor: get_fret_color(4, fret)}} width={"5.0vh"} height={"6.2vh"}  onClick={()=>{register_fret(4, fret)}}>{get_fret_text(4, fret)}</Box>
            <Box alignContent={"center"} sx={{ borderBottom: 2,  borderColor: '#888888', bgcolor: get_fret_color(3, fret)}} width={"5.0vh"} height={"6.2vh"}  onClick={()=>{register_fret(3, fret)}}>{get_fret_text(3, fret)}</Box>
            <Box alignContent={"center"} sx={{ borderBottom: 2,  borderColor: '#888888', bgcolor: get_fret_color(2, fret)}} width={"5.0vh"} height={"6.2vh"}  onClick={()=>{register_fret(2, fret)}}>{get_fret_text(2, fret)}</Box>
            <Box alignContent={"center"} sx={{ borderBottom: 2,  borderColor: '#888888', bgcolor: get_fret_color(1, fret)}} width={"5.0vh"} height={"6.2vh"}  onClick={()=>{register_fret(1, fret)}}>{get_fret_text(1, fret)}</Box>
          </Stack>
          </div>
        )
      })}
    </Stack>
  </Stack>
  )
}

export default FretboardTrainer