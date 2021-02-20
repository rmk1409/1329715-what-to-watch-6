import React from 'react';
import {filmValidation, reviewsValidation} from "../../validation";
import {Review} from "../review/review";

const FilmReviews = (props) => {
  const {film} = props;
  let {reviews} = props;

  reviews = reviews.filter((review) => review[`film_id`] === film.id);
  const halfIndex = Math.ceil(reviews.length / 2);
  const firstHalfReviews = reviews.splice(0, halfIndex);
  const secondHalfReviews = reviews.splice(-halfIndex);

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
