import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import { Area, CartesianGrid, ComposedChart, Line, XAxis, YAxis } from 'recharts';
import { Button, Card, CardContent, FormControl, FormHelperText, MenuItem, Select, InputLabel, Typography, Paper, Grid } from '@mui/material';

import { emotions } from '../consts';
import { fakeGraphData } from './fakeGraphData';

const BasicGraph = () => {
  const graphWidth = window.innerWidth - 20;
  const graphHeight = window.innerHeight / 2;
  console.debug(`graphWidth: ${graphWidth} graphHeigh: ${graphHeight}`);

  const [ activeEmotion, setActiveEmotion ] = useState('tired');
  const [ emotionList, setEmotionList ] = useState(['tired', 'anger'])

  const handelActiveEmotionChange = (e) => {
    let newActiveEmotion = e.target.value;
    let newEmotionList = [...emotionList];
    newEmotionList.splice(emotionList.findIndex((element) => element === newActiveEmotion), 1)
    newEmotionList.push(newActiveEmotion);
    
    setActiveEmotion(newActiveEmotion);
    setEmotionList(newEmotionList);
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
            {emotionList.map((emotion) => (renderEmotionGraphData(emotion)))}
            <CartesianGrid stroke='#000' strokeDasharray="1 20"/>
            <XAxis dataKey='name'/>
            <YAxis />
          </ComposedChart>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper sx={{ marginLeft: 2, marginRight: 2 }}>
          <Typography variant='h5' gutterBottom color='primary'>Graph Controls</Typography>
          <FormControl sx={{ m: 1 }}>
            <InputLabel id="active-emotion-select-helper-label">Emotion</InputLabel>
            <Select
              labelId="active-emotion-select-helper-label"
              id="active-emotion-select-helper"
              value={activeEmotion}
              label="Active Emotion"
              onChange={handelActiveEmotionChange}
            >
              {emotionList.map((emotion) => (
                <MenuItem value={emotions[emotion].value}>{emotions[emotion].label}</MenuItem>
              ))}
            </Select>
            <FormHelperText>Select the emotion to highlight</FormHelperText>
          </FormControl>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default BasicGraph
