import React from 'react';
import {filmValidation, promoValidation} from "../../validation";
import {ConnectedFilmList} from "../film-list/film-list";
import {ConnectedGenreList} from "../genre-list/genre-list";
import {ConnectedShowMore} from "../show-more/show-more";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {ActionCreator} from "../../store/action";
import {ConnectedUserBlock} from "../user-block/user-block";

const Main = (props) => {
  const {
    promo: {title, genre, date},
    filteredFilms,
    shownFilmQuantity,
    onMyListClick,
  } = props;

  const handleMyListClick = (evt) => {
    evt.preventDefault();
    onMyListClick();
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

        <ConnectedUserBlock/>
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
  onMyListClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  filteredFilms: state.filteredFilms,
  shownFilmQuantity: state.shownFilmQuantity,
});
const mapDispatchToProps = (dispatch) => ({
  onMyListClick() {
    dispatch(ActionCreator.redirectToRoute(`/mylist`));
  },
});
const ConnectedMain = connect(mapStateToProps, mapDispatchToProps)(Main);

export {Main, ConnectedMain};
