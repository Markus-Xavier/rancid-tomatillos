import React, { Component } from 'react';
import Movies from './Movies';
import SingleMovie from './SingleMovie';
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
    console.log(id);
    const filteredMovie = this.state.movies.filter(movie => movie.id === id);
    this.setState({movies: filteredMovie, singleMovie: true});
  }

  render() {
    return (
      <main className='App'>
        <h1>Rancid Tomatillos</h1>
        {this.state.error && <h2>{this.state.error}</h2>}
        {this.state.singleMovie && <SingleMovie movie={this.state.movies}/>}
        <Movies movies={this.state.movies} showSingleMovie={this.showSingleMovie}/>
      </main>
    );
  };
};

export default App;
