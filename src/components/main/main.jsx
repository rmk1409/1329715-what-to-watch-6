import React from 'react';
import {FilmList} from "../film-list/film-list";
import {GenreList} from "../genre-list/genre-list";
import {ShowMore} from "../show-more/show-more";
import {useSelector} from "react-redux";
import {UserBlock} from "../user-block/user-block";
import {NameSpace} from "../../store/reducer";
import {AddToFavoriteButton} from "../add-to-favorite-button/add-to-favorite-button";
import {PlayButton} from "../play-button/play-button";
import {createSelector} from 'reselect';
import {Genre} from "../../const";

const selectFilteredFilms = createSelector(
    [
      (state) => state[NameSpace.DATA].allFilms,
      (state) => state[NameSpace.DATA].chosenGenre,
    ],
    (allFilms, chosenGenre) => allFilms.filter((film) => film.genre === chosenGenre),
);

const Main = () => {
  const {
    allFilms,
    chosenGenre,
    shownFilmQuantity,
    promo,
  } = useSelector((state) => state[NameSpace.DATA]);

  const filteredFilms = useSelector(selectFilteredFilms);
  const filmsToShow = chosenGenre === Genre.ALL ? allFilms : filteredFilms;

  return <>
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src={promo[`background_image`]} alt={promo.name}/>
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header movie-card__head">
        <div className="logo">
          <a className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <UserBlock/>
      </header>

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img
              src={promo[`poster_image`]} alt={promo.name} width="218"
              height="327"/>
          </div>

          <div className="movie-card__desc">
            <h2 className="movie-card__title">{promo.name}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{promo.genre}</span>
              <span className="movie-card__year">{promo.released}</span>
            </p>

            <div className="movie-card__buttons">
              <PlayButton id={promo.id}/>
              <AddToFavoriteButton id={promo.id}/>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <GenreList/>
        <FilmList films={filmsToShow}/>
        <div className="catalog__more">
          {filmsToShow.length > shownFilmQuantity ? <ShowMore/> : ``}
        </div>
      </section>

      <footer className="page-footer">
        <div className="logo">
          <a className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  </>;
};

export {Main};
