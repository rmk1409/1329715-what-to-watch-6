import React from "react";
import {connect} from "react-redux";
import {filmsValidation} from "../../validation";

const GenreList = (props) => {
  const {films} = props;

  const uniqueGenres = Array.from(new Set(films.map((film) => film.genre)));
  return <>
    <ul className="catalog__genres-list">
      <li className="catalog__genres-item catalog__genres-item--active">
        <a href="#" className="catalog__genres-link">All genres</a>
      </li>
      {uniqueGenres.map((genre) =>
        <li key={genre} className="catalog__genres-item">
          <a href="#" className="catalog__genres-link">{genre}</a>
        </li>)}
    </ul>
  </>;
};

GenreList.propTypes = {
  ...filmsValidation
};

const mapStateToProps = (state) => ({films: state.films});
const ConnectedGenreList = connect(mapStateToProps, null)(GenreList);

export {GenreList, ConnectedGenreList};
