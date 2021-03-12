import React, {useEffect} from 'react';
import {FilmList} from "../film-list/film-list";
import {useDispatch, useSelector} from "react-redux";
import {UserBlock} from "../user-block/user-block";
import {NameSpace} from "../../store/reducer";
import {fetchFavoriteList} from "../../store/api-actions";

const MyList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFavoriteList());
  }, []);
  const {favoriteFilms} = useSelector((state) => state[NameSpace.DATA]);

  return <div className="user-page">
    <header className="page-header user-page__head">
      <div className="logo">
        <a href="/" className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>

      <h1 className="page-title user-page__title">My list</h1>

      <UserBlock/>
    </header>

    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <FilmList films={favoriteFilms}/>
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
  </div>;
};

export {MyList};
