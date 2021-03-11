import React, {useMemo} from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeGenre, setShownFilmQuantity} from "../../store/action";
import {Genre, MAX_GENRE_QUANTITY} from "../../const";
import {NameSpace} from "../../store/reducer";

const GenreList = () => {
  const {allFilms, chosenGenre} = useSelector((state) => state[NameSpace.DATA]);
  const uniqueGenres = useMemo(
      () => Array.from(new Set(allFilms.map((film) => film.genre))),
      [allFilms],
  );

  const dispatch = useDispatch();
  const onClickGenre = (evt) => {
    evt.preventDefault();
    const newChosenGenre = evt.target.textContent;
    dispatch(changeGenre(newChosenGenre));
    dispatch(setShownFilmQuantity());
  };

  return <ul className="catalog__genres-list">
    <li
      key={Genre.ALL} className={`catalog__genres-item ${chosenGenre === Genre.ALL ? Genre.ACTIVE_GENRE_CLASS : ``}`}>
      <a href="#" className="catalog__genres-link" onClick={onClickGenre}>All genres</a>
    </li>
    {uniqueGenres.map((currentUniqueGenre, index) => index < MAX_GENRE_QUANTITY ?
      <li
        key={currentUniqueGenre}
        className={`catalog__genres-item ${chosenGenre === currentUniqueGenre ? Genre.ACTIVE_GENRE_CLASS : ``}`}>
        <a href="#" className="catalog__genres-link" onClick={onClickGenre}>{currentUniqueGenre}</a>
      </li> : ``)}
  </ul>;
};

export {GenreList};
