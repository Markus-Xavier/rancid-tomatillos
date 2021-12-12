import React, { Component } from 'react'

class MovieSearch extends Component {
  constructor(props) {
    super(props)
    this.state = {value: ''};
  }

  handleChange = async (event) => {
    await this.setState({value: event.target.value});
    this.props.searchMovies(this.state.value);
  }

  render() {
    return (
        <form>
          <input type='text' value={this.state.value} onChange={this.handleChange} placeholder='Search' />
        </form>
    )
  }
}

export default MovieSearch;