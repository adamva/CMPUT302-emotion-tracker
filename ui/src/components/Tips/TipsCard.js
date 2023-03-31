import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';

/*
This code is modified from an example of using cards in MUI's card component, retrieved on 2023-03-31 from mui.com
Example code here
https://mui.com/material-ui/react-card/#media
*/

export default function TipsCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="512"
        sx={{ objectFit: 'contain' }}
        image="https://images.unsplash.com/photo-1638274749450-30c893afe3d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2994&q=80" // Sood. S. 2021. A woman covering her face with hands photo. Retrieved from https://unsplash.com/photos/qL0t5zNGFVQ
        alt="A woman covering her face with hands"
      />
      <CardHeader
        avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="doctor-r">
                R
            </Avatar>
        }
        title="Angry? Heres help."
        subheader="September 14, 2016"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
