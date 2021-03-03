import {Genre, MAX_SHOWN_FILM_QUANTITY_PER_TIME} from "../const";
import {ActionType} from "./action";

const initState = {
  chosenGenre: Genre.ALL,
  isFilmsLoaded: false,
  allFilms: [],
  filteredFilms: [],
  shownFilmQuantity: 0,
  authorizationStatus: false,
};

const reducer = (state = initState, {type, payload}) => {
  let newState;
  let shownFilmQuantity;
  switch (type) {
    case ActionType.CHECK_AUTHORIZATION:
      newState = {...state, authorizationStatus: payload};
      break;
    case ActionType.LOAD_FILMS:
      const allFilms = payload;
      newState = {
        ...state,
        isFilmsLoaded: true,
        allFilms,
        filteredFilms: allFilms,
        shownFilmQuantity: allFilms.length > MAX_SHOWN_FILM_QUANTITY_PER_TIME ? MAX_SHOWN_FILM_QUANTITY_PER_TIME : allFilms.length,
      };
      break;
    case ActionType.CHANGE_GENRE:
      newState = {...state, chosenGenre: payload};
      break;
    case ActionType.GET_FILMS_BY_CURRENT_GENRE:
      let filteredFilms = state.allFilms;
      const chosenGenre = state.chosenGenre;
      if (Genre.ALL !== chosenGenre) {
        filteredFilms = filteredFilms.filter((film) => film.genre === chosenGenre);
      }
      newState = {...state, filteredFilms};
      break;
    case ActionType.INCREASE_SHOWN_FILM_QUANTITY:
      shownFilmQuantity = (state.shownFilmQuantity + MAX_SHOWN_FILM_QUANTITY_PER_TIME) < state.filteredFilms.length ?
        state.shownFilmQuantity + MAX_SHOWN_FILM_QUANTITY_PER_TIME :
        state.filteredFilms.length;
      newState = {...state, shownFilmQuantity};
      break;
    case ActionType.SET_SHOWN_FILM_QUANTITY:
      const newShownFilmQuantity = payload;
      shownFilmQuantity = newShownFilmQuantity ||
        (state.filteredFilms.length > MAX_SHOWN_FILM_QUANTITY_PER_TIME ? MAX_SHOWN_FILM_QUANTITY_PER_TIME : state.filteredFilms.length);
      newState = {...state, shownFilmQuantity};
      break;
    default:
      newState = initState;
      break;
  }
  return newState;
};

export {reducer};
