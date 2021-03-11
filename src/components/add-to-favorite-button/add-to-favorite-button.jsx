import React from 'react';
import {useDispatch} from "react-redux";
import {changeFavoriteStatus} from "../../store/api-actions";
import * as PropTypes from "prop-types";

const AddToFavoriteButton = ({id}) => {
  const dispatch = useDispatch();
  const handleMyListClick = (evt) => {
    evt.preventDefault();
    dispatch(changeFavoriteStatus(id));
  };

  return <button className="btn btn--list movie-card__button" type="button" onClick={handleMyListClick}>
    <svg viewBox="0 0 19 20" width="19" height="20">
      <use xlinkHref="#add"/>
    </svg>
    <span>My list</span>
  </button>;
};

AddToFavoriteButton.propTypes = {
  id: PropTypes.number.isRequired,
};

export {AddToFavoriteButton};
