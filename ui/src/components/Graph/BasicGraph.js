import React from 'react'
import Box from '@mui/material/Box';
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from 'recharts';
import { Typography } from '@mui/material';

import { emotions } from '../consts';
import { fakeGraphData } from './fakeGraphData';

const BasicGraph = () => {
  const graphWidth = window.innerWidth;
  const graphHeight = window.innerHeight / 1.5;
  console.debug(`graphWidth: ${graphWidth} graphHeigh: ${graphHeight}`);

  const activeEmotions = [ 'anger', 'tired' ];
  return (
    <Box>
      <Typography variant='h5'>Graph</Typography>
      <AreaChart 
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
        {activeEmotions.map((emotion, idx) => (
          <Area 
            type='monotone' 
            dataKey={emotions[emotion].value}
            dot={null} 
            fill={emotions[emotion].color} 
            stroke={emotions[emotion].color} 
            strokeWidth={2} strokeDasharray="5 5"
          />
        ))}
        <CartesianGrid stroke='#000' strokeDasharray="1 20"/>
        <XAxis dataKey='name' />
        <YAxis />
      </AreaChart>
    </Box>
  )
}

export default BasicGraph
