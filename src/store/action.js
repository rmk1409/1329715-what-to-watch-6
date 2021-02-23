const ActionType = {
  CHANGE_GENRE: `change-genre-action`,
  GET_FILMS_BY_CURRENT_GENRE: `get-film-by-current-genre`,
  SET_SHOWN_FILM_QUANTITY: `set-shown-film-quantity`,
  INCREASE_SHOWN_FILM_QUANTITY: `increase-shown-film-quantity`,
};

const ActionCreator = {
  changeGenre(payload) {
    return {
      type: ActionType.CHANGE_GENRE,
      payload,
    };
  },
  getFilmsByCurrentGenre(payload) {
    return {
      type: ActionType.GET_FILMS_BY_CURRENT_GENRE,
      payload,
    };
  },
  setShownFilmQuantity(payload) {
    return {
      type: ActionType.SET_SHOWN_FILM_QUANTITY,
      payload,
    };
  },
  increaseShownFilmQuantity() {
    return {
      type: ActionType.INCREASE_SHOWN_FILM_QUANTITY,
    };
  },
};

export {ActionType, ActionCreator};
