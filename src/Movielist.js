import React, { Component } from "react";
import MovieCard from "./Card";
import Newmovie from "./component/index";
const MovieList = ({ movies = [], addNewMovie = props => {} }) => (
  <div className="movie-list">
    {movies.map(el => <MovieCard key={el.id} movie={el} />)}
    <div>
      <Newmovie
        class
        Name="new-movie-card"
        addNewMovie={newmovie => addNewMovie({ newmovie })}
      />
    </div>
  </div>
);

export default MovieList;
