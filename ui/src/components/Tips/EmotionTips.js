import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import { emotions } from '../consts';

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
        {Object.keys(emotions).map((emotion) => (
          <Tab key={emotions[emotion].id} label={emotions[emotion].label}>
          </Tab>
        ))}
      </Tabs>
    </Box>
  );
}
