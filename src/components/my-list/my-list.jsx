import React from 'react';
import {filmsValidation} from "../../validation";
import {FilmList} from "../film-list/film-list";

const MyList = (props) => {
  const {films} = props;
  const favoriteFilms = films.filter((film)=>film[`is_favorite`]);

  return <div className="user-page">
    <header className="page-header user-page__head">
      <div className="logo">
        <a href="main.html" className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>

      <h1 className="page-title user-page__title">My list</h1>

      <div className="user-block">
        <div className="user-block__avatar">
          <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
        </div>
      </div>
    </header>

    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <FilmList films={favoriteFilms}/>
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
  </div>;
};

MyList.propTypes = {
  ...filmsValidation
};

export {MyList};
