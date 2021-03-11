import React from 'react';
import {SendCommentForm} from "../send-comment-form/send-comment-form";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {UserBlock} from "../user-block/user-block";
import {NameSpace} from "../../store/reducer";

const AddReview = () => {
  const {id} = useParams();
  const {allFilms} = useSelector((state) => state[NameSpace.DATA]);
  const film = allFilms.find((currentFilm) => currentFilm.id === parseInt(id, 10));

  return <section className="movie-card movie-card--full">
    <div className="movie-card__header">
      <div className="movie-card__bg">
        <img src={film[`preview_image`]} alt={film.name}/>
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header">
        <div className="logo">
          <a href="/" className="logo__link">
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

        <UserBlock/>
      </header>

      <div className="movie-card__poster movie-card__poster--small">
        <img
          src={film[`poster_image`]} alt={film.name} width="218"
          height="327"/>
      </div>
    </div>

    <div className="add-review">
      <SendCommentForm id={parseInt(id, 10)}/>
    </div>

  </section>;
};

export {AddReview};
