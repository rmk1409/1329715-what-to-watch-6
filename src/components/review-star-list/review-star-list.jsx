import React, {memo} from "react";
import * as PropTypes from "prop-types";
import {RatingStar} from "../rating-star/rating-star";
import {Review} from "../../const";

const ReviewStarList = ({setRating}) => {
  const ratings = new Array(Review.MAX_VALID_RATING).fill(null);
  return <div className="rating__stars" onChange={setRating}>
    {ratings.map((_value, index) => <RatingStar key={index} index={index + 1}/>)}
  </div>;
};

ReviewStarList.propTypes = {
  setRating: PropTypes.func.isRequired,
};

const MemoRatingStar = memo(ReviewStarList);

export {MemoRatingStar};
