import React from "react";
import {filmValidation} from "../../validation";

const FilmDetails = (props) => {
  const {film} = props;
  const stars = film.starring.map((value, index) => (
    <React.Fragment key={index}>{value}{index < (film.starring.length - 1) ? <br/> : ``}</React.Fragment>
  ));

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
          <span
            className="movie-card__details-value">{`${Math.floor(film[`run_time`] / 60)}h ${film[`run_time`] % 60}m`}</span>
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
