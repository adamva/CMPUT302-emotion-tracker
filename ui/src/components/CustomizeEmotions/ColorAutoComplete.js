import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircleIcon from '@mui/icons-material/Circle';

import { colorSwatch } from './consts';

const ColorAutoComplete = ({ onChange, emotionValue }) => {
  return (
    <Autocomplete
        id={`${emotionValue}-color-select`}
        options={colorSwatch}
        autoHighlight
        onChange={(event, newValue) => {
            newValue && onChange(emotionValue, { color: newValue.colorData[500] });
        }}
        getOptionLabel={(option) => option.label}
        renderOption={(props, option) => (
        <Box component="li" {...props}>
            <CircleIcon htmlColor={option.colorData[500]}/>
            {option.label}
        </Box>
        )}
        renderInput={(params) => (
        <TextField
            {...params}
            label="Choose a color"
            inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
            }}
        />
        )}
    />
    )
}

export default ColorAutoComplete
