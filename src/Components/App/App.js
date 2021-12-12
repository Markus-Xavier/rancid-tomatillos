import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Movies from '../Movies/Movies';
import SingleMovie from '../SingleMovie/SingleMovie';
import URLParams from '../URLParams/URLParams';
import MovieSearch from '../MovieSearch/MovieSearch';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      cachedMovies: [],
      singleMovie: false,
      error: '',
    }
  };

  componentDidMount = () => {
    return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(response => response.json())
      .then(data => {
        this.setState({movies: data.movies});
        this.setState({cachedMovies: data.movies});
      })
      .catch(error => this.setState({error: error}));
  };

  showSingleMovie = (id) => {
    console.log(this.state.movies);
    const filteredMovie = this.state.movies.filter(movie => movie.id === id);
    this.setState({movies: filteredMovie, singleMovie: true});
  }

  returnHome = () => {
    this.setState({singleMovie: false});
    this.componentDidMount();
  }

  searchMovies = (query) => {
    const filteredMovies = this.state.cachedMovies.filter(movie => movie.title.includes(query))
    this.setState({movies: filteredMovies});
  }

  render() {
    return (
      <main className='App'>
        <header>
          <h1>Rancid Tomatillos</h1>
          <MovieSearch searchMovies={this.searchMovies}/>
        </header>
        <Routes>
          <Route exact path='/' element={<Movies movies={this.state.movies}/>}/>
          <Route path='/:id' element={<URLParams/>}/>
        </Routes>
      </main>
    );
  };
};

export default App;
