import {Genre, MAX_SHOWN_FILM_QUANTITY_PER_TIME} from "../const";
import {filmMocks} from "../mocks/films";
import {ActionType} from "./action";

const initState = {
  genre: Genre.ALL,
  films: filmMocks,
  initialFilms: filmMocks,
  shownFilmQuantity: filmMocks.length > MAX_SHOWN_FILM_QUANTITY_PER_TIME ? MAX_SHOWN_FILM_QUANTITY_PER_TIME : filmMocks.length,
};

const reducer = (state = initState, action) => {
  let newState;
  let shownFilmQuantity;
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      newState = {...state, genre: action.payload};
      break;
    case ActionType.GET_FILMS_BY_CURRENT_GENRE:
      let films = initState.films;
      if (Genre.ALL !== action.payload) {
        films = films.filter((film) => film.genre === action.payload);
      }
      newState = {...state, films};
      break;
    case ActionType.INCREASE_SHOWN_FILM_QUANTITY:
      shownFilmQuantity = state.shownFilmQuantity + MAX_SHOWN_FILM_QUANTITY_PER_TIME > state.films.length ? state.films.length : state.shownFilmQuantity + MAX_SHOWN_FILM_QUANTITY_PER_TIME;
      newState = {...state, shownFilmQuantity};
      break;
    case ActionType.SET_SHOWN_FILM_QUANTITY:
      shownFilmQuantity = action.payload || state.films.length > MAX_SHOWN_FILM_QUANTITY_PER_TIME ? MAX_SHOWN_FILM_QUANTITY_PER_TIME : state.films.length;
      newState = {...state, shownFilmQuantity};
      break;
    default:
      newState = initState;
      break;
  }
  return newState;
};

export {reducer};
