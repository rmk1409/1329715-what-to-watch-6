import React, {useState, useEffect} from "react";
import {ActionCreator} from "../../store/action";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {postReview} from "../../store/api-actions";

const MIN_VALID_RATING = 1;
const MAX_VALID_RATING = 10;
const MIN_VALID_MSG_LENGTH = 50;
const MAX_VALID_MSG_LENGTH = 400;

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
    const isRatingValid = review.rating >= MIN_VALID_RATING && review.rating <= MAX_VALID_RATING;
    const isMsgValid = review.comment.length >= MIN_VALID_MSG_LENGTH && review.comment.length <= MAX_VALID_MSG_LENGTH;

    setReviewValid(isRatingValid && isMsgValid);
  }, [review]);

  return <>
    <form action="#" className="add-review__form">
      <div className="rating">
        <div className="rating__stars" onChange={setRating}>
          <input className="rating__input" id="star-1" type="radio" name="rating" value="1"/>
          <label className="rating__label" htmlFor="star-1">Rating 1</label>

          <input className="rating__input" id="star-2" type="radio" name="rating" value="2"/>
          <label className="rating__label" htmlFor="star-2">Rating 2</label>

          <input className="rating__input" id="star-3" type="radio" name="rating" value="3"/>
          <label className="rating__label" htmlFor="star-3">Rating 3</label>

          <input className="rating__input" id="star-4" type="radio" name="rating" value="4"/>
          <label className="rating__label" htmlFor="star-4">Rating 4</label>

          <input className="rating__input" id="star-5" type="radio" name="rating" value="5"/>
          <label className="rating__label" htmlFor="star-5">Rating 5</label>

          <input className="rating__input" id="star-6" type="radio" name="rating" value="6"/>
          <label className="rating__label" htmlFor="star-6">Rating 6</label>

          <input className="rating__input" id="star-7" type="radio" name="rating" value="7"/>
          <label className="rating__label" htmlFor="star-7">Rating 7</label>

          <input className="rating__input" id="star-8" type="radio" name="rating" value="8"/>
          <label className="rating__label" htmlFor="star-8">Rating 8</label>

          <input className="rating__input" id="star-9" type="radio" name="rating" value="9"/>
          <label className="rating__label" htmlFor="star-9">Rating 9</label>

          <input className="rating__input" id="star-10" type="radio" name="rating" value="10"/>
          <label className="rating__label" htmlFor="star-10">Rating 10</label>
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
