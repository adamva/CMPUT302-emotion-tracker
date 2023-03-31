import React, { useState } from 'react';
import { Link as ReactRouterDomLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function SimpleBottomNavigation() {
  const [value, setValue] = useState(0);

  return (
    <Box sx={{ width: '100%' }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction LinkComponent={ReactRouterDomLink} to="/calendar" label="Calendar" icon={<RestoreIcon />} />
        <BottomNavigationAction LinkComponent={ReactRouterDomLink} to="/" label="Tips" icon={<FavoriteIcon />} />
        <BottomNavigationAction LinkComponent={ReactRouterDomLink} to="/graph" label="Graph" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </Box>
  );
}
