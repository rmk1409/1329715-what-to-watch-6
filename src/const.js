const MAX_SHOWN_FILM_QUANTITY_PER_TIME = 8;

const ONE_SECOND = 1000;
const ONE_HUNDRED_PERCENT = 100;
const MIN_IN_HOUR = 60;
const SECONDS_IN_HOUR = 3600;
const SECONDS_IN_MIN = 60;
const MAX_SINGLE_DIGITAL_NUMBER = 9;
const MAX_GENRE_QUANTITY = 9;

const Genre = {
  ALL: `All genres`,
  ACTIVE_GENRE_CLASS: `catalog__genres-item--active`,
};

const Rating = {
  MIN_SCORE_FOR_BAD_RATING: 0,
  MAX_SCORE_FOR_BAD_RATING: 3,
  MAX_SCORE_FOR_NORMAL_RATING: 5,
  MAX_SCORE_FOR_GOOD_RATING: 8,
  MAX_SCORE_FOR_VERY_GOOD_RATING: 10,
};

const Review = {
  MIN_VALID_RATING: 1,
  MAX_VALID_RATING: 10,
  MIN_VALID_MSG_LENGTH: 50,
  MAX_VALID_MSG_LENGTH: 400,
};

export {
  Genre,
  MAX_SHOWN_FILM_QUANTITY_PER_TIME,
  Rating,
  Review,
  ONE_SECOND,
  MIN_IN_HOUR,
  ONE_HUNDRED_PERCENT,
  SECONDS_IN_HOUR,
  SECONDS_IN_MIN,
  MAX_SINGLE_DIGITAL_NUMBER,
  MAX_GENRE_QUANTITY
};
