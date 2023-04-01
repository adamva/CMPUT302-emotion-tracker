import * as React from 'react';
import dayjs from 'dayjs';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import BasicGraph from './BasicGraph';
import { useLocation } from 'react-router';

export default function GraphPage() {
  const { state } = useLocation();
  const currentDate = state ? dayjs(state.date) : dayjs();
  const beforeDate = currentDate.subtract(1, 'day');
  const nextDate = currentDate.add(1, 'day');
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Button variant='outlined' color='inherit' startIcon={<NavigateBeforeIcon />}>{beforeDate.format('MMM D')}</Button>
          <Typography variant="h6" component="div">
            {currentDate.format('MMMM D')}
          </Typography>
          <Button variant='outlined' color='inherit' endIcon={<NavigateNextIcon />}>{beforeDate.format('MMM D')}</Button>
        </Toolbar>
      </AppBar>
      <BasicGraph />
    </Box>
  );
}
