import React from 'react';
import './Card.css';

const Card = ({poster, title, releaseDate, id, rating}) => {
  return (
    <div>
      <img src={poster}>
      <p>{title}</p>
      <p>{releaseDate}</p>
      <p>{rating}</p>
    </div>
  )
}

export default Card;
