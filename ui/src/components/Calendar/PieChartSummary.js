import React, { useContext } from 'react';

import { useNavigate } from 'react-router-dom';

import { PieChart, Pie, Cell } from 'recharts';

import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Typography, Toolbar, AppBar, Button } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

import EmotionThemeContext from '../../context/EmotionThemeContext';
import { fakeGraphData } from './fakeGraphData';

const COLORS = ['#f44336', '#ffeb3b', '#2196f3'];

const RADIAN = Math.PI / 180;

const PieChartSummary = () => {
    const navigate = useNavigate();
    const { storageEmotions } = useContext(EmotionThemeContext);

    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
        
        console.log('got index ' + index);
        let emoji;
        if (index === 0) {
            emoji = storageEmotions['anger'].icon;
        } else if (index === 1) {
            emoji = storageEmotions['anxiety'].icon;
        }else if (index === 2) {
            emoji = storageEmotions['tired'].icon;
        }
        return (
          <text x={x} y={y} fill="black" fontSize={20} textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${emoji} ${(percent * 100).toFixed(0)}%`}
          </text>
        );
      };
    
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
            <Button 
            variant='contained' 
            onClick={() => navigate('/calendar')}
            startIcon={<NavigateBeforeIcon />}
            >
            </Button>
            <Typography variant="h6" component="div">
                Summary
            </Typography>
            </Toolbar>
        </AppBar>
        <Paper sx={{ m: 2, p: 2 }}>
            <PieChart 
                width={300} 
                height={300}
            >
                <Pie data={fakeGraphData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={150}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {fakeGraphData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
        </Paper>
        </Box>
    );
}

export default PieChartSummary;
