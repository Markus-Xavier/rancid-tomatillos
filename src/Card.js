import React from 'react';
import './Card.css';

const Card = ({poster, title, releaseDate, id, rating, showSingleMovie}) => {
  return (
    <div className='movie' onClick={() => showSingleMovie(id)}>
      <img className='all-movie-posters' src={poster} alt='movie poster'/>
      <p className='title'>{title}</p>
      <p className='release'>Release Date: {releaseDate}</p>
      <p className='rating'>User Rating: {rating.toPrecision(2)}/10</p>
    </div>
  );
};

export default Card;
