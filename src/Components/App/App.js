import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Movies from '../Movies/Movies';
import SingleMovie from '../SingleMovie/SingleMovie';
import URLParams from '../URLParams/URLParams';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      singleMovie: false,
      error: '',
    }
  };

  componentDidMount = () => {
    return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(response => response.json())
      .then(data => this.setState({movies: data.movies}))
      .catch(error => this.setState({error: error}));
  };

  showSingleMovie = (id) => {
    const filteredMovie = this.state.movies.filter(movie => movie.id === id);
    this.setState({movies: filteredMovie, singleMovie: true});
  }

  returnHome = () => {
    this.setState({singleMovie: false});
    this.componentDidMount();
  }

  render() {
    return (
      <main className='App'>
        <h1>Rancid Tomatillos</h1>
        <Routes>
          <Route exact path='/' element={<Movies movies={this.state.movies}/>}/>
          <Route path='/:id' element={<URLParams component={<SingleMovie />}/>}/>
        </Routes>
      </main>
    );
  };
};

export default App;
