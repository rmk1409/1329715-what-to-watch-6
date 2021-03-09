import {FilmCard} from "../film-card/film-card";
import React from "react";
import {useSelector} from "react-redux";
import {NameSpace} from "../../store/reducer";
import {filmValidation} from "../../validation";
import PropTypes from "prop-types";

const FilmList = ({films = useSelector((state) => state[NameSpace.DATA]).allFilms}) => {
  const {shownFilmQuantity} = useSelector((state) => state[NameSpace.DATA]);
  const filmsToShow = shownFilmQuantity ? films.slice(0, shownFilmQuantity) : films;
  return <div className="catalog__movies-list">
    {filmsToShow.map((film) => <FilmCard key={film.id} film={film}/>)}
  </div>;
};

FilmList.propTypes = {
  films: PropTypes.arrayOf(filmValidation.film),
};

export {FilmList};
