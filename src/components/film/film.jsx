import React from 'react';
import {filmValidation} from "../../validation";
import {useParams} from "react-router-dom";
import {TabList} from "../tab-list/tab-list";
import {FilmList} from "../film-list/film-list";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {fetchReviewList} from "../../store/api-actions";
import {NotFound} from "../404/404";
import {ConnectedUserBlock} from "../user-block/user-block";
import {ActionCreator} from "../../store/action";

const MAX_SHOWN_SIMILAR_FILM_QUANTITY = 4;

const Film = ({allFilms, onLoadReviews, authorizationStatus, onAddReviewClick}) => {
  const {id} = useParams();
  const film = allFilms.find((currentFilm) => currentFilm.id === parseInt(id, 10));
  if (!film) {
    return <NotFound/>;
  }
  onLoadReviews(id);

  const similarFilms = allFilms
    .filter((currentFilm) => currentFilm.genre === film.genre && film.id !== currentFilm.id)
    .splice(0, MAX_SHOWN_SIMILAR_FILM_QUANTITY);

  const onAddReviewClickHandler = (evt) => {
    evt.preventDefault();
    onAddReviewClick(id);
  };

  return <>
    <section className="movie-card movie-card--full">
      <div className="movie-card__hero">
        <div className="movie-card__bg">
          <img src={film[`preview_image`]} alt={film.name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <div className="logo">
            <a href="main.html" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <ConnectedUserBlock/>
        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__desc">
            <h2 className="movie-card__title">{film.name}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{film.genre}</span>
              <span className="movie-card__year">{film.released}</span>
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
              {authorizationStatus ?
                <a href="add-review.html" className="btn movie-card__button" onClick={onAddReviewClickHandler}>Add
                  review</a> : ``}
            </div>
          </div>
        </div>
      </div>

      <div className="movie-card__wrap movie-card__translate-top">
        <div className="movie-card__info">
          <div className="movie-card__poster movie-card__poster--big">
            <img
              src={film[`poster_image`]} alt={film.name} width="218"
              height="327"/>
          </div>

          <div className="movie-card__desc">
            <TabList film={film}/>
          </div>
        </div>
      </div>
    </section>

    <div className="page-content">
      <section className="catalog catalog--like-this">
        <h2 className="catalog__title">More like this</h2>

        <div className="catalog__movies-list">
          <FilmList films={similarFilms}/>
        </div>
      </section>

      <footer className="page-footer">
        <div className="logo">
          <a href="main.html" className="logo__link logo__link--light">
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

Film.propTypes = {
  allFilms: PropTypes.arrayOf(filmValidation.film).isRequired,
  onAddReviewClick: PropTypes.func.isRequired,
  onLoadReviews: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  allFilms: state.allFilms,
  authorizationStatus: state.authorizationStatus,
});
const mapDispatchToProps = (dispatch) => ({
  onLoadReviews(id) {
    dispatch(fetchReviewList(id));
  },
  onAddReviewClick(id) {
    dispatch(ActionCreator.redirectToRoute(`/films/${id}/review`));
  },
});
const ConnectedFilm = connect(mapStateToProps, mapDispatchToProps)(Film);

export {ConnectedFilm};
