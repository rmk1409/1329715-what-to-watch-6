import {MovieCard} from "../movie-card/movie-card";
import React, {useState} from "react";
import {filmsValidation} from "../../validation";

const MovieList = (props) => {
  const {films} = props;
  const [, setActiveFilmId] = useState(undefined);

  return <div className="catalog__movies-list">
    {films.map((film) => <MovieCard key={film.id} film={film} onCover = {setActiveFilmId}/>)}
  </div>;
};

MovieList.propTypes = {
  ...filmsValidation,
};

export {MovieList};
