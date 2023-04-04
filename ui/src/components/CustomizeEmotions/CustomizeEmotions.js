import React, { useContext } from 'react'

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Typography, Toolbar, AppBar } from '@mui/material';

import EmotionThemeContext from '../../context/EmotionThemeContext';
import ColorAutoComplete from './ColorAutoComplete';
// import { emotions } from '../consts';

const CustomizeEmotions = () => {
    const { updateEmotions, storageEmotions } = useContext(EmotionThemeContext);

    const handleUpdate = (emotion, value) => {
        console.log(`Changing storageEmotion ${emotion} with data...`);
        console.debug(value);
        let newEmotionData = {...storageEmotions[emotion], ...value};
        let newStorageEmotions = {...storageEmotions, [emotion]: newEmotionData};
        updateEmotions(newStorageEmotions);
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Typography variant="h6" component="div">
                Emotion Pallete
            </Typography>
            </Toolbar>
        </AppBar>
        <Paper sx={{ m: 2, p: 2 }}>
            <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={12}><Typography variant='h5' color='primary'>Emotion Color Swatch</Typography></Grid>
                <Grid item xs={12}><Typography variant='subtitle2'>Choose your emotion colors</Typography></Grid>
                {Object.keys(storageEmotions).map((emotion) => (
                    <React.Fragment key={storageEmotions[emotion].id}>
                    <Grid item xs={4}>
                        <Typography>{storageEmotions[emotion].label}</Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <ColorAutoComplete 
                            onChange={handleUpdate} 
                            emotionValue={storageEmotions[emotion].value} 
                            currentColorValue={storageEmotions[emotion].color}
                        />
                    </Grid>
                    </React.Fragment>
                ))}
            </Grid>
        </Paper>
        </Box>
    )
}

export default CustomizeEmotions
