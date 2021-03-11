import {dataReducer, initState} from "./data-reducer";
import {
  changeGenre,
  increaseShownFilmQuantity,
  loadFavoriteList,
  loadFilms,
  loadPromo,
  loadReviews,
  setShownFilmQuantity,
} from "../action";
import {MAX_SHOWN_FILM_QUANTITY_PER_TIME} from "../../const";

const favoriteListStub = [
  {
    name: `A Star Is Born`,
    [`poster_image`]: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/A_Star_Is_Born.jpg`,
    [`preview_image`]: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/A_Star_Is_Born.jpg`,
    [`background_image`]: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/A_Star_is_Born.jpg`,
    [`background_color`]: `#C4C0C0`,
    description: `A musician helps a young singer find fame as age and alcoholism send his own career into a downward spiral.`,
    rating: 3.9,
    [`scores_count`]: 244484,
    director: `Bradley Cooper`,
    starring: [
      `Lady Gaga`,
      `Bradley Cooper`,
      `Sam Elliott`,
    ],
    [`run_time`]: 136,
    genre: `Drama`,
    released: 2018,
    id: 1,
    [`is_favorite`]: true,
    [`video_link`]: `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
    [`preview_video_link`]: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  },
  {
    name: `Shutter Island`,
    [`poster_image`]: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Shutter_Island.jpg`,
    [`preview_image`]: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/shutter-island.jpg`,
    [`background_image`]: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Shutter_Island.jpg`,
    [`background_color`]: `#977461`,
    description: `In 1954, a U.S. Marshal investigates the disappearance of a murderer, who escaped from a hospital for the criminally insane.`,
    rating: 4.1,
    [`scores_count`]: 1002557,
    director: `Martin Scorsese`,
    starring: [
      `Leonardo DiCaprio`,
      `Emily Mortimer`,
      `Mark Ruffalo`,
    ],
    [`run_time`]: 138,
    genre: `Thriller`,
    released: 2010,
    id: 2,
    [`is_favorite`]: true,
    [`video_link`]: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
    [`preview_video_link`]: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  },
];
const reviewsForActiveFilmStub = [
  {
    id: 1,
    user: {
      id: 10,
      name: `Max`,
    },
    rating: 9.1,
    comment: `This movie really touched my heart, it really is the best movie of the year and everyone should see this masterpiece.`,
    date: `2021-02-16T15:08:45.722Z`,
  },
];
const allFilmsStub = [
  {
    name: `A Star Is Born`,
    [`poster_image`]: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/A_Star_Is_Born.jpg`,
    [`preview_image`]: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/A_Star_Is_Born.jpg`,
    [`background_image`]: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/A_Star_is_Born.jpg`,
    [`background_color`]: `#C4C0C0`,
    description: `A musician helps a young singer find fame as age and alcoholism send his own career into a downward spiral.`,
    rating: 3.9,
    [`scores_count`]: 244484,
    director: `Bradley Cooper`,
    starring: [
      `Lady Gaga`,
      `Bradley Cooper`,
      `Sam Elliott`,
    ],
    [`run_time`]: 136,
    genre: `Drama`,
    released: 2018,
    id: 1,
    [`is_favorite`]: true,
    [`video_link`]: `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
    [`preview_video_link`]: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  },
  {
    name: `Shutter Island`,
    [`poster_image`]: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Shutter_Island.jpg`,
    [`preview_image`]: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/shutter-island.jpg`,
    [`background_image`]: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Shutter_Island.jpg`,
    [`background_color`]: `#977461`,
    description: `In 1954, a U.S. Marshal investigates the disappearance of a murderer, who escaped from a hospital for the criminally insane.`,
    rating: 4.1,
    [`scores_count`]: 1002557,
    director: `Martin Scorsese`,
    starring: [
      `Leonardo DiCaprio`,
      `Emily Mortimer`,
      `Mark Ruffalo`,
    ],
    [`run_time`]: 138,
    genre: `Thriller`,
    released: 2010,
    id: 2,
    [`is_favorite`]: true,
    [`video_link`]: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
    [`preview_video_link`]: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  },
];
const promoStub = {
  name: `A Star Is Born`,
  [`poster_image`]: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/A_Star_Is_Born.jpg`,
  [`preview_image`]: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/A_Star_Is_Born.jpg`,
  [`background_image`]: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/A_Star_is_Born.jpg`,
  [`background_color`]: `#C4C0C0`,
  description: `A musician helps a young singer find fame as age and alcoholism send his own career into a downward spiral.`,
  rating: 3.9,
  [`scores_count`]: 244484,
  director: `Bradley Cooper`,
  starring: [
    `Lady Gaga`,
    `Bradley Cooper`,
    `Sam Elliott`,
  ],
  [`run_time`]: 136,
  genre: `Drama`,
  released: 2018,
  id: 1,
  [`is_favorite`]: true,
  [`video_link`]: `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
  [`preview_video_link`]: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
};

describe(`Reducers work correctly`, () => {
  it(`reducer without action should return initial state`, function () {
    expect(dataReducer(undefined, {})).toEqual(initState);
  });
  it(`should load favorite list`, function () {
    expect(dataReducer(initState, loadFavoriteList(favoriteListStub))).toEqual({
      ...initState,
      favoriteFilms: favoriteListStub,
    });
    expect(dataReducer(initState, loadFavoriteList([]))).toEqual({
      ...initState,
    });
  });
  it(`should load reviews for active film`, function () {
    expect(dataReducer(initState, loadReviews(reviewsForActiveFilmStub))).toEqual({
      ...initState,
      reviewsForActiveFilm: reviewsForActiveFilmStub,
    });
    expect(dataReducer(initState, loadReviews([]))).toEqual({
      ...initState,
    });
  });
  it(`should load films`, function () {
    expect(dataReducer(initState, loadFilms(allFilmsStub))).toEqual({
      ...initState,
      allFilms: allFilmsStub,
      isFilmsLoaded: true,
    });
  });
  it(`should load promo`, function () {
    expect(dataReducer(initState, loadPromo(promoStub))).toEqual({
      ...initState,
      promo: promoStub,
    });
  });
  it(`should change genre`, function () {
    const newGenre = `newGenre`;
    expect(dataReducer(initState, changeGenre(newGenre))).toEqual({
      ...initState,
      chosenGenre: newGenre,
    });
  });
  it(`should set shown film quantity`, function () {
    const newData = 42;
    expect(dataReducer(initState, setShownFilmQuantity(newData))).toEqual({
      ...initState,
      shownFilmQuantity: newData,
    });
  });
  it(`should calculate shown film quantity`, function () {
    const anyNumberLessThanMaxShownFilmQuantityPerTime = 4;
    const someArray = new Array(anyNumberLessThanMaxShownFilmQuantityPerTime).fill(null);
    expect(dataReducer({...initState, allFilms: someArray}, setShownFilmQuantity())).toEqual({
      ...initState,
      allFilms: someArray,
      shownFilmQuantity: someArray.length,
    });
  });
  it(`should calculate shown film quantity by MAX_SHOWN_FILM_QUANTITY_PER_TIME`, function () {
    const anyNumberBiggerThanMaxShownFilmQuantityPerTime = 9;
    const someBigArray = new Array(anyNumberBiggerThanMaxShownFilmQuantityPerTime).fill(null);
    expect(dataReducer({...initState, allFilms: someBigArray}, setShownFilmQuantity())).toEqual({
      ...initState,
      allFilms: someBigArray,
      shownFilmQuantity: MAX_SHOWN_FILM_QUANTITY_PER_TIME,
    });
  });
  it(`should increase shown film quantity to film quantity`, function () {
    const anyNumberBiggerThanMaxShownFilmQuantityPerTime = 9;
    const someBigArray = new Array(anyNumberBiggerThanMaxShownFilmQuantityPerTime).fill(null);
    const anyNumberLessThanAllFilmsLength = 5;
    expect(dataReducer({
      ...initState,
      allFilms: someBigArray,
      shownFilmQuantity: anyNumberLessThanAllFilmsLength,
    }, increaseShownFilmQuantity())).toEqual({
      ...initState,
      allFilms: someBigArray,
      shownFilmQuantity: someBigArray.length,
    });
  });
  it(`should increase shown film quantity by MAX_SHOWN_FILM_QUANTITY_PER_TIME`, function () {
    const anyNumberBiggerThanMaxShownFilmQuantityPerTime = 9;
    const someBigArray = new Array(anyNumberBiggerThanMaxShownFilmQuantityPerTime).fill(null);
    expect(dataReducer({...initState, allFilms: someBigArray}, increaseShownFilmQuantity())).toEqual({
      ...initState,
      allFilms: someBigArray,
      shownFilmQuantity: MAX_SHOWN_FILM_QUANTITY_PER_TIME,
    });
  });
});
