import React from 'react';
import {reviewValidation} from "../../validation";
import {Review} from "../review/review";
import {connect} from "react-redux";
import PropTypes from "prop-types";

const FilmReviews = ({reviewsForActiveFilm}) => {
  const halfIndex = Math.ceil(reviewsForActiveFilm.length / 2);
  const firstHalfReviews = reviewsForActiveFilm.splice(0, halfIndex);
  const secondHalfReviews = reviewsForActiveFilm.splice(-halfIndex);

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
  reviewsForActiveFilm: PropTypes.arrayOf(reviewValidation.review).isRequired,
};

const mapStateToProps = (state) => ({
  reviewsForActiveFilm: state.reviewsForActiveFilm
});
const ConnectedFilmReviews = connect(mapStateToProps, null)(FilmReviews);

export {FilmReviews, ConnectedFilmReviews};
