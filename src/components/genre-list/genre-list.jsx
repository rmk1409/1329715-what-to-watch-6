import React from "react";
import {connect} from "react-redux";
import {filmValidation} from "../../validation";
import * as PropTypes from "prop-types";
import {ActionCreator} from "../../store/action";
import {Genre} from "../../const";

const GenreList = ({allFilms, chosenGenre, onClickGenre}) => {
  const uniqueGenres = Array.from(new Set(allFilms.map((film) => film.genre)));
  const activeGenreClass = `catalog__genres-item--active`;
  return <>
    <ul className="catalog__genres-list">
      <li className={`catalog__genres-item ${chosenGenre === Genre.all ? activeGenreClass : ``}`}>
        <a href="#" className="catalog__genres-link" onClick={onClickGenre}>All genres</a>
      </li>
      {uniqueGenres.map((currentUniqueGenre) =>
        <li
          key={currentUniqueGenre}
          className={`catalog__genres-item ${chosenGenre === currentUniqueGenre ? activeGenreClass : ``}`}>
          <a href="#" className="catalog__genres-link" onClick={onClickGenre}>{currentUniqueGenre}</a>
        </li>)}
    </ul>
  </>;
};

GenreList.propTypes = {
  allFilms: PropTypes.arrayOf(filmValidation.film).isRequired,
  onClickGenre: PropTypes.func.isRequired,
  chosenGenre: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  allFilms: state.allFilms,
  chosenGenre: state.chosenGenre,
});
const mapDispatchToProps = (dispatch) => ({
  onClickGenre(evt) {
    evt.preventDefault();
    const newChosenGenre = evt.target.textContent;
    dispatch(ActionCreator.changeGenre(newChosenGenre));
    dispatch(ActionCreator.getFilmsByCurrentGenre());
    dispatch(ActionCreator.setShownFilmQuantity());
  },
});
const ConnectedGenreList = connect(mapStateToProps, mapDispatchToProps)(GenreList);

export {GenreList, ConnectedGenreList};
