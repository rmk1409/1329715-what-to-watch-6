import {Genre} from "../const";
import {filmMocks} from "../mocks/films";
import {ActionType} from "./action";

const initState = {
  genre: Genre.ALL,
  films: filmMocks,
};

const reducer = (state = initState, action) => {
  let newState;
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      newState = {...state, genre: action.value};
      break;
    case ActionType.GET_FILMS_BY_CURRENT_GENRE:
      let films = initState.films;
      if (Genre.ALL !== action.value) {
        films = films.filter((film) => film.genre === action.value);
      }
      newState = {...state, films};
      break;
    default:
      newState = initState;
      break;
  }
  return newState;
};

export {reducer};
