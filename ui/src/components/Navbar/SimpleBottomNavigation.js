import React, { useEffect, useState, useRef } from 'react';
import { Link as ReactRouterDomLink, useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import TimelineIcon from '@mui/icons-material/Timeline';
import PaletteIcon from '@mui/icons-material/Palette';

/*
This code is modified from an example of using MUI's bottomnavigation component, retrieved on 2023-03-31 from mui.com
Example code here
https://mui.com/material-ui/react-bottom-navigation/
*/

export default function SimpleBottomNavigation() {
  const location = useLocation();
  const [value, setValue] = useState(1);
  const ref = useRef(null);

  useEffect(() => {
    ref.current.ownerDocument.body.scrollTop = 0;
  }, [value]);

  useEffect(() => {
    console.debug('got new location ' + location.pathname)
    let newValue = 0;
    if (location.pathname === '/calendar') {
      newValue = 0;
    } else if (location.pathname === '/') {
      newValue = 1;
    } else if (location.pathname === '/graph') {
      newValue = 2;
    } else if (location.pathname === '/customize') {
      newValue = 3;
    }
    setValue(newValue);
  }, [location.pathname])
  
  return (
    <Box sx={{ pb: 7, width: '100%' }} ref={ref}>
      <CssBaseline />
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 1 }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction LinkComponent={ReactRouterDomLink} to="/calendar" label="Calendar" icon={<CalendarMonthIcon />} />
          <BottomNavigationAction LinkComponent={ReactRouterDomLink} to="/" label="Tips" icon={<QuestionAnswerIcon />} />
          <BottomNavigationAction LinkComponent={ReactRouterDomLink} to="/graph" label="Graph" icon={<TimelineIcon />} />
          <BottomNavigationAction LinkComponent={ReactRouterDomLink} to="/customize" label="Customize" icon={<PaletteIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
