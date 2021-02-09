import React from 'react';
import {filmMockValidation} from "../../validation";
import * as PropTypes from "prop-types";
import {useHistory} from "react-router-dom";

const MovieCard = (props) => {
  const {film, onCover} = props;
  const history = useHistory();

  return <>
    <article className="small-movie-card catalog__movies-card" onMouseOver={() => onCover(film.id)}>
      <div className="small-movie-card__image">
        <img
          src={film[`preview_image`]} alt={film.name}
          width="280" height="175"/>
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html" onClick={(evt)=>{
          evt.preventDefault();
          history.push(`/films/${film.id}`);
        }}>{film.name}</a>
      </h3>
    </article>
  </>;
};

MovieCard.propTypes = {
  ...filmMockValidation,
  onCover: PropTypes.func.isRequired,
};

export {MovieCard};
