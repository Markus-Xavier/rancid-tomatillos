import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

const Card = ({poster, title, releaseDate, id, rating, showSingleMovie}) => {
  return (
    <Link to={`${id}`} className='movie'>
      <img className='all-movie-posters' src={poster} alt='movie poster'/>
      <p className='title'>{title}</p>
      <p className='release'>Release Date: {releaseDate}</p>
      <p className='rating'>User Rating: {rating.toPrecision(2)}/10</p>
    </Link>
  );
};

export default Card;
