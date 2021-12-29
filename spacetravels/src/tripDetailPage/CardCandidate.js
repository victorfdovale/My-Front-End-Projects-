import { Button } from '@material-ui/core';
import React from 'react'

function CardCandidate(props) {
    console.log(props.id)
  return (
    <div>
        {props.applicationText}
        {props.profession}
        {props.age}
        {props.name}
        {props.country}
        <Button>Aprovar</Button>
      
    </div>
  );
}

export default CardCandidate;
