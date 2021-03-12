import React from 'react';
import {useDispatch} from "react-redux";
import {redirectToRoute} from "../../store/action";
import * as PropTypes from "prop-types";

const PlayButton = ({id}) => {
  const dispatch = useDispatch();
  const handlePlayClick = (evt) => {
    evt.preventDefault();
    dispatch(redirectToRoute(`/player/${id}`));
  };

  return <button className="btn btn--play movie-card__button" type="button" onClick={handlePlayClick}>
    <svg viewBox="0 0 19 19" width="19" height="19">
      <use xlinkHref="#play-s"/>
    </svg>
    <span>Play</span>
  </button>;
};

PlayButton.propTypes = {
  id: PropTypes.number.isRequired,
};

export {PlayButton};
