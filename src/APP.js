import React from "react";
import ReactDOM from "react-dom";
import NameFilter from "./filter";
import RatingFilter from "./ratingG";
import MovieList from "./Movielist";
import movies from "./data";
import Rating from "./rating";
import Newmovie from "./component/index";

class MovieApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Rate: 0,
      nameFilm: "",
      moviesToDisplay: movies
    };
  }

  addNewMovie(newMovie) {
    this.setState({
      moviesToDisplay: this.state.moviesToDisplay.concat(newMovie.newmovie)
    });
    console.log(this.state.moviesToDisplay);
    console.log(newMovie.newmovie);
  }

  moviesFiltered() {
    return this.state.moviesToDisplay.filter(
      el =>
        el.rating >= this.state.Rate &&
        el.title
          .toLowerCase()
          .includes(this.state.nameFilm.toLowerCase().trim())
    );
  }

  render() {
    return (
      <div className="movie-app">
        <header className="movie-app-header">
          <NameFilter
            value={this.state.nameFilm}
            onClick={newNameFilm => {
              this.setState({
                nameFilm: newNameFilm
              });
            }}
          />
          <div className="Rate-zone">
            <RatingFilter
              onChangeRating={newRating => {
                this.setState({
                  Rate: newRating
                });
              }}
            />
            <Rating count={this.state.Rate} />{" "}
          </div>
        </header>
        <main className="movie-app-main">
          <MovieList
            movies={this.moviesFiltered()}
            addNewMovie={newMovie => this.addNewMovie(newMovie)}
          />
        </main>
      </div>
    );
  }
}

export default MovieApp;
