import {createAction} from "@reduxjs/toolkit";

const ActionType = {
  CHANGE_GENRE: `data/change-genre-action`,
  SET_SHOWN_FILM_QUANTITY: `data/set-shown-film-quantity`,
  INCREASE_SHOWN_FILM_QUANTITY: `data/increase-shown-film-quantity`,

  LOAD_REVIEWS: `data/set-reviews`,
  LOAD_FILMS: `data/load-films`,
  LOAD_PROMO: `data/set-promo`,
  LOAD_FAVORITE_LIST: `data/set-favorite-list`,

  REDIRECT_TO_ROUTE: `route/redirect-to-route`,

  SET_AUTH_INFO: `user/set-auth-info`,
  SET_AUTHORIZATION_STATUS: `user/set-authorization`,
};

const changeGenre = createAction(ActionType.CHANGE_GENRE);
const setShownFilmQuantity = createAction(ActionType.SET_SHOWN_FILM_QUANTITY);
const increaseShownFilmQuantity = createAction(ActionType.INCREASE_SHOWN_FILM_QUANTITY);

const loadFilms = createAction(ActionType.LOAD_FILMS);
const loadReviews = createAction(ActionType.LOAD_REVIEWS);
const loadPromo = createAction(ActionType.LOAD_PROMO);
const loadFavoriteList = createAction(ActionType.LOAD_FAVORITE_LIST);

const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE);

const setAuthInfo = createAction(ActionType.SET_AUTH_INFO);
const setAuthorizationStatus = createAction(ActionType.SET_AUTHORIZATION_STATUS);

export {
  ActionType,
  redirectToRoute,
  setAuthorizationStatus,
  loadFilms,
  changeGenre,
  setShownFilmQuantity,
  increaseShownFilmQuantity,
  setAuthInfo,
  loadReviews,
  loadPromo,
  loadFavoriteList,
};
