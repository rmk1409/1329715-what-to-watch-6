import {MovieCard} from "../movie-card/movie-card";
import React, {useState} from "react";
import {filmsValidation} from "../../validation";

const MovieList = (props) => {
  const {films} = props;
  const [, setActiveFilmId] = useState();

  return <div className="catalog__movies-list">
    {films.map((film) => <MovieCard key={film.id} film={film} setActiveFilmId = {setActiveFilmId}/>)}
  </div>;
};

MovieList.propTypes = {
  ...filmsValidation,
};

export {MovieList};
