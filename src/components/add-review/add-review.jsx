import React from 'react';
import {filmsValidation} from "../../validation";
import {SendCommentForm} from "../send-comment-form/send-comment-form";
import {useParams} from "react-router-dom";
import {connect} from "react-redux";

const AddReview = ({films}) => {
  const id = +useParams().id;
  const film = films.find((currentFilm)=>currentFilm.id === id);

  return <>
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={film[`preview_image`]} alt={film.name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <a href="main.html" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a href="movie-page.html" className="breadcrumbs__link">{film.name}</a>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <div className="user-block">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
            </div>
          </div>
        </header>

        <div className="movie-card__poster movie-card__poster--small">
          <img
            src={film[`poster_image`]} alt={film.name} width="218"
            height="327"/>
        </div>
      </div>

      <div className="add-review">
        <SendCommentForm/>
      </div>

    </section>
  </>;
};

AddReview.propTypes = {
  ...filmsValidation
};

const mapStateToProps = (state) => ({
  films: state.initialFilms,
});

const ConnectedAddReview = connect(mapStateToProps, null)(AddReview);

export {ConnectedAddReview};
