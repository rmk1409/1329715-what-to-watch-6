import PropTypes from "prop-types";

const promoValidation = {
  promo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
  }).isRequired,
};

const filmValidation = {
  film: PropTypes.shape({
    "id": PropTypes.number.isRequired,
    "name": PropTypes.string.isRequired,
    "poster_image": PropTypes.string.isRequired,
    "preview_image": PropTypes.string.isRequired,
    "background_image": PropTypes.string.isRequired,
    "background_color": PropTypes.string.isRequired,
    "video_link": PropTypes.string.isRequired,
    "preview_video_link": PropTypes.string.isRequired,
    "description": PropTypes.string.isRequired,
    "rating": PropTypes.number.isRequired,
    "scores_count": PropTypes.number.isRequired,
    "director": PropTypes.string.isRequired,
    "starring": PropTypes.arrayOf(PropTypes.string).isRequired,
    "run_time": PropTypes.number.isRequired,
    "genre": PropTypes.string.isRequired,
    "released": PropTypes.number.isRequired,
    "is_favorite": PropTypes.bool.isRequired,
  }),
};

const reviewValidation = {
  review: PropTypes.shape({
    "id": PropTypes.number.isRequired,
    "user": PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
    "rating": PropTypes.number.isRequired,
    "comment": PropTypes.string.isRequired,
    "date": PropTypes.string.isRequired,
  }),
};

export {promoValidation, filmValidation, reviewValidation};
