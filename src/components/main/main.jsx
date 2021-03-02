import React, {useEffect} from 'react';
import {filmsValidation, promoValidation} from "../../validation";
import {ConnectedFilmList} from "../film-list/film-list";
import {ConnectedGenreList} from "../genre-list/genre-list";
import {ConnectedShowMore} from "../show-more/show-more";
import {connect} from "react-redux";
import * as PropTypes from "prop-types";
import {LoadingScreen} from "../loading-screen/loading-screen";
import {fetchFilmList} from "../../store/api-actions";

const Main = (props) => {
  const {promo: {title, genre, date}, films, shownFilmQuantity, isFilmsLoaded, onLoadFilms} = props;

  useEffect(() => {
    if (!isFilmsLoaded) {
      onLoadFilms();
    }
  }, [isFilmsLoaded]);

  if (!isFilmsLoaded) {
    return (
      <LoadingScreen/>
    );
  }

  return <>
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel"/>
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

        <div className="user-block">
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
          </div>
        </div>
      </header>

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img
              src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218"
              height="327"/>
          </div>

          <div className="movie-card__desc">
            <h2 className="movie-card__title">{title}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{genre}</span>
              <span className="movie-card__year">{date}</span>
            </p>

            <div className="movie-card__buttons">
              <button className="btn btn--play movie-card__button" type="button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"/>
                </svg>
                <span>Play</span>
              </button>
              <button className="btn btn--list movie-card__button" type="button">
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="#add"/>
                </svg>
                <span>My list</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <ConnectedGenreList/>
        <ConnectedFilmList/>
        <div className="catalog__more">
          {films.length > shownFilmQuantity ? <ConnectedShowMore/> : ``}
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

Main.propTypes = {
  ...promoValidation,
  ...filmsValidation,
  shownFilmQuantity: PropTypes.number.isRequired,
  isFilmsLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  films: state.films,
  shownFilmQuantity: state.shownFilmQuantity,
  isFilmsLoaded: state.isFilmsLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadFilms() {
    dispatch(fetchFilmList());
  },
});

const ConnectedMain = connect(mapStateToProps, mapDispatchToProps)(Main);

export {Main, ConnectedMain};
