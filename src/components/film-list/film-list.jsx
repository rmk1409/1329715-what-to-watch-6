import {FilmCard} from "../film-card/film-card";
import React, {useState} from "react";
import {filmsValidation} from "../../validation";

const FilmList = (props) => {
  const {films} = props;
  const [, setActiveFilmId] = useState();

  return <div className="catalog__movies-list">
    {films.map((film) => <FilmCard key={film.id} film={film} setActiveFilmId = {setActiveFilmId}/>)}
  </div>;
};

FilmList.propTypes = {
  ...filmsValidation,
};

export {FilmList};
