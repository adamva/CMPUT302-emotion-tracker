import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';

import { emotions } from '../consts';

/*
This code is modified from an example of using multi-select in MUI's select component, retrieved on 2023-03-31 from mui.com
Example code here
https://mui.com/material-ui/react-select/#chip
*/

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
    'Jerry Bob',
    'Milly Kyle'
]
const emotionList = Array.from(Object.keys(emotions), (emotion) => emotions[emotion].label);

function getStyles(name, emotionList, theme) {
  return {
    fontWeight:
      emotionList.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelectChip({ activeEmotionList, setActiveEmotionList }) {
  const theme = useTheme();

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setActiveEmotionList(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-chip-label">Emotions To Show</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={activeEmotionList}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={emotions[value].icon + ' ' + value} sx={{ backgroundColor: emotions[value].color, color: 'white' }}/>
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {Object.keys(emotions).map((emotion) => (
            <MenuItem
              key={emotions[emotion].id}
              value={emotions[emotion].value}
              style={getStyles(emotions[emotion].label, emotionList, theme)}
            >
              {emotions[emotion].label}
            </MenuItem>
          ))}
        </Select>
        {activeEmotionList.length <= 0 ? <FormHelperText>Select the emotions to graph</FormHelperText> : null}
      </FormControl>
    </div>
  );
}
