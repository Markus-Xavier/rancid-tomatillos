import React from 'react';
import { useParams } from 'react-router-dom';
import SingleMovie from '../SingleMovie/SingleMovie';

const URLParams = () => {
  const id = useParams().id;
  return (
    <div>
      <SingleMovie id={id}/>
    </div>
  )
}

export default URLParams
