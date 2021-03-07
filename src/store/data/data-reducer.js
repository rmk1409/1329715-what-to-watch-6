import {
  changeGenre,
  getFilmsByCurrentGenre,
  increaseShownFilmQuantity,
  loadFilms,
  setReviews,
  setShownFilmQuantity,
} from "../action";
import {Genre, MAX_SHOWN_FILM_QUANTITY_PER_TIME} from "../../const";
import {createReducer} from "@reduxjs/toolkit";

const initState = {
  reviewsForActiveFilm: [],
  isFilmsLoaded: false,
  allFilms: [],
  chosenGenre: Genre.ALL,
  filteredFilms: [],
  shownFilmQuantity: 0,
};

const dataReducer = createReducer(initState, (builder) => {
  builder.addCase(setReviews, (state, action) => {
    state.reviewsForActiveFilm = action.payload;
  });
  builder.addCase(loadFilms, (state, action) => {
    state.allFilms = action.payload;
    state.isFilmsLoaded = true;
  });
  builder.addCase(changeGenre, (state, action) => {
    state.chosenGenre = action.payload;
  });
  builder.addCase(getFilmsByCurrentGenre, (state, _action) => {
    let filteredFilms = state.allFilms;
    const chosenGenre = state.chosenGenre;
    if (Genre.ALL !== chosenGenre) {
      filteredFilms = filteredFilms.filter((film) => film.genre === chosenGenre);
    }
    state.filteredFilms = filteredFilms;
  });
  builder.addCase(setShownFilmQuantity, (state, action) => {
    state.shownFilmQuantity = action.payload ||
      (state.filteredFilms.length > MAX_SHOWN_FILM_QUANTITY_PER_TIME ? MAX_SHOWN_FILM_QUANTITY_PER_TIME : state.filteredFilms.length);
  });
  builder.addCase(increaseShownFilmQuantity, (state, _action) => {
    state.shownFilmQuantity = (state.shownFilmQuantity + MAX_SHOWN_FILM_QUANTITY_PER_TIME) < state.filteredFilms.length ?
      state.shownFilmQuantity + MAX_SHOWN_FILM_QUANTITY_PER_TIME :
      state.filteredFilms.length;
  });
});

export {dataReducer};
