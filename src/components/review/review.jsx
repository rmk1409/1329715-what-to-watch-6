import React, {useMemo} from "react";
import {reviewValidation} from "../../validation";
import * as dayjs from 'dayjs';

const Review = ({review}) => {
  const memoDateForAttribute = useMemo(() => dayjs(review.date).format(`YYYY-MM-DD`), [review.date]);
  const memoDateForTextContent = useMemo(() => dayjs(review.date).format(`MMMM DD, YYYY`), [review.date]);

  return <div className="review">
    <blockquote className="review__quote">
      <p className="review__text">{review.comment}</p>

      <footer className="review__details">
        <cite className="review__author">{review.user.name}</cite>
        <time className="review__date" dateTime={memoDateForAttribute}>{memoDateForTextContent}</time>
      </footer>
    </blockquote>

    <div className="review__rating">{review.rating}</div>
  </div>;
};

Review.propTypes = {
  ...reviewValidation,
};

export {Review};
