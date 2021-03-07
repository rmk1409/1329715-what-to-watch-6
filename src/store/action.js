import {createAction} from "@reduxjs/toolkit";

const ActionType = {
  CHANGE_GENRE: `app/change-genre-action`,
  GET_FILMS_BY_CURRENT_GENRE: `app/get-film-by-current-genre`,
  SET_SHOWN_FILM_QUANTITY: `app/set-shown-film-quantity`,
  INCREASE_SHOWN_FILM_QUANTITY: `app/increase-shown-film-quantity`,

  REDIRECT_TO_ROUTE: `route/redirect-to-route`,

  LOAD_REVIEWS: `data/load-reviews`,
  SET_REVIEWS: `data/set-reviews`,
  LOAD_FILMS: `data/load-films`,

  SET_AUTH_INFO: `user/set-auth-info`,
  SET_AUTHORIZATION_STATUS: `user/set-authorization`,
};

const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (url) => ({payload: url}));
const setAuthorization = createAction(ActionType.SET_AUTHORIZATION_STATUS, (isAuthorized) => ({payload: isAuthorized}));
const loadFilms = createAction(ActionType.LOAD_FILMS, (films) => ({payload: films}));
const changeGenre = createAction(ActionType.CHANGE_GENRE, (genre) => ({payload: genre}));
const getFilmsByCurrentGenre = createAction(ActionType.GET_FILMS_BY_CURRENT_GENRE);
const setShownFilmQuantity = createAction(ActionType.SET_SHOWN_FILM_QUANTITY, (quantity) => ({payload: quantity}));
const increaseShownFilmQuantity = createAction(ActionType.INCREASE_SHOWN_FILM_QUANTITY);
const setAuthInfo = createAction(ActionType.SET_AUTH_INFO, (authInfo) => ({payload: authInfo}));
const setReviews = createAction(ActionType.SET_REVIEWS, (reviews) => ({payload: reviews}));

export {
  ActionType,
  redirectToRoute,
  setAuthorization,
  loadFilms,
  changeGenre,
  getFilmsByCurrentGenre,
  setShownFilmQuantity,
  increaseShownFilmQuantity,
  setAuthInfo,
  setReviews,
};
