import React from 'react';
import { Box } from '@material-ui/core';
import { Card } from '@material-ui/core';
import { CardActions } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { StyledCard } from './StyledCardFeed';
import { goToPost } from '../routes/Coordinator';
import { useHistory } from 'react-router-dom';
import onClickCard from '../pages/Feed'


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
  </Box>
);

const CardFeed = (props) => {
    const history = useHistory()
  return (
    <StyledCard sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.username}
        </Typography>
        <Typography variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2">
            {props.body}
        </Typography>
        <Typography variant="body3">
            Comentários: {props.commentCount}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={(props.onClick)} color = {'primary'} variant = {'contained'} size="small">Ver Comentários</Button>
      </CardActions>
    </StyledCard>
  );
}
export default CardFeed