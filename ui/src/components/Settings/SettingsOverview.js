import React from 'react';

import { useNavigate } from 'react-router-dom';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Typography, Toolbar, AppBar, Button } from '@mui/material';

const SettingsOverview = () => {
    const navigate = useNavigate();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
            <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Typography variant="h6" component="div">
                Settings
            </Typography>
            </Toolbar>
        </AppBar>
        <Paper sx={{ m: 2, p: 2 }}>
            <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={12}><Typography variant='h5' color='primary'>Accessibility</Typography></Grid>
                <Grid item xs={12}><Button variant='contained' fullWidth>Language</Button></Grid>
                <Grid item xs={12}><Button variant='contained' fullWidth>Voice Mode</Button></Grid>
            </Grid>
        </Paper>
        <Paper sx={{ m: 2, p: 2 }}>
            <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={12}><Typography variant='h5' color='primary'>Customize</Typography></Grid>
                <Grid item xs={12}><Button variant='contained' fullWidth onClick={() => navigate('/settings/customize')}>Emotion Color Swatch</Button></Grid>
            </Grid>
        </Paper>
        </Box>
    );
}

export default SettingsOverview;
