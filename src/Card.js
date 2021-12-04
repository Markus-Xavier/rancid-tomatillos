import React from 'react';
import './Card.css';

const Card = ({poster, title, releaseDate, id, rating}) => {
  return (
    <div>
      <img src={poster} alt='movie poster'/>
      <p>{title}</p>
      <p>Release Date: {releaseDate}</p>
      <p>User Rating: {rating.toPrecision(2)}/10</p>
    </div>
  );
};

export default Card;
