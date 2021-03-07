import {ConnectedFilmCard} from "../film-card/film-card";
import React from "react";
import {filmsValidation} from "../../validation";
import {connect} from "react-redux";
import * as PropTypes from "prop-types";

const FilmList = ({films, shownFilmQuantity}) => {
  const filmsToShow = shownFilmQuantity ? films.slice(0, shownFilmQuantity) : films;
  return <div className="catalog__movies-list">
    {filmsToShow.map((film) => <ConnectedFilmCard key={film.id} film={film}/>)}
  </div>;
};

FilmList.propTypes = {
  ...filmsValidation,
  shownFilmQuantity: PropTypes.number,
};

const mapStateToProps = (state) => ({
  films: state.allFilms,
  shownFilmQuantity: state.shownFilmQuantity,
});
const ConnectedFilmList = connect(mapStateToProps, null)(FilmList);

export {FilmList, ConnectedFilmList};
