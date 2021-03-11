import React, {useCallback, useEffect, useState} from "react";
import {redirectToRoute} from "../../store/action";
import {useDispatch} from "react-redux";
import PropTypes from "prop-types";
import {postReview} from "../../store/api-actions";
import {Review} from "../../const";
import {MemoReviewTextarea} from "../review-textarea/review-textarea";
import {MemoRatingStar} from "../review-star-list/review-star-list";

const SendCommentForm = ({id}) => {
  const [review, setReview] = useState({
    rating: 0,
    comment: ``,
  });
  const [isReviewValid, setReviewValid] = useState(false);

  const setRating = useCallback(
      (evt) => setReview({...review, rating: evt.target.value}),
      [review.rating],
  );
  const setComment = useCallback(
      (evt) => setReview({...review, comment: evt.target.value}),
      [review.comment],
  );

  const dispatch = useDispatch();
  const onSubmitClickHandler = (evt) => {
    evt.preventDefault();
    dispatch(postReview(id, review));
    dispatch(redirectToRoute(`/films/${id}`));
  };

  useEffect(() => {
    const isRatingValid = review.rating >= Review.MIN_VALID_RATING && review.rating <= Review.MAX_VALID_RATING;
    const isMsgValid = review.comment.length >= Review.MIN_VALID_MSG_LENGTH && review.comment.length <= Review.MAX_VALID_MSG_LENGTH;

    setReviewValid(isRatingValid && isMsgValid);
  }, [review]);

  return <form action="#" className="add-review__form">
    <div className="rating">
      <MemoRatingStar setRating={setRating}/>
    </div>

    <div className="add-review__text">
      <MemoReviewTextarea setComment={setComment}/>
      <div className="add-review__submit">
        <button
          className="add-review__btn" type="submit" onClick={onSubmitClickHandler} disabled={!isReviewValid}>Post
        </button>
      </div>
    </div>
  </form>;
};

SendCommentForm.propTypes = {
  id: PropTypes.number.isRequired,
};

export {SendCommentForm};
