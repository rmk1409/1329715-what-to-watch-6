const ActionType = {
  CHANGE_GENRE: `change-genre-action`,
  GET_FILMS_BY_CURRENT_GENRE: `get-film-by-current-genre`,
  SET_SHOWN_FILM_QUANTITY: `set-shown-film-quantity`,
  INCREASE_SHOWN_FILM_QUANTITY: `increase-shown-film-quantity`,
  LOAD_FILMS: `load-films`,
  CHECK_AUTHORIZATION: `check-authorization`,
};

const ActionCreator = {
  setAuthorization(isAuthorized) {
    return {
      type: ActionType.CHECK_AUTHORIZATION,
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
};

export {ActionType, ActionCreator};
