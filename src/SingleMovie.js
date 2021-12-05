import React, { Component } from 'react'
import './SingleMovie.css';
class SingleMovie extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movie: '',
    }
  }

  componentDidMount = () => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.id}`)
      .then(data => data.json())
      .then(data => this.setState({movie: data.movie}))
      .catch(error => console.log(error));
  }

  displayGenre = () => {
    if(this.state.movie.genres) {
      return this.state.movie.genres.map((genre, index) => {
        return <li key={index}>{genre}</li>
      })
    }
  }

  render() {
    const movie = this.state.movie;
    return (
      <section className='movie-display'>
        <div className='movie-backdrop'>
          <img src={movie.backdrop_path} alt={`${movie.title} Backdrop`}/>
        </div>

        <img className='movie-poster' src={movie.poster_path} alt={`${movie.title} Poster`}/>
        <div className='movie-info'>
          <h2>{movie.title}</h2>
          <p>{movie.release_date}</p>
          <p>{movie.runtime}</p>
          <p>{movie.overview}</p>
          <ul>GENRE: {this.displayGenre()}</ul>
        </div>
        <button onClick={this.props.returnHome}>Go Back</button>
      </section>
    )
  }
}

export default SingleMovie;