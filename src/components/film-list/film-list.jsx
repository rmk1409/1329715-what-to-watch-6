import {FilmCard} from "../film-card/film-card";
import React, {useState} from "react";
import {filmsValidation} from "../../validation";
import {connect} from "react-redux";

const FilmList = (props) => {
  const {films} = props;
  const [, setActiveFilmId] = useState();

  return <div className="catalog__movies-list">
    {films.map((film) => <FilmCard key={film.id} film={film} setActiveFilmId = {setActiveFilmId}/>)}
  </div>;
};

const mapStateToProps = (state) => ({films: state.films});
const ConnectedFilmList = connect(mapStateToProps, null)(FilmList);

FilmList.propTypes = {
  ...filmsValidation,
};

export {FilmList, ConnectedFilmList};
