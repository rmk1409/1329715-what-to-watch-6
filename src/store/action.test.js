import {changeGenre, setShownFilmQuantity, increaseShownFilmQuantity, ActionType} from "./action";

describe(`Action creators work correctly`, () => {
  it(`Change genre`, () => {
    const newGenre = `new-genre`;
    const expectedAction = {
      type: ActionType.CHANGE_GENRE,
      payload: newGenre,
    };
    expect(changeGenre(newGenre)).toEqual(expectedAction);
  });

  it(`Set shown film quantity`, () => {
    const newShownFilmQuantity = 42;
    const expectedAction = {
      type: ActionType.SET_SHOWN_FILM_QUANTITY,
      payload: newShownFilmQuantity,
    };
    expect(setShownFilmQuantity(newShownFilmQuantity)).toEqual(expectedAction);
  });

  it(`Increase shown film quantity`, () => {
    const expectedAction = {
      type: ActionType.INCREASE_SHOWN_FILM_QUANTITY,
    };
    expect(increaseShownFilmQuantity()).toEqual(expectedAction);
  });
});
