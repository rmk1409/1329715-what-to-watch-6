import {loadFilms, redirectToRoute, setAuthInfo, setAuthorization, setFavorite, setPromo, setReviews} from "./action";

const fetchFilmList = () => (dispatch, _getState, api) => (
  api.get(`/films`)
    .then(({data}) => dispatch(loadFilms(data)))
);

const fetchReviewList = (id) => (dispatch, _getState, api) => (
  api.get(`/comments/${id}`)
    .then(({data}) => dispatch(setReviews(data)))
);

const fetchPromo = () => (dispatch, _getState, api) => (
  api.get(`/films/promo`)
    .then(({data}) => dispatch(setPromo(data)))
);

const fetchFavorite = () => (dispatch, _getState, api) => (
  api.get(`/favorite`)
    .then(({data}) => dispatch(setFavorite(data)))
);

const postReview = (id, dataToSend) => (dispatch, _getState, api) => (
  api.post(`/comments/${id}`, dataToSend)
    .then(({data}) => dispatch(setReviews(data)))
);

const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(({data}) => {
      dispatch(setAuthInfo(data));
      dispatch(setAuthorization(true));
    })
    .catch(() => dispatch(setAuthorization(false)))
);

const login = (user) => (dispatch, _getState, api) => (
  api.post(`/login`, {...user})
    .then(({data}) => {
      dispatch(setAuthInfo(data));
      dispatch(setAuthorization(true));
      dispatch(redirectToRoute(`/`));
    })
    .catch(() => dispatch(setAuthorization(false)))
);

export {fetchFilmList, fetchReviewList, checkAuth, login, postReview, fetchPromo, fetchFavorite};
