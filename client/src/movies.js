import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from './logo.svg';


class movie_details extends Component {
  constructor(props){
        super(props);
        this.state = {
        movies: [] }
    }

    componentDidMount() {
      fetch('/api/movies')
        .then(res => res.json())
        .then(json => {
          const chartData1 = [];
          for(var i=json.movieList.length-1; i>=0 ; i--){
            if (json.movieList[i].movieId == this.props.match.params.movieId) {
          chartData1.push({
          title: json.movieList[i].title,
          releaseYear: json.movieList[i].releaseYear,
          average_rating: json.movieList[i].avgRating,
          movieId:json.movieList[i].movieId,
          mpaa:json.movieList[i].mpaa,
          genres:json.movieList[i].genres,
          plotSummary:json.movieList[i].plotSummary,
          linktoimdb:'http://www.imdb.com/title/tt'+json.movieList[i].imdbMovieId,
          })
        }
      }
          console.log(this.props.match.params.movieId);
          console.log(chartData1);
          this.setState({movies: chartData1});  /*this will cause an invoke of the render() function again */
        })
        .catch(function (error) {
          console.log(error);
        });
    }


  render() {
    return (
      <div>
        {this.state.movies.map(post =>
          <div key = {post.movieId}>
          <h1> Title:{post.title}</h1>
          <li> Year:{post.releaseYear}</li>
          <li> Rating:{post.average_rating}</li>
          <li> Mpaa:{post.mpaa}</li>
          <li> Genres:{post.genres}</li>
          <li> PlotSummary:{post.plotSummary}</li>
          <li>Link to IMDB:<a href={post.linktoimdb}>{post.linktoimdb}</a></li>
          </div>
        )}
        <p>
        <Link to={`/`}>Back to home</Link>
        </p>
        </div>
    );
  }
}

export default movie_details;
