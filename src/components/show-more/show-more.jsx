import React from 'react';
import {useDispatch} from "react-redux";
import {increaseShownFilmQuantity} from "../../store/action";

const ShowMore = () => {
  const dispatch = useDispatch();
  const clickShowMore = () => {
    dispatch(increaseShownFilmQuantity());
  };

  return <button className="catalog__button" type="button" onClick={clickShowMore}>Show more</button>;
};

export {ShowMore};
