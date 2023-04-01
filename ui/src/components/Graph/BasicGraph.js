import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import { Area, CartesianGrid, ComposedChart, Line, XAxis, YAxis } from 'recharts';
import { Button, FormControl, FormHelperText, MenuItem, Select, InputLabel, Typography } from '@mui/material';

import { emotions } from '../consts';
import { fakeGraphData } from './fakeGraphData';

const BasicGraph = () => {
  const graphWidth = window.innerWidth;
  const graphHeight = window.innerHeight / 2;
  console.debug(`graphWidth: ${graphWidth} graphHeigh: ${graphHeight}`);

  const [ activeEmotion, setActiveEmotion ] = useState('tired');
  const [ emotionList, setEmotionList ] = useState(['tired', 'anger'])

  const handleChange = (e) => {
    setActiveEmotion(e.target.value);
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
    <Box sx={{ bgcolor: 'background.paper' }}>
      <Typography variant='h5'>Graph</Typography>
      <ComposedChart 
        width={graphWidth} 
        height={graphHeight} 
        data={fakeGraphData} 
        margin={{ top: 5, right: 30, left: 0, bottom: 5, }}
      >
        {emotionList.map((emotion) => (renderEmotionGraphData(emotion)))}
        <CartesianGrid stroke='#000' strokeDasharray="1 20"/>
        <XAxis dataKey='name' padding={{ left: 10, right: 0 }}/>
        <YAxis />
      </ComposedChart>
      <Box>
        <FormControl sx={{ m: 1, width:'80%' }}>
          <InputLabel id="active-emotion-select-helper-label">Emotion</InputLabel>
          <Select
            labelId="active-emotion-select-helper-label"
            id="active-emotion-select-helper"
            value={activeEmotion}
            label="Active Emotion"
            onChange={handleChange}
          >
            {Object.keys(emotions).map((emotion) => (
              <MenuItem value={emotions[emotion].value}>{emotions[emotion].label}</MenuItem>
            ))}
          </Select>
          <FormHelperText>Select the emotion to highlight</FormHelperText>
        </FormControl>
      </Box>
    </Box>
  )
}

export default BasicGraph
