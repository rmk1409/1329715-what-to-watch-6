import {
  loadFilms,
  redirectToRoute,
  setAuthInfo,
  setAuthorizationStatus,
  loadFavoriteList,
  loadPromo,
  loadReviews,
} from "./action";

const fetchFilmList = () => (dispatch, _getState, api) => (
  api.get(`/films`)
    .then(({data}) => dispatch(loadFilms(data)))
);

const fetchReviewList = (id) => (dispatch, _getState, api) => (
  api.get(`/comments/${id}`)
    .then(({data}) => dispatch(loadReviews(data)))
);

const fetchPromo = () => (dispatch, _getState, api) => (
  api.get(`/films/promo`)
    .then(({data}) => dispatch(loadPromo(data)))
);

const fetchFavoriteList = () => (dispatch, _getState, api) => (
  api.get(`/favorite`)
    .then(({data}) => dispatch(loadFavoriteList(data)))
);

const changeFavoriteStatus = (filmId, status = true) => (dispatch, _getState, api) => {
  api.post(`/favorite/${filmId}/${status ? 1 : 0}`);
};

const postReview = (id, dataToSend) => (dispatch, _getState, api) => (
  api.post(`/comments/${id}`, dataToSend)
    .then(({data}) => dispatch(loadReviews(data)))
);

const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(({data}) => {
      dispatch(setAuthInfo(data));
      dispatch(setAuthorizationStatus(true));
    })
    .catch(() => dispatch(setAuthorizationStatus(false)))
);

const login = (user) => (dispatch, _getState, api) => (
  api.post(`/login`, {...user})
    .then(({data}) => {
      dispatch(setAuthInfo(data));
      dispatch(setAuthorizationStatus(true));
      dispatch(redirectToRoute(`/`));
    })
    .catch(() => dispatch(setAuthorizationStatus(false)))
);

export {
  fetchFilmList,
  fetchReviewList,
  checkAuth,
  login,
  postReview,
  fetchPromo,
  fetchFavoriteList,
  changeFavoriteStatus,
};
