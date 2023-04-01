import * as React from 'react';
import { Link as ReactRouterDomLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import { getRandomNumber } from '../../utils/Utils';

/*
This code is modified from an example of using cards in MUI's card component, retrieved on 2023-03-31 from mui.com
Example code here
https://mui.com/material-ui/react-card/#media
*/

export default function TipsCard({ emotion, content }) {
    console.debug('Rendering emotion TipsCard content:');
    console.debug(content);
    const learnMoreURL = `https://www.google.com/search?q=${emotion.label}`;
  return (
    <Card sx={{ maxWidth: 345 }}>
        {content.imageSrc !== '' && 
            <CardMedia
                component="img"
                height="512"
                sx={{ objectFit: 'contain' }}
                image={content.imageSrc}
                alt={content.imageAlt}
            />
        }
      <CardHeader
        avatar={
            <Avatar sx={{ bgcolor: emotion.color }} aria-label="doctor-r">
                {emotion.label.charAt(getRandomNumber(0, emotion.label.length - 1))}
            </Avatar>
        }
        title={emotion.label + "? Heres help."}
        subheader="September 14, 2016"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" align='justify' style={{whiteSpace: 'pre-line'}}>
            {content.content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button component={ReactRouterDomLink} to={learnMoreURL} size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
