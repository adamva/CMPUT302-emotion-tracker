import React, { useContext } from 'react'

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

import EmotionThemeContext from '../../context/EmotionThemeContext';
import ColorAutoComplete from './ColorAutoComplete';
import { emotions } from '../consts';

const CustomizeEmotions = () => {
    const { resetEmotions, updateEmotions, storageEmotions } = useContext(EmotionThemeContext);

    const handleUpdate = (emotion, value) => {
        console.log(`Changing storageEmotion ${emotion} with data...`);
        console.debug(value);
        let newEmotionData = {...storageEmotions[emotion], ...value};
        let newStorageEmotions = {...storageEmotions, [emotion]: newEmotionData};
        updateEmotions(newStorageEmotions);
    }

    return (
        <Paper sx={{ m: 2, p: 2 }}>
            <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={12}><Typography variant='h5'>Emotion Color Swatch</Typography></Grid>
                {Object.keys(emotions).map((emotion) => (
                    <React.Fragment key={emotions[emotion].id}>
                    <Grid item xs={4}>
                        <Typography>{emotions[emotion].label}</Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <ColorAutoComplete onChange={handleUpdate} emotionValue={emotions[emotion].value}/>
                    </Grid>
                    </React.Fragment>
                ))}
            </Grid>
        </Paper>
    )
}

export default CustomizeEmotions
