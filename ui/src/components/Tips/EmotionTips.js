import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function EmotionTips() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ bgcolor: 'background.paper' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
      >
        <Tab label="Anger" />
        <Tab label="Anxiety" />
        <Tab label="Overwhelmed" />
        <Tab label="Tired" />
        <Tab label="Frustration" />
        <Tab label="Bored" />
      </Tabs>
    </Box>
  );
}
