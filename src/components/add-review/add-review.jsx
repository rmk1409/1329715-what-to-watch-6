import React from 'react';
import {filmValidation} from "../../validation";
import {ConnectedSendCommentForm} from "../send-comment-form/send-comment-form";
import {useParams} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {ConnectedUserBlock} from "../user-block/user-block";

const AddReview = ({allFilms}) => {
  const {id} = useParams();
  const film = allFilms.find((currentFilm) => currentFilm.id === parseInt(id, 10));

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

          <ConnectedUserBlock/>
        </header>

        <div className="movie-card__poster movie-card__poster--small">
          <img
            src={film[`poster_image`]} alt={film.name} width="218"
            height="327"/>
        </div>
      </div>

      <div className="add-review">
        <ConnectedSendCommentForm id={parseInt(id, 10)}/>
      </div>

    </section>
  </>;
};

AddReview.propTypes = {
  allFilms: PropTypes.arrayOf(filmValidation.film).isRequired,
};

const mapStateToProps = (state) => ({
  allFilms: state.allFilms,
});
const ConnectedAddReview = connect(mapStateToProps, null)(AddReview);

export {ConnectedAddReview};
