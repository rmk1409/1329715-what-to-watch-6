const ActionType = {
  CHANGE_GENRE: `change-genre-action`,
  GET_FILMS_BY_CURRENT_GENRE: `get-film-by-current-genre`,
  SET_SHOWN_FILM_QUANTITY: `set-shown-film-quantity`,
  INCREASE_SHOWN_FILM_QUANTITY: `increase-shown-film-quantity`,
  LOAD_FILMS: `load-films`,
  SET_AUTHORIZATION_STATUS: `set-authorization`,
  SET_AUTH_INFO: `set-auth-info`,
  REDIRECT_TO_ROUTE: `redirect-to-route`,
};

const ActionCreator = {
  redirectToRoute(url) {
    return {
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: url,
    };
  },
  setAuthorization(isAuthorized) {
    return {
      type: ActionType.SET_AUTHORIZATION_STATUS,
      payload: isAuthorized,
    };
  },
  loadFilms(films) {
    return {
      type: ActionType.LOAD_FILMS,
      payload: films,
    };
  },
  changeGenre(genre) {
    return {
      type: ActionType.CHANGE_GENRE,
      payload: genre,
    };
  },
  getFilmsByCurrentGenre() {
    return {
      type: ActionType.GET_FILMS_BY_CURRENT_GENRE,
    };
  },
  setShownFilmQuantity(quantity) {
    return {
      type: ActionType.SET_SHOWN_FILM_QUANTITY,
      payload: quantity,
    };
  },
  increaseShownFilmQuantity() {
    return {
      type: ActionType.INCREASE_SHOWN_FILM_QUANTITY,
    };
  },
  setAuthInfo(data) {
    return {
      type: ActionType.SET_AUTH_INFO,
      payload: data,
    };
  },
};

export {ActionType, ActionCreator};
