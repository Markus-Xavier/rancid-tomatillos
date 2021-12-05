import React from 'react';
import './Card.css';

const Card = ({poster, title, releaseDate, id, rating, showSingleMovie}) => {
  return (
    <div onClick={() => showSingleMovie(id)}>
      <img className='all-movie-posters' src={poster} alt='movie poster'/>
      <p>{title}</p>
      <p>Release Date: {releaseDate}</p>
      <p>User Rating: {rating.toPrecision(2)}/10</p>
    </div>
  );
};

export default Card;
