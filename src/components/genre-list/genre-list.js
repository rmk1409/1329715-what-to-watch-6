import React from "react";
import {connect} from "react-redux";
import {filmsValidation} from "../../validation";
import * as PropTypes from "prop-types";
import {ActionCreator} from "../../store/action";
import {Genre} from "../../const";

const GenreList = (props) => {
  const {films, genre: currentStateGenre, onClickGenre} = props;
  const uniqueGenres = Array.from(new Set(films.map((film) => film.genre)));
  const activeGenreClass = `catalog__genres-item--active`;
  return <>
    <ul className="catalog__genres-list">
      <li className={`catalog__genres-item ${currentStateGenre === Genre.ALL ? activeGenreClass : ``}`}>
        <a href="#" className="catalog__genres-link" onClick={onClickGenre}>All genres</a>
      </li>
      {uniqueGenres.map((currentUniqueGenre) =>
        <li key={currentUniqueGenre}
            className={`catalog__genres-item ${currentStateGenre === currentUniqueGenre ? activeGenreClass : ``}`}>
          <a href="#" className="catalog__genres-link" onClick={onClickGenre}>{currentUniqueGenre}</a>
        </li>)}
    </ul>
  </>;
};

GenreList.propTypes = {
  ...filmsValidation,
  onClickGenre: PropTypes.func.isRequired,
  genre: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({films: state.films, genre: state.genre});
const mapDispatchToProps = (dispatch) => ({
  onClickGenre(evt) {
    evt.preventDefault();
    const newGenre = evt.target.textContent;
    dispatch(ActionCreator.changeGenre(newGenre));
    dispatch(ActionCreator.getFilmsByCurrentGenre(newGenre));
  },
});
const ConnectedGenreList = connect(mapStateToProps, mapDispatchToProps)(GenreList);

export {GenreList, ConnectedGenreList};
