import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import { Area, AreaChart, CartesianGrid, ComposedChart, Line, XAxis, YAxis } from 'recharts';
import { Typography } from '@mui/material';

import { emotions } from '../consts';
import { fakeGraphData } from './fakeGraphData';

const BasicGraph = () => {
  const graphWidth = window.innerWidth;
  const graphHeight = window.innerHeight / 1.5;
  console.debug(`graphWidth: ${graphWidth} graphHeigh: ${graphHeight}`);

  const [ activeEmotion, setActiveEmotion ] = useState('anger');
  const [ emotionList, setEmotionList ] = useState(['anger', 'tired'])
  return (
    <Box sx={{ bgcolor: 'background.paper' }}>
      <Typography variant='h5'>Graph</Typography>
      <ComposedChart 
        width={graphWidth} 
        height={graphHeight} 
        data={fakeGraphData} 
        margin={{
            top: 5,
            right: 30,
            left: 0,
            bottom: 5,
          }}
      >
        {emotionList.map((emotion) => (
          emotion === activeEmotion ? 
          <Area 
            type='monotone' 
            dataKey={emotions[emotion].value}
            dot={null} 
            fill={emotions[emotion].color} 
            stroke={emotions[emotion].color} 
            strokeWidth={2} strokeDasharray="5 5"
          />
          :
          <Line 
            type='monotone' 
            dataKey={emotions[emotion].value}
            dot={null} 
            stroke={emotions[emotion].color} 
            strokeWidth={2} strokeDasharray="5 5"
          />
          
        ))}
        <CartesianGrid stroke='#000' strokeDasharray="1 20"/>
        <XAxis dataKey='name' />
        <YAxis />
      </ComposedChart>
    </Box>
  )
}

export default BasicGraph
