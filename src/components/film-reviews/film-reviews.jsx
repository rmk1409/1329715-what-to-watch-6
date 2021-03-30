import React from 'react';
import {Review} from "../review/review";
import {useSelector} from "react-redux";
import {NameSpace} from "../../store/reducer";

const FilmReviews = () => {
  const reviewsForActiveFilm = useSelector((state) => state[NameSpace.DATA].reviewsForActiveFilm);
  let firstHalfReviews = reviewsForActiveFilm;
  let secondHalfReviews = [];
  if (reviewsForActiveFilm.length > 1) {
    const halfIndex = Math.floor(reviewsForActiveFilm.length / 2);
    firstHalfReviews = [...reviewsForActiveFilm].splice(0, halfIndex);
    secondHalfReviews = [...reviewsForActiveFilm].splice(-halfIndex);
  }
  return <div className="movie-card__reviews movie-card__row">
    <div className="movie-card__reviews-col">
      {firstHalfReviews.map((review) => <Review key={review.id} review={review}/>)}
    </div>
    <div className="movie-card__reviews-col">
      {secondHalfReviews.map((review) => <Review key={review.id} review={review}/>)}
    </div>
  </div>;
};

export {FilmReviews};
