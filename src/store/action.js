const ActionType = {
  CHANGE_GENRE: `change-genre-action`,
  GET_FILMS_BY_CURRENT_GENRE: `get-film-by-current-genre`,
};

const ActionCreator = {
  changeGenre(payload) {
    return {
      type: ActionType.CHANGE_GENRE,
      payload
    };
  },
  getFilmsByCurrentGenre(payload) {
    return {
      type: ActionType.GET_FILMS_BY_CURRENT_GENRE,
      payload
    };
  },
};

export {ActionType, ActionCreator};
