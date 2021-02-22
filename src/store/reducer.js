import {Genre} from "../const";
import {filmMocks} from "../mocks/films";

const initState = {
  genre: Genre.ALL,
  films: filmMocks,
};

const reducer = (state = initState, action) => {
  return {};
};

export {reducer};
