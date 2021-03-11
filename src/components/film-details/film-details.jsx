import React, {useMemo} from "react";
import {filmValidation} from "../../validation";
import {MIN_IN_HOUR} from "../../const";

const getStars = (film) => {
  return film.starring.map((value, index) => (
    <span key={value}>
      {value}{index < (film.starring.length - 1) ? <br/> : ``}
    </span>));
};

const FilmDetails = ({film}) => {
  const memoFormattedDuration = useMemo(() => `${Math.floor(film[`run_time`] / MIN_IN_HOUR)}h ${film[`run_time`] % MIN_IN_HOUR}m`, [film]);
  const memoStars = useMemo(() => getStars(film), [film]);

  return <div className="movie-card__text movie-card__row">
    <div className="movie-card__text-col">
      <p className="movie-card__details-item">
        <strong className="movie-card__details-name">Director</strong>
        <span className="movie-card__details-value">{film.director}</span>
      </p>
      <p className="movie-card__details-item">
        <strong className="movie-card__details-name">Starring</strong>
        <span className="movie-card__details-value">{memoStars}</span>
      </p>
    </div>

    <div className="movie-card__text-col">
      <p className="movie-card__details-item">
        <strong className="movie-card__details-name">Run Time</strong>
        <span className="movie-card__details-value">{memoFormattedDuration}</span>
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
  </div>;
};

FilmDetails.propTypes = {
  ...filmValidation,
};

export {FilmDetails};
