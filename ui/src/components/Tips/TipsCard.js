import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import { fakeEmotionInfo } from './fakeEmotionInfo';

/*
This code is modified from an example of using cards in MUI's card component, retrieved on 2023-03-31 from mui.com
Example code here
https://mui.com/material-ui/react-card/#media
*/

export default function TipsCard({ emotion }) {
    const emotionValue = emotion.value;
  return (
    <Card sx={{ maxWidth: 345 }}>
        {fakeEmotionInfo[emotionValue].imageSrc !== '' && 
            <CardMedia
                component="img"
                height="512"
                sx={{ objectFit: 'contain' }}
                image={fakeEmotionInfo[emotionValue].imageSrc}
                alt={fakeEmotionInfo[emotionValue].imageAlt}
            />
        }
      <CardHeader
        avatar={
            <Avatar sx={{ bgcolor: emotion.color }} aria-label="doctor-r">
                {emotion.label.charAt(0)}
            </Avatar>
        }
        title={emotion.label + "? Heres help."}
        subheader="September 14, 2016"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" align='justify' style={{whiteSpace: 'pre-line'}}>
            {fakeEmotionInfo[emotionValue].content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
