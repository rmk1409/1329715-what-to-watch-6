import React, {useEffect, useState} from "react";
import {ActionCreator} from "../../store/action";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {postReview} from "../../store/api-actions";
import {Review} from "../../const";
import {RatingStar} from "../rating-start/rating-star";

const SendCommentForm = ({onSubmitClick, id}) => {
  const [review, setReview] = useState({
    rating: 0,
    comment: ``,
  });

  const setRating = (evt) => setReview({...review, rating: evt.target.value});
  const setComment = (evt) => setReview({...review, comment: evt.target.value});

  const onSubmitClickHandler = (evt) => {
    evt.preventDefault();
    onSubmitClick(id, review);
  };

  const [isReviewValid, setReviewValid] = useState(false);

  useEffect(() => {
    const isRatingValid = review.rating >= Review.MIN_VALID_RATING && review.rating <= Review.MAX_VALID_RATING;
    const isMsgValid = review.comment.length >= Review.MIN_VALID_MSG_LENGTH && review.comment.length <= Review.MAX_VALID_MSG_LENGTH;

    setReviewValid(isRatingValid && isMsgValid);
  }, [review]);

  const ratings = new Array(Review.MAX_VALID_RATING).fill(null);

  return <>
    <form action="#" className="add-review__form">
      <div className="rating">
        <div className="rating__stars" onChange={setRating}>
          {ratings.map((_value, index) => <RatingStar key={index} index={index + 1}/>)}
        </div>
      </div>

      <div className="add-review__text">
        <textarea
          className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"
          onChange={setComment}/>
        <div className="add-review__submit">
          <button
            className="add-review__btn" type="submit" onClick={onSubmitClickHandler} disabled={!isReviewValid}>Post
          </button>
        </div>

      </div>
    </form>
  </>;
};

SendCommentForm.propTypes = {
  onSubmitClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onSubmitClick(id, data) {
    dispatch(postReview(id, data));
    dispatch(ActionCreator.redirectToRoute(`/films/${id}`));
  },
});
const ConnectedSendCommentForm = connect(null, mapDispatchToProps)(SendCommentForm);

export {SendCommentForm, ConnectedSendCommentForm};
