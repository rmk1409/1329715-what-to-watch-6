import {createAction} from "@reduxjs/toolkit";

const ActionType = {
  CHANGE_GENRE: `data/change-genre-action`,
  GET_FILMS_BY_CURRENT_GENRE: `data/get-film-by-current-genre`,
  SET_SHOWN_FILM_QUANTITY: `data/set-shown-film-quantity`,
  INCREASE_SHOWN_FILM_QUANTITY: `data/increase-shown-film-quantity`,
  LOAD_REVIEWS: `data/load-reviews`,
  SET_REVIEWS: `data/set-reviews`,
  LOAD_FILMS: `data/load-films`,
  SET_PROMO: `data/set-promo`,
  SET_FAVORITE_LIST: `data/set-favorite-list`,

  REDIRECT_TO_ROUTE: `route/redirect-to-route`,

  SET_AUTH_INFO: `user/set-auth-info`,
  SET_AUTHORIZATION_STATUS: `user/set-authorization`,
};

const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (url) => ({payload: url}));
const setAuthorization = createAction(ActionType.SET_AUTHORIZATION_STATUS, (isAuthorized) => ({payload: isAuthorized}));
const loadFilms = createAction(ActionType.LOAD_FILMS, (films) => ({payload: films}));
const changeGenre = createAction(ActionType.CHANGE_GENRE, (genre) => ({payload: genre}));
const setShownFilmQuantity = createAction(ActionType.SET_SHOWN_FILM_QUANTITY, (quantity) => ({payload: quantity}));
const increaseShownFilmQuantity = createAction(ActionType.INCREASE_SHOWN_FILM_QUANTITY);
const setAuthInfo = createAction(ActionType.SET_AUTH_INFO, (authInfo) => ({payload: authInfo}));
const setReviews = createAction(ActionType.SET_REVIEWS, (reviews) => ({payload: reviews}));
const setPromo = createAction(ActionType.SET_PROMO, (promo) => ({payload: promo}));
const setFavoriteList = createAction(ActionType.SET_FAVORITE_LIST, (favoriteList) => ({payload: favoriteList}));

export {
  ActionType,
  redirectToRoute,
  setAuthorization,
  loadFilms,
  changeGenre,
  setShownFilmQuantity,
  increaseShownFilmQuantity,
  setAuthInfo,
  setReviews,
  setPromo,
  setFavoriteList,
};
