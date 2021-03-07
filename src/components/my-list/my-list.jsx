import React from 'react';
import {filmValidation} from "../../validation";
import {FilmList} from "../film-list/film-list";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {ConnectedUserBlock} from "../user-block/user-block";
import {getAllFilms} from "../../store/data/selector";

const MyList = ({allFilms}) => {
  const favoriteFilms = allFilms.filter((film) => film[`is_favorite`]);

  return <>
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <a href="main.html" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <h1 className="page-title user-page__title">My list</h1>

        <ConnectedUserBlock/>
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
    </div>
  </>;
};

MyList.propTypes = {
  allFilms: PropTypes.arrayOf(filmValidation.film).isRequired,
};

const mapStateToProps = (state) => ({
  allFilms: getAllFilms(state),
});

const ConnectedMyList = connect(mapStateToProps, null)(MyList);

export {ConnectedMyList};
