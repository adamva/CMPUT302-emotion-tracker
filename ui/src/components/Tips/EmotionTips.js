import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { emotions } from '../consts';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function EmotionTips() {
  const [value, setValue] = useState(0);
  const [activeEmotion, setActiveEmotion ] = useState(emotions['anger']);

  const handleChange = (event, newValue) => {
    console.debug('changing active tip index ' + newValue);
    let emotion = emotions[Object.keys(emotions)[newValue]];
    console.debug('changing active tip emotion...');
    console.debug(emotion);
    setActiveEmotion(emotion);
    setValue(newValue);
  };

  return (
    <Box sx={{ bgcolor: 'background.paper' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
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
      <TabPanel value={value} index={value}>
        Item {activeEmotion.label}
      </TabPanel>
    </Box>
  );
}
