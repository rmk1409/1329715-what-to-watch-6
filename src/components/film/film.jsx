import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {TabList} from "../tab-list/tab-list";
import {FilmList} from "../film-list/film-list";
import {useDispatch, useSelector} from "react-redux";
import {fetchReviewList} from "../../store/api-actions";
import {NotFound} from "../404/404";
import {UserBlock} from "../user-block/user-block";
import {redirectToRoute} from "../../store/action";
import {NameSpace} from "../../store/reducer";
import {AddToFavoriteButton} from "../add-to-favorite-button/add-to-favorite-button";
import {PlayButton} from "../play-button/play-button";

const MAX_SHOWN_SIMILAR_FILM_QUANTITY = 4;

const Film = () => {
  const {id} = useParams();
  const {allFilms} = useSelector((state) => state[NameSpace.DATA]);
  const {authorizationStatus} = useSelector((state) => state[NameSpace.USER]);
  const film = allFilms.find((currentFilm) => currentFilm.id === parseInt(id, 10));
  const dispatch = useDispatch();
  if (!film) {
    return <NotFound/>;
  }
  useEffect(() => {
    dispatch(fetchReviewList(id));
  }, []);

  const onAddReviewClickHandler = (evt) => {
    evt.preventDefault();
    dispatch(redirectToRoute(`/films/${id}/review`));
  };

  const similarFilms = allFilms
    .filter((currentFilm) => currentFilm.genre === film.genre && film.id !== currentFilm.id)
    .splice(0, MAX_SHOWN_SIMILAR_FILM_QUANTITY);

  return <>
    <section className="movie-card movie-card--full">
      <div className="movie-card__hero">
        <div className="movie-card__bg">
          <img src={film[`preview_image`]} alt={film.name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <div className="logo">
            <a href="/" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <UserBlock/>
        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__desc">
            <h2 className="movie-card__title">{film.name}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{film.genre}</span>
              <span className="movie-card__year">{film.released}</span>
            </p>

            <div className="movie-card__buttons">
              <PlayButton id={parseInt(id, 10)}/>
              <AddToFavoriteButton id={parseInt(id, 10)}/>
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
          <a href="/" className="logo__link logo__link--light">
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

export {Film};
