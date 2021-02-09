import React from 'react';
import {filmMockValidation} from "../../validation";

const MovieCard = (props) => {
  const {film} = props;

  return <>
    <article className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img
          src={film[`preview_image`]} alt={film.name}
          width="280" height="175"/>
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{film.name}</a>
      </h3>
    </article>
  </>;
};

MovieCard.propTypes = {
  ...filmMockValidation
};

export {MovieCard};
