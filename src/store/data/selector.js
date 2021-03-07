import {NameSpace} from "../reducer";

const isFilmsLoaded = (state) => state[NameSpace.DATA].isFilmsLoaded;
const getAllFilms = (state) => state[NameSpace.DATA].allFilms;
const getChosenGenre = (state) => state[NameSpace.DATA].chosenGenre;
const getFilteredFilms = (state) => state[NameSpace.DATA].filteredFilms;
const getShownFilmQuantity = (state) => state[NameSpace.DATA].shownFilmQuantity;
const getReviewsForActiveFilm = (state) => state[NameSpace.DATA].reviewsForActiveFilm;

export {isFilmsLoaded, getAllFilms, getChosenGenre, getFilteredFilms, getShownFilmQuantity, getReviewsForActiveFilm};
