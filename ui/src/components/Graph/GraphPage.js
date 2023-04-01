import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import BasicGraph from './BasicGraph';

export default function GraphPage() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Button variant='contained' sx={{ backgroundColor: 'whitesmoke', color: 'blue'}} startIcon={<NavigateBeforeIcon />}>Mar 1</Button>
          <Typography variant="h6" component="div">
            March 2
          </Typography>
          <Button variant='contained' sx={{ backgroundColor: 'whitesmoke', color: 'blue'}} endIcon={<NavigateNextIcon />}>Mar 3</Button>
        </Toolbar>
      </AppBar>
      <BasicGraph />
    </Box>
  );
}
