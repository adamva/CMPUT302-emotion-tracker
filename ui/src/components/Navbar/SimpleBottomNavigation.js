import React, { useEffect, useState, useRef } from 'react';
import { Link as ReactRouterDomLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import TimelineIcon from '@mui/icons-material/Timeline';

/*
This code is modified from an example of using MUI's bottomnavigation component, retrieved on 2023-03-31 from mui.com
Example code here
https://mui.com/material-ui/react-bottom-navigation/
*/

export default function SimpleBottomNavigation() {
  const [value, setValue] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    ref.current.ownerDocument.body.scrollTop = 0;
  }, [value]);

  return (
    <Box sx={{ pb: 7, width: '100%' }} ref={ref}>
      <CssBaseline />
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction LinkComponent={ReactRouterDomLink} to="/calendar" label="Calendar" icon={<CalendarMonthIcon />} />
          <BottomNavigationAction LinkComponent={ReactRouterDomLink} to="/" label="Tips" icon={<ChatBubbleIcon />} />
          <BottomNavigationAction LinkComponent={ReactRouterDomLink} to="/graph" label="Graph" icon={<TimelineIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
