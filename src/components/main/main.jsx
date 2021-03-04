import React, {useEffect} from 'react';
import {filmValidation, promoValidation} from "../../validation";
import {ConnectedFilmList} from "../film-list/film-list";
import {ConnectedGenreList} from "../genre-list/genre-list";
import {ConnectedShowMore} from "../show-more/show-more";
import {connect} from "react-redux";
import * as PropTypes from "prop-types";
import {LoadingScreen} from "../loading-screen/loading-screen";
import {fetchFilmList} from "../../store/api-actions";
import {ActionCreator} from "../../store/action";

const Main = (props) => {
  const {
    promo: {title, genre, date},
    filteredFilms,
    shownFilmQuantity,
    isFilmsLoaded,
    onLoadFilms,
    authorizationStatus,
    authInfo,
    onMyListClick,
    onSignInClick
  } = props;

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

  const handleMyListClick = (evt) => {
    evt.preventDefault();
    onMyListClick();
  };

  const handleSignInClick = (evt) => {
    evt.preventDefault();
    onSignInClick();
  };

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
          {authorizationStatus ?
            <>
              <div className="user-block__avatar">
                <img src={authInfo[`avatar_url`]} alt="User avatar" width="63" height="63"/>
              </div>
            </> :
            <a href="sign-in.html" className="user-block__link" onClick={handleSignInClick}>Sign in</a>
          }
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
              <button className="btn btn--list movie-card__button" type="button" onClick={handleMyListClick}>
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
          {filteredFilms.length > shownFilmQuantity ? <ConnectedShowMore/> : ``}
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
  filteredFilms: PropTypes.arrayOf(filmValidation.film).isRequired,
  shownFilmQuantity: PropTypes.number.isRequired,
  isFilmsLoaded: PropTypes.bool.isRequired,
  authorizationStatus: PropTypes.bool.isRequired,
  authInfo: PropTypes.object.isRequired,
  onMyListClick: PropTypes.func.isRequired,
  onSignInClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  filteredFilms: state.filteredFilms,
  shownFilmQuantity: state.shownFilmQuantity,
  isFilmsLoaded: state.isFilmsLoaded,
  authorizationStatus: state.authorizationStatus,
  authInfo: state.authInfo,
});
const mapDispatchToProps = (dispatch) => ({
  onLoadFilms() {
    dispatch(fetchFilmList());
  },
  onMyListClick() {
    dispatch(ActionCreator.redirectToRoute(`/mylist`));
  },
  onSignInClick() {
    dispatch(ActionCreator.redirectToRoute(`/login`));
  },
});
const ConnectedMain = connect(mapStateToProps, mapDispatchToProps)(Main);

export {Main, ConnectedMain};
