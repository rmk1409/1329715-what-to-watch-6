import {
  changeGenre,
  increaseShownFilmQuantity,
  loadFilms,
  setFavoriteList,
  setPromo,
  setReviews,
  setShownFilmQuantity,
} from "../action";
import {Genre, MAX_SHOWN_FILM_QUANTITY_PER_TIME} from "../../const";
import {createReducer} from "@reduxjs/toolkit";

const initState = {
  promo: {
    title: `The Grand Budapest Hotel`,
    genre: `Drama`,
    released: 2014,
  },
  favoriteFilms: [],
  reviewsForActiveFilm: [],
  isFilmsLoaded: false,
  allFilms: [],
  chosenGenre: Genre.ALL,
  shownFilmQuantity: 0,
};

const dataReducer = createReducer(initState, (builder) => {
  builder.addCase(setFavoriteList, (state, action) => {
    state.favoriteFilms = action.payload;
  });
  builder.addCase(setPromo, (state, action) => {
    state.promo = action.payload;
  });
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
  builder.addCase(setShownFilmQuantity, (state, action) => {
    state.shownFilmQuantity = action.payload ||
      (state.allFilms.length > MAX_SHOWN_FILM_QUANTITY_PER_TIME ? MAX_SHOWN_FILM_QUANTITY_PER_TIME : state.allFilms.length);
  });
  builder.addCase(increaseShownFilmQuantity, (state, _action) => {
    state.shownFilmQuantity = (state.shownFilmQuantity + MAX_SHOWN_FILM_QUANTITY_PER_TIME) < state.allFilms.length ?
      state.shownFilmQuantity + MAX_SHOWN_FILM_QUANTITY_PER_TIME :
      state.allFilms.length;
  });
});

export {dataReducer};
