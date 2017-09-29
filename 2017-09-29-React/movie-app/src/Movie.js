import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css'

class Movie extends Component {

  static propTypes = {
    title: PropTypes.isRequired,
    poster: PropTypes.isRequired
  }

  render(){
    return(
      <div>
        <MoviePoster poster={this.props.poster} />
        <h1>{this.props.title}</h1>
      </div>
      )
  }
}

class MoviePoster extends Component {

  static propTypes = {
    poster: propTypes.string.isRequired
  }
  
  render () {
    console.log(this.props.poster);
    return (
      <img src={this.props.poster} alt="movie posters" />
    )
  }
}

export default Movie