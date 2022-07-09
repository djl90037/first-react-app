import React from 'react';
import { json, checkStatus } from './utils';

class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null, // initial state
    }
  }

  componentDidMount() {
    fetch(`https://www.omdbapi.com/?i=${this.props.match.params.id}&apikey=483ff7ba`)
      .then(checkStatus)
      .then(json)
      .then((data) => {
        if (data.Response === 'False') {
          throw new Error(data.Error);
        }

        if (data.Response === 'True') {
          console.log(data);
          this.setState({ movie: data, error: '' });
        }
      })
      .catch((error) => {
        this.setState({ error: error.message });
        console.log(error);
      })
  }

  render() {
    if (!this.state.movie) {
      return null; // valid object?
    }

    const {
      Title,
      Year,
      Plot,
      Director,
      imdbRating,
      Poster,
    } = this.state.movie;

    return (
      <div className="container">
        <div className="row pt-5">
          <div className="col-6">
            <h1>{Title}</h1>
            <ul className="list-unstyle">
              <li>
                <p>Year: {Year}</p>
              </li>
              <li>
                <p>Plot: {Plot}</p>
              </li>
              <li>
                <p>imdbRating: {imdbRating}</p>
              </li>
            </ul>
          </div>
          <div className="col-6">
            <img src={Poster} className="img-fluid" />
          </div>
        </div>
      </div>
    )
  }
}

export default Movie;