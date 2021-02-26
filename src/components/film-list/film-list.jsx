import {FilmCard} from "../film-card/film-card";
import React, {useState} from "react";
import {filmsValidation} from "../../validation";
import {connect} from "react-redux";
import * as PropTypes from "prop-types";

const FilmList = ({films, shownFilmQuantity}) => {
  const [, setActiveFilmId] = useState();

  const filmsToShow = shownFilmQuantity ? films.slice(0, shownFilmQuantity) : films;
  return <div className="catalog__movies-list">
    {filmsToShow.map((film) => <FilmCard key={film.id} film={film} setActiveFilmId={setActiveFilmId}/>)}
  </div>;
};

const mapStateToProps = (state) => ({
  films: state.films,
  shownFilmQuantity: state.shownFilmQuantity,
});

const ConnectedFilmList = connect(mapStateToProps, null)(FilmList);

FilmList.propTypes = {
  ...filmsValidation,
  shownFilmQuantity: PropTypes.number,
};

export {FilmList, ConnectedFilmList};
