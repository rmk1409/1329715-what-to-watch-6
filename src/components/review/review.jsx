import React from "react";
import {reviewValidation} from "../../validation";
import * as dayjs from 'dayjs';

const Review = ({review}) => {
  const dateForAttribute = dayjs(review.date).format(`YYYY-MM-DD`);
  const dateForTextContent = dayjs(review.date).format(`MMMM DD, YYYY`);

  return <>
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{review.comment}</p>

        <footer className="review__details">
          <cite className="review__author">{review.user.name}</cite>
          <time className="review__date" dateTime={dateForAttribute}>{dateForTextContent}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{review.rating}</div>
    </div>
  </>;
};

Review.propTypes = {
  ...reviewValidation,
};

export {Review};
