import React, {memo} from "react";
import * as PropTypes from "prop-types";

const ReviewTextarea = ({setComment}) => {
  return <textarea
    className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"
    onChange={setComment}/>;
};

ReviewTextarea.propTypes = {
  setComment: PropTypes.func.isRequired,
};

const MemoReviewTextarea = memo(ReviewTextarea);

export {MemoReviewTextarea};
