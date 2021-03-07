import {ActionType} from "../action";
import {Genre, MAX_SHOWN_FILM_QUANTITY_PER_TIME} from "../../const";

const initState = {
  reviewsForActiveFilm: [],
  isFilmsLoaded: false,
  allFilms: [],
  chosenGenre: Genre.ALL,
  filteredFilms: [],
  shownFilmQuantity: 0,
};

const dataReducer = (state = initState, {type, payload}) => {
  let newState = state;
  let shownFilmQuantity;
  switch (type) {
    case ActionType.SET_REVIEWS:
      newState = {
        ...state,
        reviewsForActiveFilm: payload,
      };
      break;
    case ActionType.LOAD_FILMS:
      const allFilms = payload;
      newState = {
        ...state,
        isFilmsLoaded: true,
        allFilms,
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
    case ActionType.SET_SHOWN_FILM_QUANTITY:
      const newShownFilmQuantity = payload;
      shownFilmQuantity = newShownFilmQuantity ||
        (state.filteredFilms.length > MAX_SHOWN_FILM_QUANTITY_PER_TIME ? MAX_SHOWN_FILM_QUANTITY_PER_TIME : state.filteredFilms.length);
      newState = {...state, shownFilmQuantity};
      break;
    case ActionType.INCREASE_SHOWN_FILM_QUANTITY:
      shownFilmQuantity = (state.shownFilmQuantity + MAX_SHOWN_FILM_QUANTITY_PER_TIME) < state.filteredFilms.length ?
        state.shownFilmQuantity + MAX_SHOWN_FILM_QUANTITY_PER_TIME :
        state.filteredFilms.length;
      newState = {...state, shownFilmQuantity};
      break;
  }
  return newState;
};

export {dataReducer};
