import React from 'react';
import {filmValidation, reviewsValidation} from "../../validation";
import {Review} from "../review/review";

const FilmReviews = ({film, reviews}) => {
  const filteredReviews = reviews.filter((review) => review[`film_id`] === film.id);
  const halfIndex = Math.ceil(filteredReviews.length / 2);
  const firstHalfReviews = filteredReviews.splice(0, halfIndex);
  const secondHalfReviews = filteredReviews.splice(-halfIndex);

  return <>
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {firstHalfReviews.map((review) => <Review key={review.id} review={review}/>)}
      </div>
      <div className="movie-card__reviews-col">
        {secondHalfReviews.map((review) => <Review key={review.id} review={review}/>)}
      </div>
    </div>
  </>;
};

FilmReviews.propTypes = {
  ...filmValidation,
  ...reviewsValidation,
};

export {FilmReviews};
