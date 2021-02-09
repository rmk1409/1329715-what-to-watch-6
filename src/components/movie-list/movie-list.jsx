import {MovieCard} from "../movie-card/movie-card";
import React, {useState} from "react";
import {filmMocksValidation} from "../../validation";

const MovieList = (props) => {
  const {filmMocks} = props;
  const [activeFilmId, setActiveFilmId] = useState(undefined);

  return <div className="catalog__movies-list">
    {filmMocks.map((film) => <MovieCard key={film.id} film={film} onCover = {setActiveFilmId}/>)}
  </div>;
};

MovieList.propTypes = {
  ...filmMocksValidation,
};

export {MovieList};
