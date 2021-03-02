import {Genre, MAX_SHOWN_FILM_QUANTITY_PER_TIME} from "../const";
import {ActionType} from "./action";

const initState = {
  chosenGenre: Genre.ALL,
  isFilmsLoaded: false,
  films: [],
  initialFilms: [],
  shownFilmQuantity: 0,
};

const reducer = (state = initState, {type, payload}) => {
  let newState;
  let shownFilmQuantity;
  switch (type) {
    case ActionType.LOAD_FILMS:
      newState = {
        ...state,
        isFilmsLoaded: true,
        films: payload,
        initialFilms: payload,
        shownFilmQuantity: payload.length > MAX_SHOWN_FILM_QUANTITY_PER_TIME ? MAX_SHOWN_FILM_QUANTITY_PER_TIME : payload.length,
      };
      break;
    case ActionType.CHANGE_GENRE:
      newState = {...state, chosenGenre: payload};
      break;
    case ActionType.GET_FILMS_BY_CURRENT_GENRE:
      let films = state.initialFilms;
      const chosenGenre = state.chosenGenre;
      if (Genre.ALL !== chosenGenre) {
        films = films.filter((film) => film.genre === chosenGenre);
      }
      newState = {...state, films};
      break;
    case ActionType.INCREASE_SHOWN_FILM_QUANTITY:
      shownFilmQuantity = state.shownFilmQuantity + MAX_SHOWN_FILM_QUANTITY_PER_TIME > state.films.length ? state.films.length : state.shownFilmQuantity + MAX_SHOWN_FILM_QUANTITY_PER_TIME;
      newState = {...state, shownFilmQuantity};
      break;
    case ActionType.SET_SHOWN_FILM_QUANTITY:
      shownFilmQuantity = payload || state.films.length > MAX_SHOWN_FILM_QUANTITY_PER_TIME ? MAX_SHOWN_FILM_QUANTITY_PER_TIME : state.films.length;
      newState = {...state, shownFilmQuantity};
      break;
    default:
      newState = initState;
      break;
  }
  return newState;
};

export {reducer};
