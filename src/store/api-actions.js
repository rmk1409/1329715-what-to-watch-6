import {ActionCreator} from "./action";

const fetchFilmList = () => (dispatch, _getState, api) => (
  api.get(`/films`)
    .then(({data}) => dispatch(ActionCreator.loadFilms(data)))
);

const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(() => dispatch(ActionCreator.setAuthorization(true)))
    .catch(() => dispatch(ActionCreator.setAuthorization(false)))
);

export {fetchFilmList, checkAuth};
