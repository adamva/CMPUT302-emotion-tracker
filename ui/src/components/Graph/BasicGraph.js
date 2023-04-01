import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import { Area, CartesianGrid, ComposedChart, Line, XAxis, YAxis } from 'recharts';
import { Button, Card, CardContent, FormControl, FormHelperText, MenuItem, Select, InputLabel, Typography, Paper, Grid } from '@mui/material';

import { emotions } from '../consts';
import { fakeGraphData } from './fakeGraphData';
import MultipleSelectChip from './EmotionListSelect';

const BasicGraph = () => {
  const graphWidth = window.innerWidth - 20;
  const graphHeight = window.innerHeight / 2;
  console.debug(`graphWidth: ${graphWidth} graphHeigh: ${graphHeight}`);

  const [ activeEmotion, setActiveEmotion ] = useState('tired');
  const [ activeEmotionList, setActiveEmotionList ] = useState(['tired', 'anger'])

  const handelActiveEmotionChange = (e) => {
    let newActiveEmotion = e.target.value;
    // Rearrange the graph to have the active emotion at the beginning of the list such that
    // the graph will render the non-active emotions ontop
    let newEmotionList = [...activeEmotionList];
    newEmotionList.splice(activeEmotionList.findIndex((element) => element === newActiveEmotion), 1)
    newEmotionList.unshift(newActiveEmotion);
    
    setActiveEmotion(newActiveEmotion);
    setActiveEmotionList(newEmotionList);
  }

  const renderEmotionGraphData = (emotion) => {
    if (emotion === activeEmotion) {
      return (
        <Area 
          type='monotone' 
          dataKey={emotions[emotion].value}
          dot={null} 
          fill={emotions[emotion].color}
          stroke={emotions[emotion].color} 
          strokeWidth={2} strokeDasharray="5 5"
        />
      )
    } else {
      return (
        <Line 
          type='monotone' 
          dataKey={emotions[emotion].value}
          dot={null} 
          stroke={emotions[emotion].color} 
          strokeWidth={2}
        />
      )
    }
  }
  return (
    <Grid container spacing={1}>

      <Grid item xs={12}>
        <Paper sx={{ m: 2, paddingTop: 1}}>
          <ComposedChart 
            width={graphWidth} 
            height={graphHeight} 
            data={fakeGraphData} 
            margin={{ top: 0, right: 50, left: 0, bottom: 0 }}
          >
            {activeEmotionList.map((emotion) => (renderEmotionGraphData(emotion)))}
            <CartesianGrid stroke='#000' strokeDasharray="1 20"/>
            <XAxis dataKey='name'/>
            <YAxis />
          </ComposedChart>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper sx={{ marginLeft: 2, marginRight: 2 }}>
          <Typography variant='h5' color='primary' sx={{ m: 1 }}>Graph Controls</Typography>
          <FormControl sx={{ m: 1 }}>
            <InputLabel id="active-emotion-select-helper-label">Active Emotion</InputLabel>
            <Select
              labelId="active-emotion-select-helper-label"
              id="active-emotion-select-helper"
              value={activeEmotion}
              label="Active Emotion"
              onChange={handelActiveEmotionChange}
            >
              {activeEmotionList.map((emotion) => (
                <MenuItem value={emotions[emotion].value}>{emotions[emotion].label}</MenuItem>
              ))}
            </Select>
            <FormHelperText>Select the emotion to highlight</FormHelperText>
          </FormControl>
          <MultipleSelectChip activeEmotionList={activeEmotionList} setActiveEmotionList={setActiveEmotionList} />
        </Paper>
      </Grid>
    </Grid>
  )
}

export default BasicGraph
