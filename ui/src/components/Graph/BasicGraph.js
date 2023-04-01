import React from 'react'
import Box from '@mui/material/Box';
import { CartesianGrid, Legend, Line, LineChart, XAxis, YAxis } from 'recharts';
import { Typography } from '@mui/material';

import { emotions } from '../consts';
import { fakeGraphData } from './fakeGraphData';

const BasicGraph = () => {
  const graphWidth = window.innerWidth - 20;
  const graphHeight = window.innerHeight / 2;
  console.log(graphWidth)
  console.log(graphHeight)
  return (
    <Box>
      <Typography variant='h5'>Graph</Typography>
      <LineChart width={graphWidth} height={graphHeight} data={fakeGraphData}>
        <Line type='monotone' dataKey={emotions.anger.value} stroke={emotions.anger.color} strokeWidth={2}/>
        <Line type='monotone' dataKey={emotions.overwhelmed.value} stroke={emotions.overwhelmed.color} strokeWidth={2}/>
        <Line type='monotone' dataKey={emotions.tired.value} stroke={emotions.tired.color} strokeWidth={2}/>
        <CartesianGrid stroke='#ccc'/>
        <XAxis dataKey='name' />
        <YAxis />
        <Legend />
      </LineChart>
    </Box>
  )
}

export default BasicGraph
