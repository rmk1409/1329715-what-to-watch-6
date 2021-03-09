import React, {useState} from 'react';
import {filmValidation} from "../../validation";
import {FilmOverview} from "../film-overview/film-overview";
import {FilmDetails} from "../film-details/film-details";
import {FilmReviews} from "../film-reviews/film-reviews";

const tabType = {
  OVERVIEW: `OVERVIEW`,
  DETAILS: `DETAILS`,
  REVIEWS: `REVIEWS`,
};

const getContent = (film, type = tabType.OVERVIEW) => {
  let content = <FilmOverview film={film}/>;

  switch (type) {
    case tabType.DETAILS:
      content = <FilmDetails film={film}/>;
      break;
    case tabType.REVIEWS:
      content = <FilmReviews/>;
      break;
  }
  return content;
};

const TabList = ({film}) => {
  const [chosenTab, setChosenTab] = useState(tabType.OVERVIEW);

  const onClickLink = (evt) => {
    evt.preventDefault();
    setChosenTab(evt.target.textContent.toUpperCase());
  };

  return <>
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        <li className={`movie-nav__item ${chosenTab === tabType.OVERVIEW ? `movie-nav__item--active` : ``}`}>
          <a href="#" className="movie-nav__link" onClick={onClickLink}>Overview</a>
        </li>
        <li className={`movie-nav__item ${chosenTab === tabType.DETAILS ? `movie-nav__item--active` : ``}`}>
          <a href="#" className="movie-nav__link" onClick={onClickLink}>Details</a>
        </li>
        <li className={`movie-nav__item ${chosenTab === tabType.REVIEWS ? `movie-nav__item--active` : ``}`}>
          <a href="#" className="movie-nav__link" onClick={onClickLink}>Reviews</a>
        </li>
      </ul>
    </nav>
    {getContent(film, chosenTab)}
  </>;
};

TabList.propTypes = {
  ...filmValidation,
};

export {TabList};
