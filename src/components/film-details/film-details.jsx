import React from "react";
import {filmValidation} from "../../validation";

const MIN_IN_HOUR = 60;

const FilmDetails = ({film}) => {
  const stars = film.starring.map((value, index) => (
    <span key={value}>
      {value}{index < (film.starring.length - 1) ? <br/> : ``}
    </span>
  ));

  const formattedDuration = `${Math.floor(film[`run_time`] / MIN_IN_HOUR)}h ${film[`run_time`] % MIN_IN_HOUR}m`;

  return <>
    <div className="movie-card__text movie-card__row">
      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Director</strong>
          <span className="movie-card__details-value">{film.director}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Starring</strong>
          <span className="movie-card__details-value">{stars}</span>
        </p>
      </div>

      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Run Time</strong>
          <span className="movie-card__details-value">{formattedDuration}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Genre</strong>
          <span className="movie-card__details-value">{film.genre}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Released</strong>
          <span className="movie-card__details-value">{film.released}</span>
        </p>
      </div>
    </div>
  </>;
};

FilmDetails.propTypes = {
  ...filmValidation,
};

export {FilmDetails};
