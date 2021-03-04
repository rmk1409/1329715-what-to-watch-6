import {ActionCreator} from "./action";

const fetchFilmList = () => (dispatch, _getState, api) => (
  api.get(`/films`)
    .then(({data}) => dispatch(ActionCreator.loadFilms(data)))
);

const fetchReviewList = (id) => (dispatch, _getState, api) => (
  api.get(`/comments/${id}`)
    .then(({data}) => dispatch(ActionCreator.loadReviews(data)))
);

const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(({data}) => {
      dispatch(ActionCreator.setAuthInfo(data));
      dispatch(ActionCreator.setAuthorization(true));
    })
    .catch(() => dispatch(ActionCreator.setAuthorization(false)))
);

const login = (user) => (dispatch, _getState, api) => (
  api.post(`/login`, {...user})
    .then(({data}) => {
      dispatch(ActionCreator.setAuthInfo(data));
      dispatch(ActionCreator.setAuthorization(true));
      dispatch(ActionCreator.redirectToRoute(`/`));
    })
    .catch(() => dispatch(ActionCreator.setAuthorization(false)))
);

export {fetchFilmList, fetchReviewList, checkAuth, login};
