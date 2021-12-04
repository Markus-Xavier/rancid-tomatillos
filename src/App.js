import React, { Component } from 'react';
import Movies from './Movies';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
    }
  };

  componentDidMount = () => {
    return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(response => response.json())
      .then(data => this.setState({movies: data.movies}))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <main className='App'>
        <h1>Rancid Tomatillos</h1>
        <Movies movies={this.state.movies} />
      </main>
    );
  };
};

export default App;
