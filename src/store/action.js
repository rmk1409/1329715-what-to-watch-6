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

const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});

const setAuthorization = (isAuthorized) => ({
  type: ActionType.SET_AUTHORIZATION_STATUS,
  payload: isAuthorized,
});

const loadFilms = (films) => ({
  type: ActionType.LOAD_FILMS,
  payload: films,
});

const changeGenre = (genre) => ({
  type: ActionType.CHANGE_GENRE,
  payload: genre,
});

const getFilmsByCurrentGenre = () => ({
  type: ActionType.GET_FILMS_BY_CURRENT_GENRE,
});

const setShownFilmQuantity = (quantity) => ({
  type: ActionType.SET_SHOWN_FILM_QUANTITY,
  payload: quantity,
});

const increaseShownFilmQuantity = () => ({
  type: ActionType.INCREASE_SHOWN_FILM_QUANTITY,
});

const setAuthInfo = (authInfo) => ({
  type: ActionType.SET_AUTH_INFO,
  payload: authInfo,
});

const loadReviews = (reviews) => ({
  type: ActionType.LOAD_REVIEWS,
  payload: reviews,
});

const setReviews = (reviews) => ({
  type: ActionType.SET_REVIEWS,
  payload: reviews,
});

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
  loadReviews,
  setReviews
};
