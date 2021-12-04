import React from 'react';
import Card from './Card';
import './Movies.css';

const Movies = ({movies}) => {
  const movieBox = movies.map(movie => {
    return (
      <Card
        poster={movie.poster_path}
        title={movie.title}
        releaseDate={movie.release_date}
        id={movie.id}
        key={movie.id}
        rating={movie.average_rating}
      />
    )
  })

  return (
    <section className='movies-container'>
      {movieBox}
    </section>
  )
}

export default Movies;
