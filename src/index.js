import React from "react";
import { render } from "react-dom";
import MovieList from "./APP.css";
import MovieApp from "./APP";

const App = () => (
  <div>
    <MovieApp />
  </div>
);

render(<App />, document.getElementById("root"));
