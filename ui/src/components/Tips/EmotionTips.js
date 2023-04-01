import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { emotions } from '../consts';
import { fakeEmotionInfo } from './fakeEmotionInfo';
import TipsCard from './TipsCard';
import { getRandomNumber } from '../../utils/Utils';

/*
This code is modified from an example of using tabs in MUI's tab component, retrieved on 2023-03-31 from mui.com
Example code here
https://mui.com/material-ui/react-tabs/#basic-tabs
*/

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

  const renderTipsCards = () => {
    // xxx <TipsCard emotion={activeEmotion} content={fakeEmotionInfo[activeEmotion.value][1]}></TipsCard>
    let tipsCardsRender = [];
    let fakeEmotionInfoList = fakeEmotionInfo[activeEmotion.value];
    let numTipsToRender = getRandomNumber(1, fakeEmotionInfoList.length);
    for (let idx = 0; idx < numTipsToRender; idx++) {
      const tipIndex = getRandomNumber(0, numTipsToRender - 1);
      tipsCardsRender.push(
        <TipsCard key={idx * 2} emotion={activeEmotion} content={fakeEmotionInfo[activeEmotion.value][tipIndex]}></TipsCard>
      );
      tipsCardsRender.push(<br key={idx * 2 + 1} />)
    }
    return(<>{tipsCardsRender}</>);
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
        {renderTipsCards()}
      </TabPanel>
    </Box>
  );
}
