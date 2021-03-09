import React, {useMemo} from "react";
import {filmValidation} from "../../validation";
import {Rating} from "../../const";

const getScoreWord = (number) => {
  let word = `Awesome`;
  if (number >= Rating.MIN_SCORE_FOR_BAD_RATING && number < Rating.MAX_SCORE_FOR_BAD_RATING) {
    word = `Bad`;
  } else {
    if (number < Rating.MAX_SCORE_FOR_NORMAL_RATING) {
      word = `Normal`;
    } else {
      if (number < Rating.MAX_SCORE_FOR_GOOD_RATING) {
        word = `Good`;
      } else {
        if (number < Rating.MAX_SCORE_FOR_VERY_GOOD_RATING) {
          word = `Very good`;
        }
      }
    }
  }
  return word;
};

const FilmOverview = ({film}) => {
  const memoGetStore = useMemo(() => getScoreWord(film.rating), []);
  return <>
    <div className="movie-rating">
      <div className="movie-rating__score">{film.rating}</div>
      <p className="movie-rating__meta">
        <span className="movie-rating__level">{memoGetStore}</span>
        <span className="movie-rating__count">{film[`scores_count`]} ratings</span>
      </p>
    </div>
    <div className="movie-card__text">
      <p>{film.description}</p>
      <p className="movie-card__director"><strong>Director: {film.director}</strong></p>
      <p className="movie-card__starring"><strong>Starring: {film.starring.join(`, `)}</strong></p>
    </div>
  </>;
};

FilmOverview.propTypes = {
  ...filmValidation,
};

export {FilmOverview};
