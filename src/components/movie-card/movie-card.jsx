import React from 'react';
import {filmValidation} from "../../validation";
import * as PropTypes from "prop-types";
import {Link} from "react-router-dom";

const MovieCard = (props) => {
  const {film, onCover} = props;
  const href = `/films/${film.id}`;

  return <>
    <article className="small-movie-card catalog__movies-card" onMouseOver={() => onCover(film.id)}>
      <div className="small-movie-card__image">
        <img
          src={film[`preview_image`]} alt={film.name}
          width="280" height="175"/>
      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={href}>{film.name}</Link>
      </h3>
    </article>
  </>;
};

MovieCard.propTypes = {
  ...filmValidation,
  onCover: PropTypes.func.isRequired,
};

export {MovieCard};
