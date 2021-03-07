import React, {useMemo} from "react";
import {connect} from "react-redux";
import {filmValidation} from "../../validation";
import * as PropTypes from "prop-types";
import {changeGenre, getFilmsByCurrentGenre, setShownFilmQuantity} from "../../store/action";
import {Genre} from "../../const";
import {getAllFilms, getChosenGenre} from "../../store/data/selector";

const GenreList = ({allFilms, chosenGenre, onClickGenre}) => {
  const uniqueGenres = useMemo(() => Array.from(new Set(allFilms.map((film) => film.genre))), [allFilms]);
  return <>
    <ul className="catalog__genres-list">
      <li
        key={Genre.ALL} className={`catalog__genres-item ${chosenGenre === Genre.ALL ? Genre.ACTIVE_GENRE_CLASS : ``}`}>
        <a href="#" className="catalog__genres-link" onClick={onClickGenre}>All genres</a>
      </li>
      {uniqueGenres.map((currentUniqueGenre) =>
        <li
          key={currentUniqueGenre}
          className={`catalog__genres-item ${chosenGenre === currentUniqueGenre ? Genre.ACTIVE_GENRE_CLASS : ``}`}>
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
  allFilms: getAllFilms(state),
  chosenGenre: getChosenGenre(state),
});
const mapDispatchToProps = (dispatch) => ({
  onClickGenre(evt) {
    evt.preventDefault();
    const newChosenGenre = evt.target.textContent;
    dispatch(changeGenre(newChosenGenre));
    dispatch(getFilmsByCurrentGenre());
    dispatch(setShownFilmQuantity());
  },
});
const ConnectedGenreList = connect(mapStateToProps, mapDispatchToProps)(GenreList);

export {GenreList, ConnectedGenreList};
