import React from 'react';
import Card from '../Card/Card';
import './Movies.css';

const Movies = ({movies, showSingleMovie}) => {
  const movieBox = movies.map(movie => {
    return (
      <Card
        poster={movie.poster_path}
        title={movie.title}
        releaseDate={movie.release_date}
        id={movie.id}
        key={movie.id}
        rating={movie.average_rating}
        showSingleMovie={showSingleMovie}
      />
    );
  });

  return (
    <section className='movies-container'>
      {movieBox}
    </section>
  );
};

export default Movies;
