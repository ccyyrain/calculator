import React, { Component } from 'react';
import { Link } from 'react-router-dom';

var amazingInlineJsStyle = {
  border: '1px solid white',
  padding: '15px',
  backgroundColor: '#81C0C0',
}

class MovieList extends Component {
  constructor() {
    super();
    this.state = {
    movies: [] }
  }

  componentDidMount() {
    fetch('/api/movies')
      .then(res => res.json())
      .then(json => {
        const chartData = [];
        for(var i=json.movieList.length-1; i>=0 ; i--){
        chartData.push({
        title: json.movieList[i].title,
        releaseYear: json.movieList[i].releaseYear,
        average_rating: json.movieList[i].avgRating,
        movieId:json.movieList[i].movieId,
    });
  }
        this.setState({movies: chartData});  /*this will cause an invoke of the render() function again */
        console.log(this.state.movies);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  /* Every time we change the value of a state variable, the render() function is called. That's why we need to make sure in the render() of
  the Root class below that we received the prop 'messageFromServer' (see the if-else condition in the Root class)*/
  render() {
    return (
      <Root messageFromServer={this.state.movies} />
    );
  }

}



class Root extends Component {
  render() {
    const movielist = this.props.messageFromServer;
    console.log(movielist);
    if (this.props.messageFromServer) {
      return (
          <div className="Root" >
              {this.props.messageFromServer.map(post =>
                <div key = {post.movieId} style={amazingInlineJsStyle}>
                <h1><b> Title:{post.title}</b></h1>
                <li> Year:{post.releaseYear}</li>
                <li> Rating:{post.average_rating}</li>
                <Link to={'/movies/'+post.movieId}>See more details</Link>
                </div>
              )}

          </div>);
    } else {
      return null;
    }
  }
}

export default MovieList;
